import {
  FieldType,
  DataSourceApi,
  SelectableValue,
  DataQueryRequest,
  MutableDataFrame,
  DataQueryResponse,
  DataSourceInstanceSettings,
} from '@grafana/data';
import _ from 'lodash';
import defaults from 'lodash/defaults';
import { getBackendSrv, getTemplateSrv } from "@grafana/runtime";
import { AppResponseDataSourceOptions, defaultQuery, AppResponseURLs, SourceGroup, AppResponseQuery } from './types';

export class DataSource extends DataSourceApi<AppResponseQuery, AppResponseDataSourceOptions> {
  token: any;
  url: string;
  headers: any;
  urls: AppResponseURLs;
  settings: DataSourceInstanceSettings<AppResponseDataSourceOptions>;

  constructor(instanceSettings: DataSourceInstanceSettings<AppResponseDataSourceOptions>) {
    super(instanceSettings);

    this.settings = instanceSettings;
    this.url = this.settings.url || '';
    this.token = instanceSettings.jsonData.token ?? '';

    this.urls = {
      base: this.url + '/base',
      auth: this.url + '/auth',
      webApp: this.url + '/webapps',
      metric: this.url + '/aggregates',
      hostGroup: this.url + '/hostgroups',
      url: this.url + '/urls',
      application: this.url + '/applications',
      instanceCreationSync: this.url + '/instancecreationsync',
    };

    this.headers = { 'Content-Type': 'application/json' };
  }

  annotationQuery(options: any) {
    var query = getTemplateSrv().replace(options.annotation.query, {}, 'glob');
    var annotationQuery = {
      range: options.range,
      annotation: {
        name: options.annotation.name,
        datasource: options.annotation.datasource,
        enable: options.annotation.enable,
        iconColor: options.annotation.iconColor,
        query: query
      },
      rangeRaw: options.rangeRaw
    };

    return this.doRequest({
      url: this.url + '/annotations',
      method: 'POST',
      data: annotationQuery
    }).then(result => {
      return result.data;
    });
  }

