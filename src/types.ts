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

export const alertColumnsSelected = [
  { name: 'Severity', label: 'Severity', value: 'alert.severity_level_name', type: 'string' },
  { name: 'Alert Ongoing', label: 'Alert Ongoing', value: 'alert.ongoing_name', type: 'string' },
  { name: 'Policy Name', label: 'Policy Name', value: 'alert.policy_name', type: 'string' },
  { name: 'Policy Description', label: 'Policy Description', value: 'alert.policy_description', type: 'string' },
  { name: 'Policy Type', label: 'Policy Type', value: 'alert.policy_type_name', type: 'string' },
  { name: 'Alert Violations Preview (Resolved)', label: 'Alert Violations Preview (Resolved)', value: 'alert.violations_preview_resolved', type: 'string' },
  { name: 'Duration', label: 'Duration', value: 'alert.duration', type: 'string' },
  { name: 'Alert Start Time', label: 'Start Time', value: 'alert.start_time', type: 'time' },
  { name: 'Alert End time', label: 'Alert End time', value: 'alert.end_time', type: 'time' },
];

export const alertColums = [
  { name: 'ID', label: 'ID', value: 'alert.id', type: 'number' },
  { name: 'Alert Ongoing', label: 'Alert Ongoing', value: 'alert.ongoing_name', type: 'string' },
  { name: 'Alert Ongoing Flag', label: 'Alert Ongoing Flag', value: 'alert.ongoing', type: 'string' },
  { name: 'Policy Type', label: 'Policy Type', value: 'alert.policy_type_name', type: 'string' },
  { name: 'Policy Type Value', label: 'Policy Type Value', value: 'alert.policy_type', type: 'number' },
  { name: 'Severity Value', label: 'Severity Value', value: 'alert.severity', type: 'number' },
  { name: 'Severity', label: 'Severity', value: 'alert.severity_level_name', type: 'string' },
  { name: 'Severity', label: 'Severity', value: 'alert.severity_level', type: 'number' },
  { name: 'Maximum Severity Value', label: 'Maximum Severity Value', value: 'alert.max_severity', type: 'number' },
  { name: 'Maximum Severity', label: 'Maximum Severity', value: 'alert.max_severity_level_name', type: 'string' },
  { name: 'Maximum Severity', label: 'Maximum Severity', value: 'alert.max_severity_level', type: 'number' },
  { name: 'Policy Name', label: 'Policy Name', value: 'alert.policy_name', type: 'string' },
  { name: 'Policy ID', label: 'Policy ID', value: 'alert.policy_id', type: 'number' },
  { name: 'Policy Definition', label: 'Policy Definition', value: 'alert.policy_definition', type: 'string' },
  { name: 'Policy Description', label: 'Policy Description', value: 'alert.policy_description', type: 'string' },
  { name: 'Policy Last N', label: 'Policy Last N', value: 'alert.policy_last_N', type: 'number' },
  { name: 'Policy Last M', label: 'Policy Last M', value: 'alert.policy_last_M', type: 'number' },
  { name: 'Policy Evaluation Period', label: 'Policy Evaluation Period', value: 'alert.policy_eval_period', type: 'string' },
  { name: 'Alert Violations Preview', label: 'Alert Violations Preview', value: 'alert.violations_preview', type: 'string' },
  { name: 'Alert Violations Preview (Resolved)', label: 'Alert Violations Preview (Resolved)', value: 'alert.violations_preview_resolved', type: 'string' },
  { name: 'Duration', label: 'Duration', value: 'alert.duration', type: 'string' },
  { name: 'Details Insight', label: 'Details Insight', value: 'alert.details_insight', type: 'string' },
  { name: 'Minor Violations Count', label: 'Minor Violations Count', value: 'alert.low_violations_count', type: 'number' },
  { name: 'Major Violations Count', label: 'Major Violations Count', value: 'alert.medium_violations_count', type: 'number' },
  { name: 'Critical Violations Count', label: 'Critical Violations Count', value: 'alert.high_violations_count', type: 'number' },
  { name: 'Violation Severity Value', label: 'Violation Severity Value', value: 'violations.severity', type: 'number' },
  { name: 'Violation Severity Level', label: 'Violation Severity Level', value: 'violations.severity_level_name', type: 'string' },
  { name: 'Violation Severity Level', label: 'Violation Severity Level', value: 'violations.severity_level', type: 'number' },
  { name: 'Alert Count', label: 'Alert Count', value: 'violations.count', type: 'number' },
  { name: 'Last Update', label: 'Last Update', value: 'violations.last_update_ts', type: 'time' },
  { name: 'Alert Start Time', label: 'Start Time', value: 'alert.start_time', type: 'time' },
  { name: 'Alert End time', label: 'Alert End time', value: 'alert.end_time', type: 'time' },
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

  alerts: SelectableValue[];
  alertLimit: number;
  currentAlertsColumns: SelectableValue[];
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

  alertLimit: 10,
  currentAlertsColumns: alertColumnsSelected,
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
  sources: string;
}
