import { DataSource } from './datasource';
import { defaults, toInteger } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import { Select, InlineFieldRow, InlineField, Input, Switch, MultiSelect } from '@grafana/ui';
import { AppResponseDataSourceOptions, AppResponseQuery, sourceGroups, SourceGroup, defaultQuery, granularities, sslKeyColumns } from './types';


type Props = QueryEditorProps<DataSource, AppResponseQuery, AppResponseDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  getHostGroups = async () => {
    console.debug('[QueryEditor.getHostGroups]');
    const { query, datasource, onChange } = this.props;
    const hostGroups = await datasource.getHostGroups();
    if (hostGroups.length !== (query.hostGroups.length || 0)) {
      console.debug('hostGroups changed');
      onChange({
        ...query,
        hostGroups: hostGroups,
      });
    }
  }

  getApplications = async () => {
    console.debug('[QueryEditor.getApplications]');
    const { query, datasource, onChange } = this.props;
    const applications = await datasource.getApplications();
    if (applications.length !== (query.applications.length || 0)) {
      console.debug('applications changed');
      onChange({
        ...query,
        applications: applications,
      });
    }
  }

  getWebApps = async () => {
    console.debug('[QueryEditor.getWebApps]');
    const { query, datasource, onChange } = this.props;
    const webApps = await datasource.getWebApps();
    if (webApps.length !== (query.webApps.length || 0)) {
      console.debug('webApps changed');
      onChange({
        ...query,
        webApps: webApps,
      });
    }
  }

  getApplicationMetrics = async () => {
    console.debug('[QueryEditor.getApplicationMetrics]');
    const { query, datasource, onChange } = this.props;
    const applicationMetrics = await datasource.getApplicationMetrics();
    if (applicationMetrics.length !== (query.applicationMetrics?.length || 0)) {
      console.debug('applicationMetrics changed');
      onChange({
        ...query,
        applicationMetrics: applicationMetrics,
      });
    }
  }

  getIPMetrics = async () => {
    console.debug('[QueryEditor.getIPMetrics]');
    const { query, datasource, onChange } = this.props;
    const ipMetrics = await datasource.getIPMetrics();
    if (ipMetrics.length !== (query.ipMetrics?.length || 0)) {
      console.debug('ipMetrics changed');
      onChange({
        ...query,
        ipMetrics: ipMetrics,
      });
    }
  }

  getHostGroupMetrics = async () => {
    console.debug('[QueryEditor.getHostGroupMetrics]');
    const { query, datasource, onChange } = this.props;
    const hostGroupMetrics = await datasource.getHostGroupMetrics();
    if (hostGroupMetrics.length !== (query.hostGroupMetrics?.length || 0)) {
      console.debug('hostGroupMetrics changed');
      onChange({
        ...query,
        hostGroupMetrics: hostGroupMetrics,
      });
    }
  }

  getWebAppMetrics = async () => {
    console.debug('[QueryEditor.getWebAppMetrics]');
    const { query, datasource, onChange } = this.props;
    const webAppMetrics = await datasource.getWebAppMetrics();
    if (webAppMetrics.length !== (query.webAppMetrics?.length || 0)) {
      console.debug('webAppMetrics changed');
      onChange({
        ...query,
        webAppMetrics: webAppMetrics,
      });
    }
  }

  getAlertColumns = async () => {
    console.debug('[QueryEditor.getAlertColumns]');
    const { query, datasource, onChange } = this.props;
    const alertColumns = await datasource.getAlertColumns();
    if (alertColumns.length !== (query.alertColumns.length || 0)) {
      console.debug('applications changed');
      onChange({
        ...query,
        alertColumns: alertColumns,
      });
    }
  }

  getTopMetrics = async () => {
    console.debug('[QueryEditor.getTopMetrics]');
    const { query, datasource, onChange } = this.props;
    const topMetrics = await datasource.getTopMetrics(query.sourceGroup);
    if (query.top) {
      if (topMetrics.length !== (query.topMetrics?.length || 0)) {
        console.debug('topMetrics changed');
        onChange({
          ...query,
          topMetrics: topMetrics,
        });
      }
    }
  }

  getMetrics = async () => {
    console.debug('[QueryEditor.getMetrics]');
    this.getApplicationMetrics();
    this.getIPMetrics();
    this.getHostGroupMetrics();
    this.getWebAppMetrics();
    this.getTopMetrics();
  }

  getOptions = (sourceGroup: SourceGroup) => {
    console.debug(`[QueryEditor.getOptions] ${sourceGroup}`);

    if (sourceGroup === SourceGroup.application) {
      this.getApplications();
      this.getApplicationMetrics();
    }

    if (sourceGroup === SourceGroup.hostGroup) {
      this.getHostGroups();
      this.getHostGroupMetrics();
    }

    if (sourceGroup === SourceGroup.webApp) {
      this.getWebApps();
      this.getWebAppMetrics();
    }

    if (sourceGroup === SourceGroup.ip) {
      this.getIPMetrics();
    }

    if (sourceGroup === SourceGroup.alerts) {
      this.getAlertColumns();
    }

    this.getTopMetrics();
  }

  onSourceGroupChange = (v: any) => {
    console.debug(`[QueryEditor.onSourceGroupChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.sourceGroup) {
      console.debug('sourceGroup changed');
      this.getOptions(v.value);
      onChange({
        ...query,
        sourceGroup: v.value as SourceGroup,
      });
      onRunQuery();
    }
  }

  onHostGroupChange = (v: any) => {
    console.debug(`[QueryEditor.onHostGroupChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentHostGroup?.value) {
      console.debug('currentHostGroup changed');
      onChange({
        ...query,
        currentHostGroup: v,
      });
      onRunQuery();
    }
  }

  onApplicationChange = (v: any) => {
    console.debug(`[QueryEditor.onApplicationChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentApplication?.value) {
      console.debug('currentApplication changed');
      onChange({
        ...query,
        currentApplication: v,
      });
      onRunQuery();
    }
  }

  onWebAppChange = (v: any) => {
    console.debug(`[QueryEditor.onWebAppChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentWebApp?.value) {
      console.debug('currentWebApp changed');
      onChange({
        ...query,
        currentWebApp: v,
      });
      onRunQuery();
    }
  }

  onIPChange = (e: any) => {
    console.debug(`[QueryEditor.onIPChange] ${e.target.value}`);
    console.debug(e);
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentIP: e.target.value,
    });
    onRunQuery();
  }

  onApplicationMetricChange = (v: any) => {
    console.debug(`[QueryEditor.onApplicationMetricChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentApplicationMetric?.value) {
      console.debug('[QueryEditor.onApplicationMetricChange] currentApplicationMetric changed');
      onChange({
        ...query,
        currentApplicationMetric: v,
      });
      onRunQuery();
    }
  }

  onHostGroupMetricChange = (v: any) => {
    console.debug(`[QueryEditor.onHostGroupMetricChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentHostGroupMetric?.value) {
      console.debug('[QueryEditor.onHostGroupMetricChange] currentHostGroupMetric changed.');
      onChange({
        ...query,
        currentHostGroupMetric: v,
      });
      onRunQuery();
    }
  }

  onWebAppMetricChange = (v: any) => {
    console.debug(`[QueryEditor.onWebAppMetricChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentWebAppMetric?.value) {
      console.debug('[QueryEditor.onWebAppMetricChange] currentWebAppMetric changed.');
      onChange({
        ...query,
        currentWebAppMetric: v,
      });
      onRunQuery();
    }
  }

  onIPMetricChange = (v: any) => {
    console.debug(`[QueryEditor.onIPMetricChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentIPMetric?.value) {
      console.debug('[QueryEditor.onIPMetricChange] currentIPMetric changed.');
      onChange({
        ...query,
        currentIPMetric: v
      });
      onRunQuery();
    }
  }

  onExpirationTimeChange = (e: any) => {
    console.debug(`[QueryEditor.onExpirationTimeChange] ${e.target.value}`);
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      expirationTime: e.target.value,
    });
    onRunQuery();
  }

  onTopMetricChange = (v: any) => {
    console.debug(`[QueryEditor.onTopMetricChange] ${v.label}, ${v.value}`);
    const { onChange, query, onRunQuery } = this.props;
    if (v.value !== query.currentTopMetric?.value) {
      console.debug('[QueryEditor.onTopMetricChange] currentTopMetric changed.');
      onChange({
        ...query,
        currentTopMetric: v
      });
      onRunQuery();
    }
  }

  onTopChange = (e: any) => {
    console.debug(`[QueryEditor.onTopChange] ${e.currentTarget.checked}`);
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      top: e.currentTarget.checked,
    });
    onRunQuery();
  }

  onTopGraphChange = (e: any) => {
    console.debug(`[QueryEditor.onTopGraphChange] ${e.currentTarget.checked}`);
    const { onChange, query, onRunQuery } = this.props;

    onChange({
      ...query,
      topGraph: e.currentTarget.checked,
    });

    onRunQuery();
  }

  onTopNChange = (e: any) => {
    console.debug(`[QueryEditor.onTopNChange] ${e.currentTarget.value}`);
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      topN: toInteger(e.currentTarget.value),
    });
    onRunQuery();
  }

  onAliasChange = (v: any) => {
    console.debug(`[QueryEditor.onAliasChange] ${v.target.value}`);
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      alias: v.target.value,
    });
    onRunQuery();
  }

  onTimeshiftChange = (v: any) => {
    console.debug(`[QueryEditor.onTimeshiftChange] ${v.target.value}`);
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      timeshift: v.target.value,
    });
    onRunQuery();
  }

  onGranularityChange = (v: any) => {
    console.debug(`[QueryEditor.onGranularityChange] ${JSON.stringify(v)}`);
    const { query, onChange, onRunQuery } = this.props;
    onChange({
      ...query,
      granularity: v,
    });
    onRunQuery();
  }

  onSSLColumnsChange = (v: any) => {
    console.debug("[QueryEditor.onSSLColumnsChange]");
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentSSLKeyColumns: v,
    });
    onRunQuery();
  }

  onAlertsColumnsChange = (v: any) => {
    console.debug("[QueryEditor.onAlertsColumnsChange]");
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentAlertsColumns: v,
    });
    onRunQuery();
  }

  onAlertLimitChange = (e: any) => {
    console.debug(`[QueryEditor.onAlertLimitChange] ${e.target.value}`);
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      alertLimit: e.target.value,
    });
    onRunQuery();
  }

  render() {
    console.debug('[QueryEditor.render]');

    const query = defaults(this.props.query, defaultQuery);

    this.getOptions(query.sourceGroup);

    return (
      <div style={{ width: '100%' }}>
        {/* If source group is Host Group. */}
        <div style={query.sourceGroup === SourceGroup.hostGroup ? { display: 'block' } : { display: 'none' }}>
          <InlineFieldRow>
            <InlineField label="Source Group">
              <Select
                width='auto'
                menuShouldPortal
                options={sourceGroups}
                value={query.sourceGroup}
                onChange={this.onSourceGroupChange}
              />
            </InlineField>

            <div style={query.top ? { display: 'none' } : { display: 'block' }}>
              <InlineField
                label={query.sourceGroup}
                onLoadStart={this.getHostGroups}
              >
                <Select
                  width='auto'
                  menuShouldPortal
                  value={query.currentHostGroup}
                  options={query.hostGroups}
                  onChange={this.onHostGroupChange}
                />
              </InlineField>
            </div>

            <InlineField label="Metric" onLoadStart={() => this.getHostGroupMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.hostGroupMetrics}
                value={query.currentHostGroupMetric}
                onChange={this.onHostGroupMetricChange}
              />
            </InlineField>
          </InlineFieldRow>

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

            <InlineField disabled={!query.top} label="N">
              <Input
                disabled={!query.top}
                width={16}
                value={query.topN || 0}
                onChange={this.onTopNChange}
              />
            </InlineField>

            <InlineField disabled={!query.top} label="Graph">
              <div style={{ marginTop: '8px' }}>
                <Switch
                  disabled={!query.top}
                  value={query.topGraph}
                  checked={query.topGraph}
                  onChange={this.onTopGraphChange}
                />
              </div>
            </InlineField>

            <InlineField disabled={!(query.top && query.topGraph)} label="Top Metric" onLoadStart={() => this.getTopMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.topMetrics}
                value={query.currentTopMetric}
                onChange={this.onTopMetricChange}
                disabled={!(query.top && query.topGraph)}
              />
            </InlineField>
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

            <InlineField label="Alias">
              <Input
                value={query.alias || ''}
                onChange={this.onAliasChange}
              ></Input>
            </InlineField>
          </InlineFieldRow>
        </div>

        {/* If source group is Application. */}
        <div style={query.sourceGroup === SourceGroup.application ? { display: 'block' } : { display: 'none' }}>
          <InlineFieldRow>
            <InlineField label="Source Group">
              <Select
                width='auto'
                menuShouldPortal
                options={sourceGroups}
                value={query.sourceGroup}
                onChange={this.onSourceGroupChange}
              />
            </InlineField>

            <div style={query.top ? { display: 'none' } : { display: 'block' }}>
              <InlineField
                label={query.sourceGroup}
                onLoadStart={this.getApplications}
              >
                <Select
                  width='auto'
                  menuShouldPortal
                  value={query.currentApplication}
                  options={query.applications}
                  onChange={this.onApplicationChange}
                />
              </InlineField>
            </div>

            <InlineField label="Metric" onLoadStart={() => this.getApplicationMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.applicationMetrics}
                value={query.currentApplicationMetric}
                onChange={this.onApplicationMetricChange}
              />
            </InlineField>
          </InlineFieldRow>

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

            <InlineField disabled={!query.top} label="N">
              <Input
                disabled={!query.top}
                width={16}
                value={query.topN || 0}
                onChange={this.onTopNChange}
              />
            </InlineField>

            <InlineField disabled={!query.top} label="Graph">
              <div style={{ marginTop: '8px' }}>
                <Switch
                  disabled={!query.top}
                  value={query.topGraph}
                  checked={query.topGraph}
                  onChange={this.onTopGraphChange}
                />
              </div>
            </InlineField>

            <InlineField disabled={!(query.top && query.topGraph)} label="Top Metric" onLoadStart={() => this.getTopMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.topMetrics}
                value={query.currentTopMetric}
                onChange={this.onTopMetricChange}
                disabled={!(query.top && query.topGraph)}
              />
            </InlineField>
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

            <InlineField label="Alias">
              <Input
                value={query.alias || ''}
                onChange={this.onAliasChange}
              ></Input>
            </InlineField>
          </InlineFieldRow>
        </div>

        {/* If source group is Web Application. */}
        <div style={query.sourceGroup === SourceGroup.webApp ? { display: 'block' } : { display: 'none' }}>
          <InlineFieldRow>
            <InlineField label="Source Group">
              <Select
                width='auto'
                menuShouldPortal
                options={sourceGroups}
                value={query.sourceGroup}
                onChange={this.onSourceGroupChange}
              />
            </InlineField>

            <div style={query.top ? { display: 'none' } : { display: 'block' }}>
              <InlineField label={query.sourceGroup} onLoadStart={this.getWebApps}>
                <Select
                  width='auto'
                  menuShouldPortal
                  value={query.currentWebApp}
                  options={query.webApps}
                  onChange={this.onWebAppChange}
                />
              </InlineField>
            </div>

            <InlineField label="Metric" onLoadStart={() => this.getWebAppMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.webAppMetrics}
                value={query.currentWebAppMetric}
                onChange={this.onWebAppMetricChange}
              />
            </InlineField>
          </InlineFieldRow>

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

            <InlineField disabled={!query.top} label="N">
              <Input
                disabled={!query.top}
                width={16}
                value={query.topN || 0}
                onChange={this.onTopNChange}
              />
            </InlineField>

            <InlineField disabled={!query.top} label="Graph">
              <div style={{ marginTop: '8px' }}>
                <Switch
                  disabled={!query.top}
                  value={query.topGraph}
                  checked={query.topGraph}
                  onChange={this.onTopGraphChange}
                />
              </div>
            </InlineField>

            <InlineField disabled={!(query.top && query.topGraph)} label="Top Metric" onLoadStart={() => this.getTopMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.topMetrics}
                value={query.currentTopMetric}
                onChange={this.onTopMetricChange}
                disabled={!(query.top && query.topGraph)}
              />
            </InlineField>
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

            <InlineField label="Alias">
              <Input
                value={query.alias || ''}
                onChange={this.onAliasChange}
              ></Input>
            </InlineField>
          </InlineFieldRow>
        </div>

        {/* If source group is IP. */}
        <div style={query.sourceGroup === SourceGroup.ip ? { display: 'block' } : { display: 'none' }}>
          <InlineFieldRow>
            <InlineField label="Source Group">
              <Select
                width='auto'
                menuShouldPortal
                options={sourceGroups}
                value={query.sourceGroup}
                onChange={this.onSourceGroupChange}
              />
            </InlineField>

            <div style={query.top ? { display: 'none' } : { display: 'block' }}>
              <InlineField label={query.sourceGroup}>
                <Input
                  value={query.currentIP}
                  onChange={this.onIPChange}
                />
              </InlineField>
            </div>

            <InlineField label="Metric" onLoadStart={() => this.getIPMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.ipMetrics}
                value={query.currentIPMetric}
                onChange={this.onIPMetricChange}
              />
            </InlineField>
          </InlineFieldRow>

          <InlineFieldRow>
            <InlineField disabled={!query.top} label="Top">
              <div style={{ marginTop: '8px' }}>
                <Switch
                  value={query.top}
                  checked={query.top}
                  onChange={this.onTopChange}
                />
              </div>
            </InlineField>

            <InlineField disabled={!query.top} label="N">
              <Input
                disabled={!query.top}
                width={16}
                value={query.topN || 0}
                onChange={this.onTopNChange}
              />
            </InlineField>

            <InlineField disabled={!query.top} label="Graph">
              <div style={{ marginTop: '8px' }}>
                <Switch
                  disabled={!query.top}
                  value={query.topGraph}
                  checked={query.topGraph}
                  onChange={this.onTopGraphChange}
                />
              </div>
            </InlineField>

            <InlineField disabled={!(query.top && query.topGraph)} label="Top Metric" onLoadStart={() => this.getTopMetrics()}>
              <Select
                width='auto'
                menuShouldPortal
                options={query.topMetrics}
                value={query.currentTopMetric}
                onChange={this.onTopMetricChange}
                disabled={!(query.top && query.topGraph)}
              />
            </InlineField>
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

            <InlineField label="Alias">
              <Input
                value={query.alias || ''}
                onChange={this.onAliasChange}
              ></Input>
            </InlineField>
          </InlineFieldRow>
        </div>

        {/* If source group is SSL. */}
        <div style={query.sourceGroup === SourceGroup.ssl ? { display: 'block' } : { display: 'none' }}>
          <InlineFieldRow>
            <InlineField label="Source Group">
              <Select
                width='auto'
                menuShouldPortal
                options={sourceGroups}
                value={query.sourceGroup}
                onChange={this.onSourceGroupChange}
              />
            </InlineField>

            <InlineField label="If expiration time is less than" tooltip="Write -1 for all">
              <Input
                value={query.expirationTime}
                onChange={this.onExpirationTimeChange}
              />
            </InlineField>

          </InlineFieldRow>
          <InlineFieldRow>
            <InlineField label="Columns">
              <MultiSelect
                width='auto'
                menuShouldPortal
                options={sslKeyColumns}
                value={query.currentSSLKeyColumns}
                onChange={this.onSSLColumnsChange}
              />
            </InlineField>
          </InlineFieldRow>
        </div>
        {/* If source group is Alerts. */}
        <div style={query.sourceGroup === SourceGroup.alerts ? { display: 'block' } : { display: 'none' }}>
          <InlineFieldRow>
            <InlineField label="Source Group">
              <Select
                width='auto'
                menuShouldPortal
                options={sourceGroups}
                value={query.sourceGroup}
                onChange={this.onSourceGroupChange}
              />
            </InlineField>
            <InlineField label="Limit" tooltip="Max. number of alert to get">
              <Input
                value={query.alertLimit}
                onChange={this.onAlertLimitChange}
              />
            </InlineField>
          </InlineFieldRow>
          <InlineFieldRow>
            <InlineField label="Columns">
              <MultiSelect
                width='auto'
                menuShouldPortal
                options={query.alertColumns}
                value={query.currentAlertsColumns}
                onChange={this.onAlertsColumnsChange}
              />
            </InlineField>
          </InlineFieldRow>
        </div>
      </div >
    );
  }
}