  async query(options: DataQueryRequest<AppResponseQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const to = range!.to.valueOf();
    const from = range!.from.valueOf();

    let queryTimeStop;
    let queryTimeStart;
    let queryTimeshift = 0;
    let dataDef_source = {};
    let dataDef_groupBy = {};
    let dataDef_topBy = {};
    let dataDef_columns: string[] = [];
    let dataDef_filters: { type: string; value: string; }[] = [];

    const promises = options.targets.map((target) => {
      const query = defaults(target, defaultQuery);
      queryTimeStart = ((new Date(to)).getTime()) / 1000;
      queryTimeStop = ((new Date(from)).getTime()) / 1000;

      if (typeof query.timeshift === "undefined" || (typeof query.timeshift === "string" && query.timeshift === [])) {
        query.timeshift = 0;
      }

      queryTimeshift = query.timeshift + query.timeshift * 86400 - (1 * query.timeshift);
      queryTimeStop = queryTimeStop - queryTimeshift;
      queryTimeStart = queryTimeStart - queryTimeshift
      if (typeof queryTimeshift !== 'undefined') {
        query.timeshift = queryTimeshift;
      }

      if (query.sourceGroup == SourceGroup.hostGroup) {
        // This variable contains the type of source selected, it is the same for hostgroups and applications
        dataDef_source = { "name": "aggregates" };
        // For each datapoint, data are grouped by timestamp and id of hostgroup
        dataDef_groupBy = ["start_time", "host_group.id"];
        // Columns are fields queried, some are fixed value (host_group.id, host_group.name...) and some are metrics
        dataDef_columns = ["start_time", "host_group.id", "host_group.name"];
        // Metric request is filtered by hortgroup selected
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "host_group.id == " + query.currentHostGroupID
          },
        );
      } else if (query.sourceGroup === SourceGroup.application) {
        dataDef_source = { "name": "aggregates" };
        dataDef_groupBy = ["start_time", "app.id"];
        dataDef_columns = ["start_time", "app.id", "app.name"];
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "app.id == " + query.currentApplicationID
          },
        );
      } else if (query.sourceGroup === SourceGroup.ip) {
        dataDef_source = { "name": "aggregates" };
        dataDef_groupBy = ["start_time", "app.id"];
        dataDef_columns = ["start_time", "app.id", "app.name", "tcp.ip"];
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "tcp.ip == " + query.currentIP
          },
        );
      } else if (query.sourceGroup === SourceGroup.webApp) {
        dataDef_source = {
          "origin": "",
          "path": "aggregates:App",
          "type": "",
          "name": "aggregates"
        };
        dataDef_groupBy = ["start_time", "app.id"]
        dataDef_columns = ["start_time", "app.id", "app.name"]
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "app.id == " + query.currentWebAppID
          },
        );
      }

      if (query.currentMetricID !== undefined) {
        dataDef_columns.push(query.currentMetricID);
      }

      let dataDef = {
        // Data source to handle the data request. The source property is an object
        // It has the following required sub-properties: name (required) and path (optional)
        'source': dataDef_source,
        // Specify the time duration of the data requests
        // The time property also includes a few properties that help refine time-series requests.
        "time": {
          // Epoch start time of the request, the start time is inclusive, the unit is seconds.
          "start": queryTimeStop.toString(),
          // Epoch end time of the request, the end time is exclusive, the unit is seconds.
          "end": queryTimeStart.toString(),
          // This refers to the amount of time for which the data source computes a summary of the metrics it received
          // The data source examines all data and creates summaries for 1 minute, 5 minutes, 1 hour, 6 hours, and 1 day
          'granularity': query.granularity?.value.toString(),
        },
        // The group by property specifies the keys in the request. It is usually used to determine what kind of data is requested
        // If the start_time (or end_time) column is in the group_by, then the request is considered time series
        "group_by": dataDef_groupBy,
        "top_by": dataDef_topBy,
        // Request columns, the client can specify the requested key/metric columns, as well as their order
        "columns": dataDef_columns,
        // The filters property is an array with filter objects (STEELFILTER is default filter)
        "filters": dataDef_filters,
      };

      return this.doRequest({
        url: this.urls.instanceCreationSync,
        data: { 'data_defs': [dataDef] },
        method: 'POST'
      }).then(
        (response) => {
          let name;
          let _dataDef = response.data.data_defs[0];

          if (query.alias !== undefined && query.alias.trim() !== '') {
            name = query.alias;
          }
          else {
            name = query.currentMetric;
          }

          const frame = new MutableDataFrame({
            refId: query.refId,
            name: name,
            fields: [
              { name: "Time", type: FieldType.time },
              { name: "Value", type: FieldType.number },
            ],
          });

          for (let i = 0; i < _dataDef.data.length; i++) {
            let row = _dataDef.data[i];
            frame.appendRow([new Date(row[0] * 1000), row[row.length - 1]]);
          }

          return frame;
        }
      );
    });

    return Promise.all(promises).then((data) => ({ data }));
  }

  async testDatasource() {
    return getBackendSrv().datasourceRequest({
      method: 'POST',
      url: this.urls.auth,
      headers: this.headers,
    }).then(response => {
      if (response.ok === true) {
        this.settings.jsonData.token = response.data.access_token;
        return {
          status: 'success',
          message: 'Data source is working',
        };
      } else {
        return {
          status: 'error',
          message: 'Data source is not working',
        };
      }
    }).catch(error => {
      return {
        status: 'error',
        message: error.statusText,
      };
    }
    );
  }

  async doRequest(options: any) {
    if (this.token === '' || this.token === undefined || this.token === null) {
      await getBackendSrv().datasourceRequest({
        method: 'POST',
        url: this.urls.auth,
      }
      ).then(
        (response) => {
          this.settings.jsonData.token = response.data.access_token;
        });
    }

    return getBackendSrv().datasourceRequest({
      ...options,
      headers: {
        ...this.headers,
        'Authorization': 'Bearer ' + this.settings.jsonData.token
      }
    });
  }

  async getHostGroups() {
    let result: SelectableValue<any>[] = [];
    await this.doRequest({
      method: 'GET',
      url: this.urls.hostGroup,
    }).then(
      (response) => {
        if (typeof response !== 'undefined') {
          for (let k in response.data.items) {
            if (response.data.items[k]["enabled"]) {
              result.push(
                {
                  name: response.data.items[k]["name"],
                  id: response.data.items[k]["id"]
                } as SelectableValue
              );
            }
          }
        }
      }
    )
    return result;
  }

  async getApplications() {
    let result: SelectableValue<any>[] = [];
    await this.doRequest({
      method: 'GET',
      url: this.urls.application,
    }).then(
      (response) => {
        if (typeof response !== 'undefined') {
          for (let k in response.data.items) {
            if (response.data.items[k]["enabled"]) {
              result.push(
                {
                  name: response.data.items[k]["name"],
                  id: response.data.items[k]["id"]
                } as SelectableValue
              );
            }
          }
        }
      }
    )
    return result;
  }

  async getIPs() {
    let result: SelectableValue<any>[] = [];
    await this.doRequest({
      method: 'GET',
      url: this.urls.url,
    }).then(
      (response) => {
        if (typeof response !== 'undefined') {
          for (let k in response.data.items) {
            if (response.data.items[k]["enabled"]) {
              result.push(
                {
                  name: response.data.items[k]["name"],
                  id: response.data.items[k]["id"]
                } as SelectableValue
              );
            }
          }
        }
      }
    )
    return result;
  }

  async getWebApps() {
    let result: SelectableValue<any>[] = [];
    await this.doRequest({
      method: 'GET',
      url: this.urls.webApp,
    }).then(
      (response) => {
        if (typeof response !== 'undefined') {
          for (let k in response.data.items) {
            if (response.data.items[k]["enabled"]) {
              result.push(
                {
                  'name': response.data.items[k].name,
                  'id': response.data.items[k].id
                } as SelectableValue
              );
            }
          }
        }
      }
    )
    return result;
  }

  async getMetrics(sourceGroup: SourceGroup) {
    let result: SelectableValue<any>[] = [];
    await this.doRequest({
      method: 'GET',
      url: this.urls.metric
    }).then(
      (response) => {
        for (let k in response.data.columns) {
          const id = response.data.columns[k].id;
          let unit = response.data.columns[k].unit;
          const rate = response.data.columns[k].rate;
          const label = response.data.columns[k].label;
          if (
            !id.endsWith('.id') && !id.endsWith('_id')
            && !id.endsWith('.id') && !id.endsWith('.name')
            && !id.endsWith('_name') && !id.endsWith('.ip')
            && !id.endsWith('_ip') && !id.endsWith('.url')
            && !id.endsWith('_url') && !id.endsWith('.type')
            && !id.endsWith('_type') && !id.endsWith('.dns')
            && !id.endsWith('_dns') && !id.endsWith('start_time')
            && !id.endsWith('end_time') && !id.includes('rtp')
          ) {
            if (
              sourceGroup === SourceGroup.application
              && !id.includes('p2m') && !id.includes('m2p')
              && !id.includes('web')
            ) {
              if (unit === 'none') {
                unit = 'occurence'
              }

              if (typeof rate !== 'undefined') {
                result.push({
                  'name': label + "  (" + unit + "/" + rate + ")",
                  'id': id
                } as SelectableValue);
              }
              else {
                result.push({
                  'name': label + "  (" + unit + ")",
                  'id': id
                } as SelectableValue);
              }
            } else if (
              sourceGroup === SourceGroup.webApp && id.includes('web')
            ) {
              if (unit === 'none') {
                unit = 'occurence'
              }

              if (typeof rate !== 'undefined') {
                result.push({
                  'name': label + "  (" + unit + "/" + rate + ")",
                  'id': id
                } as SelectableValue);
              }
              else {
                result.push({
                  'name': label + "  (" + unit + ")",
                  'id': id
                } as SelectableValue);
              }
            } else if (sourceGroup === SourceGroup.hostGroup) {
              if (unit === 'none') {
                unit = 'occurence'
              }

              if (typeof rate !== 'undefined') {
                result.push({
                  'name': label + "  (" + unit + "/" + rate + ")",
                  'id': id
                } as SelectableValue);
              }
              else {
                result.push({
                  'name': label + "  (" + unit + ")",
                  'id': id
                } as SelectableValue);
              }
            }
          }
        }
      }
    )
    return result;
  }
}
