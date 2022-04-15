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
  topMetrics: SelectableValue[] = [];
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

  async topngraphquery(target: AppResponseQuery, start: Number, end: Number, granularity: Number) {
    let dataDef_groupBy;
    let dataDef_topBy: any = [];
    let dataDef_columns: any = [];

    dataDef_topBy = [{
      "direction": "desc",
      "id": target.currentTopMetric.value,
    }];

    if (target.sourceGroup === SourceGroup.application) {
      dataDef_columns = [
        "app.id",
        "app.name",
      ];
      dataDef_groupBy = ["start_time", "app.id"];
    } else if (target.sourceGroup === SourceGroup.hostGroup) {
      dataDef_columns = [
        "host_group.id",
        "host_group.name",
      ];
      dataDef_groupBy = ["start_time", "host_group.id"];
    } else if (target.sourceGroup === SourceGroup.webApp) {
      dataDef_columns = [
        "app.id",
        "app.name",
      ];
      dataDef_groupBy = ["start_time", "app.id"];
    } else if (target.sourceGroup === SourceGroup.ip) {
      dataDef_columns = [
        "tcp.ip",
        "tcp.dns",
      ];
      dataDef_groupBy = ["start_time", "tcp.ip"];
    } else {
      throw new Error("Unknown source group");
    }

    dataDef_columns.push(target.currentTopMetric.value);

    let tops: any = [];
    let filterIN: string = "";

    await this.doRequest({
      method: "POST",
      url: this.urls.instanceCreationSync,
      data: {
        "data_defs": [
          {
            "source": { "name": "aggregates" },
            "time": {
              "start": start.toString(),
              "end": end.toString(),
              "granularity": granularity.toString(),
            },
            "top_by": dataDef_topBy,
            "columns": dataDef_columns,
            "limit": target.topN || 10,
          },
        ]
      },
    }).then(
      (response: any) => {
        let topNResponse;
        if (response.data.data_defs[0].hasOwnProperty("data")) {
          topNResponse = response.data.data_defs[0].data;
        } else {
          topNResponse = [];
        }
        for (let index = 0; index < topNResponse.length; index++) {
          tops.push(topNResponse[index][1]);
          if (index === topNResponse.length - 1) {
            filterIN += `'${topNResponse[index][0]}'`;
          } else {
            filterIN += `'${topNResponse[index][0]}', `;
          }
        }
        return filterIN;
      }
    );

    // Insert 'start_time' into first index of columns.
    dataDef_columns.unshift("start_time");

    const result = await this.doRequest({
      method: 'POST',
      url: this.urls.instanceCreationSync,
      data: {
        "data_defs": [
          {
            "source": { "name": "aggregates" },
            "time": {
              "start": start.toString(),
              "end": end.toString(),
              "granularity": granularity.toString(),
            },
            "group_by": dataDef_groupBy,
            "columns": dataDef_columns,
            "filters": [
              {
                "type": "STEELFILTER",
                "value": `${dataDef_columns[1]} IN (${filterIN})`,
              }
            ],
          },
        ]
      },
    }).then(
      (response: any) => {
        if (response.data.data_defs[0].hasOwnProperty("data")) {
          return response.data;
        } else {
          return [];
        }
      }
    );

    return {
      tops: tops,
      result: result,
    };
  }

  async query(options: DataQueryRequest<AppResponseQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const to = range!.to.valueOf();
    const from = range!.from.valueOf();

    let end;
    let start;
    let dataDef_source = {};
    let dataDef_groupBy = {};
    let dataDef_columns: string[] = [];
    let currentMetric: SelectableValue;
    let dataDef_filters: { type: string; value: string; }[] = [];

    const promises = options.targets.map((target) => {
      const query = defaults(target, defaultQuery);
      end = ((new Date(to)).getTime()) / 1000;
      start = ((new Date(from)).getTime()) / 1000;

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
            "value": "host_group.id == " + query.currentHostGroup?.value
          },
        );
        dataDef_columns.push(query.currentHostGroupMetric?.value);
        currentMetric = query.currentHostGroupMetric;
      } else if (query.sourceGroup === SourceGroup.application) {
        dataDef_groupBy = ["start_time", "app.id"];
        dataDef_columns = ["start_time", "app.id", "app.name"];
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "app.id == " + query.currentApplication?.value
          },
        );
        dataDef_columns.push(query.currentApplicationMetric?.value);
        currentMetric = query.currentApplicationMetric;
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
        dataDef_columns.push(query.currentIPMetric?.value);
        currentMetric = query.currentIPMetric;
      } else if (query.sourceGroup === SourceGroup.webApp) {
        dataDef_groupBy = ["start_time", "app.id"]
        dataDef_columns = ["start_time", "app.id", "app.name"]
        dataDef_filters.push(
          {
            "type": "STEELFILTER",
            "value": "app.id == " + query.currentWebApp?.value
          },
        );
        dataDef_columns.push(query.currentWebAppMetric?.value);
        currentMetric = query.currentWebAppMetric;
      } else {
        throw new Error("Unknown source group");
      }

      let dataDef: any = {
        'source': dataDef_source,
        "time": {
          "end": end.toString(),
          "start": start.toString(),
          'granularity': query.granularity?.value.toString(),
        },
        "group_by": dataDef_groupBy,
        "columns": dataDef_columns,
      };

      if (query.top) {
        dataDef.limit = query.topN || 10;
        dataDef.top_by = [{ "id": currentMetric?.value, "direction": 'desc' }];
        dataDef.group_by = {};  // Remove start time.
        dataDef.columns = dataDef.columns.slice(1);  // Remove start time.

        if (query.topGraph) {
          return this.topngraphquery(query, start, end, 0).then(
            (data: any) => {
              let name;
              const tops = data.tops;
              const result = data.result;
              let dataDef = result.data_defs[0];

              if (!dataDef.hasOwnProperty('data')) { dataDef.data = []; }

              if (query.alias !== undefined && query.alias.trim() !== '') {
                name = query.alias;
              } else {
                name = query.currentTopMetric?.label;
              }

              let fields = [{ name: "Time", type: FieldType.time, values: [] }];
              for (let index = 0; index < tops.length; index++) {
                fields.push({ name: tops[index], type: FieldType.number, values: [] });
              }

              let frame = new MutableDataFrame({
                name: name,
                fields: fields,
                refId: query.refId,
              });

              for (let i = 0; i < dataDef.data.length; i++) {
                let row = [];
                let datum = dataDef.data[i];

                row.push(new Date(datum[0] * 1000));

                for (let index = 0; index < tops.length; index++) {
                  if (tops[index] === datum[2]){
                    row.push(datum[datum.length - 1]);
                  } else {
                    row.push(null);
                  }
                }

                frame.appendRow(row);
              }

              return frame;
            }
          )
        }

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
            name = currentMetric?.value;
          }

          let fields: any = [];

          let frame;

          if (query.top) {
            let removeIndices = [];
            for (let index = 0; index < _dataDef.columns.length; index++) {
              const column = _dataDef.columns[index];
              if (column.search('id') === -1) {
                fields.push({ name: column, type: FieldType.other });
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

  async getTopMetrics(sourceGroup: SourceGroup) {
    if (sourceGroup === SourceGroup.application) {
      this.topMetrics = await this.getApplicationMetrics();
    } else if (sourceGroup === SourceGroup.hostGroup) {
      this.topMetrics = await this.getHostGroupMetrics();
    } else if (sourceGroup === SourceGroup.webApp) {
      this.topMetrics = await this.getWebAppMetrics();
    } else if (sourceGroup === SourceGroup.ip) {
      this.topMetrics = await this.getIPMetrics();
    } else {
      throw new Error('Unknown source group');
    }

    return this.topMetrics;
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
                if (typeof rate !== 'undefined' && unit !== 'none') {
                  label = `${label} (${unit}/${rate})`;
                } else if (typeof rate !== 'undefined') {
                  label = `${label} (${rate})`;
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
                if (typeof rate !== 'undefined' && unit !== 'none') {
                  label = `${label} (${unit}/${rate})`;
                } else if (typeof rate !== 'undefined') {
                  label = `${label} (${rate})`;
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
                if (typeof rate !== 'undefined' && unit !== 'none') {
                  label = `${label} (${unit}/${rate})`;
                } else if (typeof rate !== 'undefined') {
                  label = `${label} (${rate})`;
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
                if (typeof rate !== 'undefined' && unit !== 'none') {
                  label = `${label} (${unit}/${rate})`;
                } else if (typeof rate !== 'undefined') {
                  label = `${label} (${rate})`;
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
