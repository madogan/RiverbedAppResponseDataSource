import { DataSource } from './datasource';
import { defaults, toInteger } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import { Select, InlineFieldRow, InlineField, Input, Switch } from '@grafana/ui';
import { AppResponseDataSourceOptions, AppResponseQuery, sourceGroups, SourceGroup, defaultQuery, granularities } from './types';


type Props = QueryEditorProps<DataSource, AppResponseQuery, AppResponseDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  getHostGroups = async () => {
    const { datasource } = this.props;

    const diff = (Date.now() - datasource.lastFetchHostGroups.getTime()) / 1000 / 60;

    if (diff >= 15 || datasource.hostGroups.length < 1) {
      await datasource.getHostGroups();
    }
  }

  getApplications = async () => {
    const { datasource } = this.props;

    const diff = (Date.now() - datasource.lastFetchApplications.getTime()) / 1000 / 60;

    if (diff >= 15 || datasource.applications.length < 1) {
      await datasource.getApplications();
    }
  }

  getWebApps = async () => {
    const { datasource } = this.props;

    const diff = (Date.now() - datasource.lastFetchWebApps.getTime()) / 1000 / 60;

    if (diff >= 15 || datasource.webApps.length < 1) {
      await datasource.getWebApps();
    }
  }

  getMetrics = async (sourceGroup: SourceGroup | undefined) => {
    const { query, datasource } = this.props;

    const diff = (Date.now() - datasource.lastFetchMetrics.getTime()) / 1000;

    if (
      (
        (sourceGroup == SourceGroup.application && datasource.applicationMetrics.length < 1)
        || (sourceGroup == SourceGroup.hostGroup && datasource.hostGroupMetrics.length < 1)
        || (sourceGroup == SourceGroup.webApp && datasource.webAppMetrics.length < 1)
      )
      || diff >= 15  // if bigger than 15 secs.
    ) {
      await datasource.getMetrics(sourceGroup || query.sourceGroup);
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
      currentMetric: '',
      currentMetricID: '',
      currentApplication: '',
      currentApplicationID: '',
      currentWebApp: '',
      currentWebAppID: '',
      currentHostGroup: '',
      currentHostGroupID: '',
      currentIP: '',
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
      currentMetric: v.label,
      currentMetricID: v.value,
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
    const { query, onChange, onRunQuery } = this.props;
    onChange({
      ...query,
      granularity: v.value,
    });
    onRunQuery();
  }

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const datasource = this.props.datasource;

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
                options={datasource.hostGroups}
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
                options={datasource.applications}
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
                options={datasource.webApps}
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

          <div style={query.sourceGroup === SourceGroup.application ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="Metric" onLoadStart={() => this.getMetrics(SourceGroup.application)}>
              <Select
                width='auto'
                menuShouldPortal
                options={datasource.applicationMetrics}
                value={query.currentMetric}
                onChange={this.onMetricChange}
              />
            </InlineField>
          </div>

          <div style={query.sourceGroup === SourceGroup.hostGroup ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="Metric" onLoadStart={() => this.getMetrics(SourceGroup.hostGroup)}>
              <Select
                width='auto'
                menuShouldPortal
                options={datasource.hostGroupMetrics}
                value={query.currentMetric}
                onChange={this.onMetricChange}
              />
            </InlineField>
          </div>

          <div style={query.sourceGroup === SourceGroup.webApp ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="Metric" onLoadStart={() => this.getMetrics(SourceGroup.webApp)}>
              <Select
                width='auto'
                menuShouldPortal
                options={datasource.webAppMetrics}
                value={query.currentMetric}
                onChange={this.onMetricChange}
              />
            </InlineField>
          </div>

          <div style={query.sourceGroup === SourceGroup.ip ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="Metric" onLoadStart={() => this.getMetrics(SourceGroup.ip)}>
              <Select
                width='auto'
                menuShouldPortal
                options={datasource.applicationMetrics}
                value={query.currentMetric}
                onChange={this.onMetricChange}
              />
            </InlineField>
          </div>
        </InlineFieldRow>
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
