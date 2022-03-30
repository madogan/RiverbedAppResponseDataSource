import React, { PureComponent } from 'react';
import { SegmentSection, Segment, SegmentInput, Select, InlineFieldRow, InlineField, InlineSwitch } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './datasource';

import { AppResponseDataSourceOptions, AppResponseQuery, sourceGroups, SourceGroup, granularities, findGranularity, defaultQuery } from './types';
import { defaults } from 'lodash';


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
    onChange({
      ...query,
      top: v.value,
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
      <div className='gf-form-group'>
        <div className="gf-form-inline">
          <SegmentSection label='Source Group'>
            <Segment
              value={query.sourceGroup}
              options={sourceGroups.map(sourceGroup => ({
                value: sourceGroup,
                label: sourceGroup,
              }))}
              onLoad={this.getOptions}
              onChange={this.onSourceGroupChange}
            />
          </SegmentSection>

          <div
            className="gf-form-inline"
            style={query.sourceGroup === SourceGroup.hostGroup ? { display: 'block' } : { display: 'none' }}
          >
            <SegmentSection label={SourceGroup.hostGroup.toString()}>
              <Segment
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
            </SegmentSection>
          </div>

          <div
            className="gf-form-inline"
            style={query.sourceGroup === SourceGroup.application ? { display: 'block' } : { display: 'none' }}
          >
            <SegmentSection label={SourceGroup.application.toString()}>
              <Segment
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
            </SegmentSection>
          </div>

          <div
            className="gf-form-inline"
            style={query.sourceGroup === SourceGroup.webApp ? { display: 'block' } : { display: 'none' }}
          >
            <SegmentSection label={SourceGroup.webApp.toString()}>
              <Segment
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
            </SegmentSection>
          </div>

          <div
            className="gf-form-inline"
            style={query.sourceGroup === SourceGroup.ip ? { display: 'block' } : { display: 'none' }}
          >
            <SegmentSection label={SourceGroup.ip.toString()}>
              <SegmentInput
                value={query.currentIP || ''}
                onChange={(v) => {
                  this.props.onChange({
                    ...query,
                    currentIP: v as string,
                  });
                }}
              />
            </SegmentSection>

          </div>

          <SegmentSection label='Granularity'>
            <Segment
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
          </SegmentSection>

          <SegmentSection label='Timeshift'>
            <SegmentInput
              value={query.timeshift?.toString() || '0'}
              onChange={(v) => {
                this.props.onChange({
                  ...query,
                  timeshift: parseInt(v as string),
                });
              }}
            />
          </SegmentSection>

          <SegmentSection label='Alias'>
            <SegmentInput
              value={query.alias || ''}
              onChange={(v) => {
                this.props.onChange({
                  ...query,
                  alias: v as string,
                });
              }}
            />
          </SegmentSection>

          <div className='gf-form-inline'>
            <Select
              width='auto'
              prefix='Metrics'
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
          </div>

          <div className='gf-form-inline'>
            <InlineFieldRow>
              <InlineField label="My switch">
                <InlineSwitch value={query.top} onChange={this.onTopChange} />
              </InlineField>
            </InlineFieldRow>
          </div>
        </div>
      </div>
    );
  }
}
