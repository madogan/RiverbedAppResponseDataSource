import { DataSource } from './datasource';
import { defaults, toInteger } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import { Select, InlineFieldRow, InlineField, Input, Switch } from '@grafana/ui';
import { AppResponseDataSourceOptions, AppResponseQuery, sourceGroups, SourceGroup, defaultQuery, granularities, topNDirections } from './types';


type Props = QueryEditorProps<DataSource, AppResponseQuery, AppResponseDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  getHostGroups = async () => {
    const { query, datasource, onChange } = this.props;

    const diff = (Date.now() - query.lastFetchHostGroups.getTime()) / 1000 / 60;
  
    if (diff >= 15 || query.hostGroups.length < 1) {
      // if (query.lastFetchHostGroups && (Date.now() - query.lastFetchHostGroups.getTime()) / 1000 > 5) {
      query.lastFetchHostGroups = new Date(Date.now());
      onChange({
        ...query,
        hostGroups: await datasource.getHostGroups(),
      });
    }
  }

  getApplications = async () => {
    const { query, datasource, onChange } = this.props;

    const diff = (Date.now() - query.lastFetchApplications.getTime()) / 1000 / 60;
  
    if (diff >= 15 || query.applications.length < 1) {
      // if (query.lastFetchApplications && (Date.now() - query.lastFetchApplications.getTime()) / 1000 > 5) {
      query.lastFetchApplications = new Date();
      onChange({
        ...query,
        applications: await datasource.getApplications(),
      });
    }
  }

  getWebApps = async () => {
    const { query, datasource, onChange } = this.props;

    const diff = (Date.now() - query.lastFetchWebApps.getTime()) / 1000 / 60;
  
    if (diff >= 15 || query.webApps.length < 1) {
      query.lastFetchWebApps = new Date(Date.now());
      onChange({
        ...query,
        webApps: await datasource.getWebApps(),
      });
    }
  }

  getMetrics = async (sourceGroup: SourceGroup | undefined) => {
    const { query, datasource, onChange } = this.props;

    const diff = (Date.now() - query.lastFetchMetrics.getTime()) / 1000 / 60;

    if (sourceGroup !== undefined && (diff >= 15 || query.metrics.length < 1)) {
      query.lastFetchMetrics = new Date(Date.now());
      onChange({
        ...query,
        metrics: await datasource.getMetrics(sourceGroup),
      });
    }
  }

  getOptions = (sourceGroup: SourceGroup) => {
    if (sourceGroup === SourceGroup.hostGroup) {
      this.getHostGroups();
    } else if (sourceGroup === SourceGroup.application) {
      this.getApplications();
    } else if (sourceGroup === SourceGroup.webApp) {
      this.getWebApps();
    }

    this.getMetrics(sourceGroup as SourceGroup);
  }

  onSourceGroupChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;

    this.getOptions(v.value as SourceGroup);

    onChange({
      ...query,
      sourceGroup: v.value as SourceGroup,
    });

    onRunQuery();
  }

  onHostGroupChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentHostGroup: v.label,
      currentHostGroupID: v.value,
    });
    onRunQuery();
  }

  onApplicationChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentApplication: v.label,
      currentApplicationID: v.value,
    });
    onRunQuery();
  }

  onIPChange = (e: any) => {
    const { onChange, query, onRunQuery } = this.props;

    onChange({
      ...query,
      currentIP: e.currentTarget.value,
    });
    onRunQuery();
  }

  onWebAppChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentWebApp: v.label,
      currentWebAppID: v.value,
    });
    onRunQuery();
  }

  onMetricChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentMetricID: v.value,
      currentMetric: v.label,
    });
    onRunQuery();
  }

  onTopChange = (e: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      top: e.currentTarget.checked,
    });
    onRunQuery();
  }

  onTopNChange = (e: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      topN: toInteger(e.currentTarget.value),
    });
    onRunQuery();
  }

  onTopNDirectionChange = (e: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      topNDirection: e.value,
    });
    onRunQuery();
  }

  onAliasChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      alias: v.target.value,
    });
    onRunQuery();
  }

  onTimeshiftChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      timeshift: v.target.value,
    });
    onRunQuery();
  }

  onGranularityChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      granularity: v.value,
    });
    onRunQuery();
  }

  render() {
    const query = defaults(this.props.query, defaultQuery);

    this.getOptions(query.sourceGroup);

    return (
      <div style={{ width: '100%' }}>
        <InlineFieldRow>
          <InlineField label="Top">
            <div style={{ marginTop: '8px' }}>
              <Switch
                value={query.top}
                checked={query.top}
                onChange={this.onTopChange}
              />
            </div>
          </InlineField>

          <div style={query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="N">
              <Input
                width={16}
                value={query.topN || 0}
                onChange={this.onTopNChange}
              />
            </InlineField>
          </div>

          <div style={query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="Direction">
              <Select
                width='auto'
                menuShouldPortal
                options={topNDirections}
                value={query.topNDirection?.value}
                onChange={this.onTopNDirectionChange}
              />
            </InlineField>
          </div>

          <InlineField label="Source Group">
            <Select
              width='auto'
              menuShouldPortal
              options={sourceGroups}
              value={query.sourceGroup}
              onChange={this.onSourceGroupChange}
            />
          </InlineField>

          <div style={query.sourceGroup === SourceGroup.hostGroup && !query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup} onLoadStart={this.getHostGroups}>
              <Select
                width='auto'
                menuShouldPortal
                id={query.currentHostGroupID}
                value={query.currentHostGroup}
                options={query.hostGroups}
                onChange={this.onHostGroupChange}
              />
            </InlineField>
          </div>

          <div style={query.sourceGroup === SourceGroup.application && !query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup} onLoadStart={this.getApplications}>
              <Select
                width='auto'
                menuShouldPortal
                id={query.currentApplicationID}
                value={query.currentApplication}
                options={query.applications}
                onChange={this.onApplicationChange}
              />
            </InlineField>
          </div>

          <div style={query.sourceGroup === SourceGroup.webApp && !query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup} onLoadStart={this.getWebApps}>
              <Select
                width='auto'
                menuShouldPortal
                id={query.currentWebAppID}
                value={query.currentWebApp}
                options={query.webApps}
                onChange={this.onWebAppChange}
              />
            </InlineField>
          </div>

          <div style={query.sourceGroup === SourceGroup.ip && !query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup}>
              <Input
                value={query.currentIP || ''}
                onChange={this.onIPChange}
              />
            </InlineField>
          </div>

          <InlineField label="Metric" onLoadStart={() => this.getMetrics(query.sourceGroup)}>
            <Select
              width='auto'
              menuShouldPortal
              options={query.metrics}
              value={query.currentMetric}
              onChange={this.onMetricChange}

            />
          </InlineField>
        </InlineFieldRow >

        <InlineFieldRow>
          <InlineField label="Granularity">
            <Select
              menuShouldPortal
              value={query.granularity?.value}
              options={granularities}
              onChange={this.onGranularityChange}
            />
          </InlineField>

          <InlineField label="Timeshift">
            <Input
              value={query.timeshift?.toString() || '0'}
              onChange={this.onTimeshiftChange}
            ></Input>
          </InlineField>

          <div style={query.top ? { display: 'none' } : { display: 'block' }}>
            <InlineField label="Alias">
              <Input
                value={query.alias || ''}
                onChange={this.onAliasChange}
              ></Input>
            </InlineField>
          </div>
        </InlineFieldRow>
      </div >
    );
  }
}
