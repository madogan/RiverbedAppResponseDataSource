import { DataQuery, DataSourceJsonData, SelectableValue } from '@grafana/data';


export enum SourceGroup {
  ip = 'IP',
  webApp = 'Web App',
  hostGroup = 'Host Group',
  application = 'Application',
};

export const sourceGroups = [
  { label: 'Application', value: SourceGroup.application },
  { label: 'Host Group', value: SourceGroup.hostGroup },
  { label: 'Web App', value: SourceGroup.webApp },
  { label: 'IP', value: SourceGroup.ip },
];

export const granularities = [
  { "value": 60, "label": "60 seconds" },
  { "value": 300, "label": "5 minutes" },
  { "value": 3600, "label": "1 hour" },
  { "value": 21600, "label": "6 hours" },
  { "value": 86400, "label": "1 day" }
];

export const findGranularity = (t: string) => {
  return granularities.find(g => g.value.toString() === t);
};

export interface AppResponseQuery extends DataQuery {
  unit?: string;
  rate?: string;
  alias?: string;
  timeshift?: number;
  sourceGroup: SourceGroup;
  granularity?: SelectableValue;

  top?: boolean;
  topN?: number;

  currentIP: string;
  currentWebApp: SelectableValue;
  currentHostGroup: SelectableValue;
  currentApplication: SelectableValue;

  ipMetrics: SelectableValue[];
  currentIPMetric: SelectableValue;

  webApps: SelectableValue[];
  webAppMetrics: SelectableValue[];
  currentWebAppMetric: SelectableValue;

  applications: SelectableValue[];
  applicationMetrics: SelectableValue[];
  currentApplicationMetric: SelectableValue;

  hostGroups: SelectableValue[];
  hostGroupMetrics: SelectableValue[];
  currentHostGroupMetric: SelectableValue;
}

export const defaultQuery: Partial<AppResponseQuery> = {
  timeshift: 0,
  granularity: granularities[0],
  sourceGroup: SourceGroup.application,

  top: false,
  topN: 10,

  webApps: [],
  webAppMetrics: [],

  hostGroups: [],
  hostGroupMetrics: [],

  applications: [],
  applicationMetrics: [],
};

export interface AppResponseDataSourceOptions extends DataSourceJsonData {
  path?: string;
  token?: string;
  username?: string;
  tlsSkipVerify?: boolean;
  skipTlsVerify: boolean | undefined;
}

export interface AppResponseSecureJsonData {
  password?: string;
}

export interface AppResponseURLs {
  base: string;
  auth: string;
  metric: string;
  webApp: string;
  hostGroup: string;
  application: string;
  instanceCreationSync: string;
}
