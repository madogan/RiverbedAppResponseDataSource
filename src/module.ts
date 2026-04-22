import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './datasource';
import { ConfigEditor } from './ConfigEditor';
import { QueryEditor } from './QueryEditor';
import { AppResponseQuery, AppResponseDataSourceOptions } from './types';

export const plugin = new DataSourcePlugin<DataSource, AppResponseQuery, AppResponseDataSourceOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor);
