import { DataQuery, DataSourceJsonData, SelectableValue } from '@grafana/data';

export enum SourceGroup {
  application = 'Application',
  hostGroup = 'Host Group',
  webApp = 'Web App',
  ip = 'IP'
};

export const sourceGroups = [
  SourceGroup.application,
  SourceGroup.hostGroup,
  SourceGroup.webApp,
  SourceGroup.ip
];

export const granularities = [
  { "value": 60, "text": "60 seconds" },
  { "value": 300, "text": "5 minutes" },
  { "value": 3600, "text": "1 hour" },
  { "value": 21600, "text": "6 hours" },
  { "value": 86400, "text": "1 day" }
];

export const findGranularity = (t: string) => {
  return granularities.find(g => g.text === t);
};

export interface AppResponseQuery extends DataQuery {
  unit?: string;
  rate?: string;
  alias?: string;
  top?: boolean;
  sourceGroup?: SourceGroup;
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
  hostGroups: SelectableValue[];
  applications: SelectableValue[];
  webApps: SelectableValue[];

  granularity?: {'value': number, 'text': string};
}

export const defaultQuery: Partial<AppResponseQuery> = {
  timeshift: 0,
  granularity: granularities[0],
  sourceGroup: SourceGroup.application,
  
  top: false,
  metrics: [],
  hostGroups: [],
  applications: [],
  webApps: [],
  currentIP: '',
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
