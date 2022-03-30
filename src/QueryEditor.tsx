import { DataSource } from './datasource';
import { defaults, toInteger } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps } from '@grafana/data';
import { Select, InlineFieldRow, InlineField, Input, Switch } from '@grafana/ui';
import { AppResponseDataSourceOptions, AppResponseQuery, sourceGroups, SourceGroup, defaultQuery, granularities, findGranularity, topNDirections } from './types';


type Props = QueryEditorProps<DataSource, AppResponseQuery, AppResponseDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {

  getHostGroups = async () => {
    const { query, datasource, onChange } = this.props;
    if (query.hostGroups.length < 1) {
      onChange({
        ...query,
        hostGroups: await datasource.getHostGroups(),
      });
    }
  }

  getApplications = async () => {
    const { query, datasource, onChange } = this.props;
    if (query.applications.length < 1) {
      onChange({
        ...query,
        applications: await datasource.getApplications(),
      });
    }
  }

  getWebApps = async () => {
    const { query, datasource, onChange } = this.props;
    if (query.webApps.length < 1) {
      onChange({
        ...query,
        webApps: await datasource.getWebApps(),
      });
    }
  }

  getMetrics = async (sourceGroup: SourceGroup | undefined) => {
    const { query, datasource, onChange } = this.props;
    if (sourceGroup !== undefined && query.metrics.length < 1) {
      onChange({
        ...query,
        metrics: await datasource.getMetrics(sourceGroup),
      });
    }
  }

  onSourceGroupChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    if (v.value === SourceGroup.hostGroup) {
      this.getHostGroups();
    } else if (v.value === SourceGroup.application) {
      this.getApplications();
    } else if (v.value === SourceGroup.webApp) {
      this.getWebApps();
    }
    this.getMetrics(v.value as SourceGroup);

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
      currentHostGroupID: v.id,
      currentHostGroup: v.name,
    });
    onRunQuery();
  }

  onApplicationChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentApplicationID: v.id,
      currentApplication: v.name,
    });
    onRunQuery();
  }

  onIPChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;

    onChange({
      ...query,
      currentIP: v.value,
    });
    onRunQuery();
  }

  onMetricChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({
      ...query,
      currentMetricID: v.id,
      currentMetric: v.name,
    });
    onRunQuery();
  }

  onTopChange = (v: any) => {
    const { onChange, query, onRunQuery } = this.props;
    console.log(v);
    onChange({
      ...query,
      top: v.target.checked,
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

  getOptions = () => {
    const sourceGroup = this.props.query.sourceGroup;
    if (sourceGroup === SourceGroup.hostGroup) {
      this.getHostGroups();
    } else if (sourceGroup === SourceGroup.application) {
      this.getApplications();
    } else if (sourceGroup === SourceGroup.webApp) {
      this.getWebApps();
    }
    this.getMetrics(sourceGroup)
  }

  render() {
    const query = defaults(this.props.query, defaultQuery);

    this.getOptions();

    return (
      <div style={{ width: '100%' }}>
        <InlineFieldRow>
          <InlineField label="Source Group">
            <Select
              width='auto'
              menuShouldPortal
              options={sourceGroups.map(sourceGroup => ({
                value: sourceGroup,
                label: sourceGroup,
              }))}
              value={query.sourceGroup}
              onChange={
                (v: any) => {
                  this.onSourceGroupChange(v);
                  this.getOptions();
                }
              }
            />
          </InlineField>
          <div style={query.sourceGroup === SourceGroup.hostGroup ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup}  >
              <Select
                id={query.currentHostGroupID}
                value={query.currentHostGroup}
                options={query.hostGroups.map(hostGroup => ({
                  id: hostGroup.id,
                  name: hostGroup.name,
                  value: hostGroup.name,
                  label: hostGroup.name,
                }))}
                onChange={this.onHostGroupChange}
              />
            </InlineField>
          </div>
          <div style={query.sourceGroup === SourceGroup.application ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup} >
              <Select
                id={query.currentApplicationID}
                value={query.currentApplication}
                options={query.applications.map(application => ({
                  id: application.id,
                  name: application.name,
                  value: application.name,
                  label: application.name,
                }))}
                onChange={this.onApplicationChange}
              />
            </InlineField>
          </div>
          <div style={query.sourceGroup === SourceGroup.webApp ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup} >
              <Select
                id={query.currentWebAppID}
                value={query.currentWebApp}
                options={query.webApps.map(webApp => ({
                  id: webApp.id,
                  name: webApp.name,
                  value: webApp.name,
                  label: webApp.name,
                }))}
                onChange={(v) => {
                  this.props.onChange({
                    ...query,
                    currentWebAppID: v.id,
                    currentWebApp: v.name,
                  });
                }}
              />
            </InlineField>
          </div>
          <div style={query.sourceGroup === SourceGroup.ip ? { display: 'block' } : { display: 'none' }}>
            <InlineField label={query.sourceGroup} >

              <Input
                value={query.currentIP || ''}
                onChange={(e) => {
                  this.props.onChange({
                    ...query,
                    currentIP: e.currentTarget.value,
                  });
                }}
              />

            </InlineField>
          </div>
        </InlineFieldRow >
        <InlineFieldRow>
          <InlineField label="Metric">
            <Select
              width='auto'
              menuShouldPortal
              options={
                query.metrics.map((metric) => ({
                  id: metric.id,
                  name: metric.name,
                  value: metric.name,
                  label: metric.name,
                }))
              }
              value={query.currentMetric}
              onChange={this.onMetricChange}
            />
          </InlineField>

          <InlineField label="Top">
            <div style={{ marginTop: '32px' }}>
              <Switch
                checked={query.top}
                onChange={this.onTopChange}
              />
            </div>
          </InlineField>

          <div style={query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="N">
              <Input
                value={query.topN || 0}
                onChange={(e) => {
                  this.props.onChange({
                    ...query,
                    topN: toInteger(e.currentTarget.value) || 0,
                  });
                }}
              />
            </InlineField>
          </div>
          <div style={query.top ? { display: 'block' } : { display: 'none' }}>
            <InlineField label="Direction">
              <Select
                width='auto'
                menuShouldPortal
                options={topNDirections}
                value={query.topNDirection}
                onChange={
                  (v: any) => {
                    this.props.onChange({
                      ...query,
                      topNDirection: v.value,
                    });
                  }
                }
              />
            </InlineField>
          </div>
        </InlineFieldRow>

        <InlineFieldRow>
          <InlineField label="Granularity">
            <Select
              value={query.granularity?.text}
              options={granularities.map(granularity => ({
                value: granularity.text,
                label: granularity.text,
              }))}
              onChange={(v) => {
                this.props.onChange({
                  ...query,
                  granularity: findGranularity(v.value as string),
                });
              }}
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
