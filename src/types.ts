import { DataQuery, DataSourceJsonData, FieldType, SelectableValue } from '@grafana/data';


export enum SourceGroup {
  ip = 'IP',
  webApp = 'Web App',
  hostGroup = 'Host Group',
  application = 'Application',
  ssl = 'SSL',
  alerts = 'Alerts',
};

export const sourceGroups = [
  { label: 'Application', value: SourceGroup.application },
  { label: 'Host Group', value: SourceGroup.hostGroup },
  { label: 'Web App', value: SourceGroup.webApp },
  { label: 'IP', value: SourceGroup.ip },
  { label: 'SSL', value: SourceGroup.ssl },
  { label: 'Alerts', value: SourceGroup.alerts },
];

export const granularities = [
  { "value": 0, "label": "Auto" },
  { "value": 60, "label": "60 seconds" },
  { "value": 300, "label": "5 minutes" },
  { "value": 3600, "label": "1 hour" },
  { "value": 21600, "label": "6 hours" },
  { "value": 86400, "label": "1 day" }
];

export const sslKeyColumns = [
  { "label": "Status", "value": "status", "type": FieldType.string },
  { "label": "Subject Common Name", "value": "subject.common_name", "type": FieldType.string },
  { "label": "Subject Organization", "value": "subject.organization", "type": FieldType.string },
  { "label": "Issuer Common Name", "value": "issuer.common_name", "type": FieldType.string },
  { "label": "Issuer Organization", "value": "issuer.organization", "type": FieldType.string },
  { "label": "Valid From", "value": "valid_from", "type": FieldType.time },
  { "label": "Valid To", "value": "valid_to", "type": FieldType.time },
  { "label": "First Seen", "value": "first_seen", "type": FieldType.time },
  { "label": "Last Seen", "value": "last_seen", "type": FieldType.time },
  { "label": "Expiration Time", "value": "expiration_time", "type": FieldType.number },
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
  topGraph?: boolean;
  topMetrics: SelectableValue[];
  currentTopMetric: SelectableValue;

  sslKeys: SelectableValue[];
  currentSSLKeyColumns: SelectableValue[];
  expirationTime: number;

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
  topGraph: false,
  
  sslKeys: [],
  currentSSLKeyColumns: sslKeyColumns,
  expirationTime: -1,

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
  ssl: string;
  metric: string;
  webApp: string;
  hostGroup: string;
  application: string;
  instanceCreationSync: string;
}
