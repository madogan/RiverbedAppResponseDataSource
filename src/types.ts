import { DataQuery, DataSourceJsonData, SelectableValue } from '@grafana/data';



export enum SourceGroup {
  application = 'Application',
  hostGroup = 'Host Group',
  webApp = 'Web App',
  ip = 'IP'
};


export const sourceGroups = [
  { label: 'Application', value: SourceGroup.application },
  { label: 'Host Group', value: SourceGroup.hostGroup },
  { label: 'Web App', value: SourceGroup.webApp },
  { label: 'IP', value: SourceGroup.ip },
];

export const topNDirections: SelectableValue[] = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
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
  top?: boolean;
  topN?: number;
  topNDirection?: SelectableValue;
  sourceGroup: SourceGroup;
  timeshift?: number;
  
  currentMetric?: string;
  currentMetricID?: string;
  currentWebApp?: string;
  currentWebAppID?: string;
  currentHostGroup?: string;
  currentHostGroupID?: string;
  currentApplication?: string;
  currentApplicationID?: string;
  currentIP?: string;

  metrics: SelectableValue[];
  lastFetchMetrics: Date;
  hostGroups: SelectableValue[];
  lastFetchHostGroups: Date;
  applications: SelectableValue[];
  lastFetchApplications: Date;
  webApps: SelectableValue[];
  lastFetchWebApps: Date;

  granularity?: SelectableValue;
}

export const defaultQuery: Partial<AppResponseQuery> = {
  timeshift: 0,
  granularity: granularities[0],
  sourceGroup: SourceGroup.application,

  top: false,
  topN: 10,
  topNDirection: topNDirections[0],
  metrics: [],
  hostGroups: [],
  applications: [],
  webApps: [],
  currentIP: '',

  lastFetchMetrics: new Date(),
  lastFetchHostGroups: new Date(),
  lastFetchApplications: new Date(),
  lastFetchWebApps: new Date(),
};

export interface AppResponseDataSourceOptions extends DataSourceJsonData {
  skipTlsVerify: boolean | undefined;
  path?: string;
  token?: string;
  username?: string;
  tlsSkipVerify?: boolean;
}

export interface AppResponseSecureJsonData {
  password?: string;
}

export interface AppResponseURLs {
  base: string;
  auth: string;
  hostGroup: string;
  metric: string;
  application: string;
  webApp: string;
  url: string;
  instanceCreationSync: string;
}
