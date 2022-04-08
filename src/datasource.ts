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
import { getBackendSrv } from "@grafana/runtime";
import { AppResponseDataSourceOptions, defaultQuery, AppResponseURLs, SourceGroup, AppResponseQuery } from './types';


export class DataSource extends DataSourceApi<AppResponseQuery, AppResponseDataSourceOptions> {
  token: any;
  url: string;
  headers: any;
  urls: AppResponseURLs;
  settings: DataSourceInstanceSettings<AppResponseDataSourceOptions>;

  data: any = [];
  ipMetrics: SelectableValue[] = [];
  webApps: SelectableValue[] = [];
  webAppMetrics: SelectableValue[] = [];
  hostGroups: SelectableValue[] = [];
  hostGroupMetrics: SelectableValue[] = [];
  applications: SelectableValue[] = [];
  applicationMetrics: SelectableValue[] = [];

  lastFetchQuery: Date;
  lastFetchMetrics: Date;
  lastFetchWebApps: Date;
  lastFetchWebAppMetrics: Date;
  lastFetchHostGroups: Date;
  lastFetchHostGroupMetrics: Date;
  lastFetchApplications: Date;
  lastFetchApplicationMetrics: Date;
  lastFetchIPMetrics: Date;

  queryTimeout: Number = 60;  // In seconds
  optionsTimeout: Number = 15;  // In minutes

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
      application: this.url + '/applications',
      instanceCreationSync: this.url + '/instancecreationsync',
    };

    this.headers = { 'Content-Type': 'application/json' };

    this.lastFetchQuery = new Date();

    this.lastFetchMetrics = new Date();

    this.lastFetchWebApps = new Date();
    this.lastFetchWebAppMetrics = new Date();

    this.lastFetchHostGroups = new Date();
    this.lastFetchHostGroupMetrics = new Date();

    this.lastFetchApplications = new Date();
    this.lastFetchApplicationMetrics = new Date();
    this.lastFetchIPMetrics = new Date();
  }

  async query(options: DataQueryRequest<AppResponseQuery>): Promise<DataQueryResponse> {
    const deltaInSeconds = ((Date.now() - this.lastFetchQuery.getTime()) / 1000);
    console.debug(`[DataSource.query] ${deltaInSeconds} seconds since last query.`);
    if (
      deltaInSeconds < this.queryTimeout
      && this.data.length > 0
    ) {
      console.debug('[DataSource.query] Returning cached data.');
      return Promise.resolve({ data: this.data });
    } else {
      console.debug('[DataSource.query] Fetching data from server.');
      this.lastFetchQuery = new Date(Date.now());
      this.data = [];
    }

    const { range } = options;
    const to = range!.to.valueOf();
    const from = range!.from.valueOf();

    let queryTimeStop;
    let queryTimeStart;
    let queryTimeshift = 0;
    let dataDef_source = {};
    let dataDef_groupBy = {};
    let dataDef_columns: string[] = [];
    let currentMetric: string = '';
    let currentMetricID: string = '';
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

      dataDef_source = { "name": "aggregates" };
      if (query.sourceGroup == SourceGroup.hostGroup) {
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

        currentMetric = query.currentHostGroupMetric;
        currentMetricID = query.currentHostGroupMetricID;
      } else if (query.sourceGroup === SourceGroup.application) {
        dataDef_groupBy = ["start_time", "app.id"];
        dataDef_columns = ["start_time", "app.id", "app.name"];
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "app.id == " + query.currentApplicationID
          },
        );

        currentMetric = query.currentApplicationMetric;
        currentMetricID = query.currentApplicationMetricID;
      } else if (query.sourceGroup === SourceGroup.ip) {
        dataDef_source = { "name": "aggregates" };
        dataDef_groupBy = ["start_time"];
        dataDef_columns = ["start_time", "tcp.ip", "tcp.dns"];
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "tcp.ip == " + query.currentIP
          },
        );

        currentMetric = query.currentIPMetric;
        currentMetricID = query.currentIPMetricID;
      } else if (query.sourceGroup === SourceGroup.webApp) {
        dataDef_groupBy = ["start_time", "app.id"]
        dataDef_columns = ["start_time", "app.id", "app.name"]
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "app.id == " + query.currentWebAppID
          },
        );

        currentMetric = query.currentWebAppMetric;
        currentMetricID = query.currentWebAppMetricID;
      }

      if (currentMetricID !== '') {
        dataDef_columns.push(currentMetricID);
      }

      let dataDef: any = {
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
        // Request columns, the client can specify the requested key/metric columns, as well as their order
        "columns": dataDef_columns,
      };

      if (query.top) {
        dataDef.limit = query.topN || 10;
        dataDef.top_by = [{ "id": currentMetricID, "direction": 'desc' }];
        dataDef.group_by = {};  // Remove start time.
        // dataDef.group_by = dataDef.group_by.slice(1);  // Remove start time.
        dataDef.columns = dataDef.columns.slice(1);  // Remove start time.
      } else {
        dataDef.filters = dataDef_filters;
      }

      return this.doRequest({
        url: this.urls.instanceCreationSync,
        data: { 'data_defs': [dataDef] },
        method: 'POST'
      }).then(
        (response) => {
          let name;
          let _dataDef = response.data.data_defs[0];

          if (_dataDef.data === undefined) {
            _dataDef.data = [];
          }

          if (query.alias !== undefined && query.alias.trim() !== '') {
            name = query.alias;
          }
          else {
            name = currentMetric;
          }

          let fields: any = [];

          let frame;

          if (query.top) {
            let removeIndices = [];
            for (let index = 0; index < _dataDef.columns.length; index++) {
              const column = _dataDef.columns[index];
              if (column.search('id') === -1) {
                fields.push({ name: column.replace(/\.|_/g, " ").toUpperCase(), type: FieldType.other });
              } else {
                removeIndices.push(index);
              }
            }

            frame = new MutableDataFrame({
              refId: query.refId,
              name: name,
              fields: fields,
            });

            for (let i = 0; i < _dataDef.data.length; i++) {
              removeIndices.forEach((j) => { _dataDef.data[i].splice(j, 1); });
              frame.appendRow(_dataDef.data[i]);
            }
          } else {
            fields = [
              { name: "Time", type: FieldType.time },
              { name: "Value", type: FieldType.number },
            ]

            frame = new MutableDataFrame({
              refId: query.refId,
              name: name,
              fields: fields,
            });

            for (let i = 0; i < _dataDef.data.length; i++) {
              let row = _dataDef.data[i];
              frame.appendRow([new Date(row[0] * 1000), row[row.length - 1]]);
            }
          }
          
          // Push data a variable for caching.
          this.data.push(frame);

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
    console.debug(`[DataSource.doRequest] ${options.method} ${options.url}`);

    if (
      this.settings.jsonData.token === ''
      || this.settings.jsonData.token === undefined
      || this.settings.jsonData.token === null
    ) {
      console.debug(`[DataSource.doRequest] No token.`);
      await getBackendSrv().datasourceRequest({
        method: 'POST',
        url: this.urls.auth,
      }).then((response) => {
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
    console.debug('[DataSource.getHostGroups]');

    let result: SelectableValue<any>[] = [];
    try {
      if (
        ((Date.now() - this.lastFetchHostGroups.getTime()) / 1000 / 60) < this.optionsTimeout
        && this.hostGroups.length > 0
      ) {
        console.debug('[DataSource.getHostGroups] Cache hit.');
        return this.hostGroups; 
      }

      await this.doRequest({
        method: 'GET',
        url: this.urls.hostGroup,
      }).then(
        (response) => {
          this.hostGroups = [];

          if (typeof response !== 'undefined') {
            for (let k in response.data.items) {
              if (response.data.items[k]["enabled"]) {
                const hostGroup = {
                  'label': response.data.items[k]["name"],
                  'value': response.data.items[k]["id"]
                } as SelectableValue;

                result.push(hostGroup);
                this.hostGroups.push(hostGroup);
              }
            }
          }

          this.lastFetchHostGroups = new Date(Date.now());
        }
      )
    } catch (error) {
      console.error(error);
    }

    return result;
  }

  async getApplications() {
    let result: SelectableValue<any>[] = [];

    try {
      if (
        ((Date.now() - this.lastFetchApplications.getTime()) / 1000 / 60) < this.optionsTimeout
        && this.applications.length > 0
      ) { 
        console.debug('[DataSource.getApplications] Cache hit.');
        return this.applications; 
      }

      await this.doRequest({
        method: 'GET',
        url: this.urls.application,
      }).then(
        (response) => {
          if (typeof response !== 'undefined') {
            this.applications = [];

            for (let k in response.data.items) {
              if (response.data.items[k]["enabled"]) {
                const application = {
                  'label': response.data.items[k]["name"],
                  'value': response.data.items[k]["id"]
                } as SelectableValue;

                result.push(application);
                this.applications.push(application);
              }
            }
          }
          this.lastFetchApplications = new Date(Date.now());
        }
      )
    } catch (error) {
      console.error(error);
    }

    return result;
  }

  async getWebApps() {
    let result: SelectableValue<any>[] = [];

    try {
      if (
        ((Date.now() - this.lastFetchWebApps.getTime()) / 1000 / 60) < this.optionsTimeout
        && this.webApps.length > 0
      ) { 
        console.debug('[DataSource.getWebApps] Cache hit.');
        return this.webApps; 
      }

      await this.doRequest({
        method: 'GET',
        url: this.urls.webApp,
      }).then(
        (response) => {
          if (typeof response !== 'undefined') {
            this.webApps = [];

            for (let k in response.data.items) {
              if (response.data.items[k]["enabled"]) {
                const webApp = {
                  'label': response.data.items[k]["name"],
                  'value': response.data.items[k]["id"]
                } as SelectableValue;

                result.push(webApp);
                this.webApps.push(webApp);
              }
            }
          }
          this.lastFetchWebApps = new Date(Date.now());
        }
      )
    } catch (error) {
      console.error(error);
    }

    return result;
  }

  async getApplicationMetrics() {
    let result: SelectableValue<any>[] = [];

    try {
      if (
        ((Date.now() - this.lastFetchApplicationMetrics.getTime()) / 1000 / 60) < this.optionsTimeout
        && this.applicationMetrics.length > 0
      ) { 
        console.debug('[DataSource.getApplicationMetrics] Cache hit.');
        return this.applicationMetrics; 
      }

      await this.doRequest({
        method: 'GET',
        url: this.urls.metric,
      }).then(
        (response) => {
          if (typeof response !== 'undefined') {
            this.applicationMetrics = [];

            for (let k in response.data.columns) {
              const id = response.data.columns[k].id;
              let unit = response.data.columns[k].unit;
              const rate = response.data.columns[k].rate;
              let label = response.data.columns[k].label;

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
                if (unit === 'none') {
                  unit = 'occurence'
                }

                if (typeof rate !== 'undefined') {
                  label = label + "  (" + unit + "/" + rate + ")";
                } else {
                  label = label + "  (" + unit + ")";
                }

                const metric = {
                  'value': id,
                  'label': label
                } as SelectableValue;

                if (
                  !id.includes('p2m') && !id.includes('m2p')
                  && !id.includes('web') && !id.includes('_db.')
                  && !id.includes('cxa')
                ) {
                  result.push(metric);
                  this.applicationMetrics.push(metric);
                }
              }
            }
          }
          this.lastFetchApplicationMetrics = new Date(Date.now());
        }
      )
    } catch (error) {
      console.error(error);
    }

    return result;
  }

  async getIPMetrics() {
    let result: SelectableValue<any>[] = [];

    try {
      if (
        ((Date.now() - this.lastFetchIPMetrics.getTime()) / 1000 / 60) < this.optionsTimeout
        && this.ipMetrics.length > 0
      ) { 
        console.debug('[DataSource.getIPMetrics] Cache hit.');
        return this.ipMetrics; 
      }

      await this.doRequest({
        method: 'GET',
        url: this.urls.metric,
      }).then(
        (response) => {
          if (typeof response !== 'undefined') {
            this.ipMetrics = [];

            for (let k in response.data.columns) {
              const id = response.data.columns[k].id;
              let unit = response.data.columns[k].unit;
              const rate = response.data.columns[k].rate;
              let label = response.data.columns[k].label;

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
                if (unit === 'none') {
                  unit = 'occurence'
                }

                if (typeof rate !== 'undefined') {
                  label = label + "  (" + unit + "/" + rate + ")";
                } else {
                  label = label + "  (" + unit + ")";
                }

                const metric = {
                  'value': id,
                  'label': label
                } as SelectableValue;

                if (
                  !id.includes('p2m') && !id.includes('m2p')
                  && !id.includes('web') && !id.includes('_db.')
                  && !id.includes('cxa')
                ) {
                  result.push(metric);
                  this.ipMetrics.push(metric);
                }
              }
            }
          }
          this.lastFetchIPMetrics = new Date(Date.now());
        }
      )
    } catch (error) {
      console.error(error);
    }

    return result;
  }

  async getHostGroupMetrics() {
    let result: SelectableValue<any>[] = [];

    try {
      if (
        ((Date.now() - this.lastFetchHostGroupMetrics.getTime()) / 1000 / 60) < this.optionsTimeout
        && this.hostGroupMetrics.length > 0
      ) { 
        console.debug('[DataSource.getHostGroupMetrics] Cache hit.'); 
        return this.hostGroupMetrics; 
      }

      await this.doRequest({
        method: 'GET',
        url: this.urls.metric,
      }).then(
        (response) => {
          if (typeof response !== 'undefined') {
            this.hostGroupMetrics = [];

            for (let k in response.data.columns) {
              const id = response.data.columns[k].id;
              let unit = response.data.columns[k].unit;
              const rate = response.data.columns[k].rate;
              let label = response.data.columns[k].label;

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
                if (unit === 'none') {
                  unit = 'occurence'
                }

                if (typeof rate !== 'undefined') {
                  label = label + "  (" + unit + "/" + rate + ")";
                } else {
                  label = label + "  (" + unit + ")";
                }

                const metric = {
                  'value': id,
                  'label': label
                } as SelectableValue;

                result.push(metric);
                this.hostGroupMetrics.push(metric);
              }
            }
          }
          this.lastFetchHostGroupMetrics = new Date(Date.now());
        }
      )
    } catch (error) {
      console.error(error);
    }

    return result;
  }

  async getWebAppMetrics() {
    let result: SelectableValue<any>[] = [];

    try {
      if (
        ((Date.now() - this.lastFetchWebAppMetrics.getTime()) / 1000 / 60) < this.optionsTimeout
        && this.webAppMetrics.length > 0
      ) { 
        console.debug('[DataSource.getWebAppMetrics] Cache hit.');
        return this.webAppMetrics; 
      }

      await this.doRequest({
        method: 'GET',
        url: this.urls.metric,
      }).then(
        (response) => {
          if (typeof response !== 'undefined') {
            this.webAppMetrics = [];

            for (let k in response.data.columns) {
              const id = response.data.columns[k].id;
              let unit = response.data.columns[k].unit;
              const rate = response.data.columns[k].rate;
              let label = response.data.columns[k].label;

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
                if (unit === 'none') {
                  unit = 'occurence'
                }

                if (typeof rate !== 'undefined') {
                  label = label + "  (" + unit + "/" + rate + ")";
                } else {
                  label = label + "  (" + unit + ")";
                }

                const metric = {
                  'value': id,
                  'label': label
                } as SelectableValue;

                if (id.includes('_web.')) {
                  result.push(metric);
                  this.webAppMetrics.push(metric);
                }
              }
            }
          }
          this.lastFetchWebAppMetrics = new Date(Date.now());
        }
      )
    } catch (error) {
      console.error(error);
    }

    return result;
  }
}
