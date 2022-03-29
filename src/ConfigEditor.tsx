import React, { PureComponent, ChangeEvent } from 'react';
import { InlineField, InlineFieldRow, InlineFormLabel, InlineSwitch } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps, DataSourceSettings } from '@grafana/data';
import { AppResponseDataSourceOptions, AppResponseSecureJsonData } from './types';
import { LegacyForms } from '@grafana/ui';

interface Props extends DataSourcePluginOptionsEditorProps<AppResponseDataSourceOptions> { }

interface State { }


export class ConfigEditor extends PureComponent<Props, State> {

  _onOptionsChange = (_options: DataSourceSettings<AppResponseDataSourceOptions, {}>) => {
    const { onOptionsChange, options } = this.props;
    return onOptionsChange({
      ...options,
      ..._options,
    });
  };

  onPathChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      path: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onTlsSkipVerifyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      tlsSkipVerify: event.target.checked,
      skipTlsVerify: event.target.checked,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      username: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonData: {
        password: event.target.value,
      },
    });
  };

  onResetPassword = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        password: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        password: '',
      },
    });
  };

  render() {
    const { options } = this.props;
    const { secureJsonFields } = options;
    const { Input, SecretFormField } = LegacyForms;
    const secureJsonData = (options.secureJsonData || {}) as AppResponseSecureJsonData;

    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <InlineFormLabel className="width-10">
              Path
            </InlineFormLabel>
            <div className="width-10">
              <Input
                className="width-20"
                value={options.jsonData.path || ''}
                onChange={this.onPathChange}
              />
            </div>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <InlineFormLabel className="width-10">
              User
            </InlineFormLabel>
            <div className="width-10">
              <Input
                className="width-20"
                value={options.jsonData.username || ''}
                onChange={this.onUsernameChange}
              />
            </div>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <SecretFormField
              isConfigured={(secureJsonFields && secureJsonFields.password) as boolean}
              value={secureJsonData.password || ''}
              label="Password"
              aria-label="Password"
              labelWidth={10}
              inputWidth={20}
              onReset={this.onResetPassword}
              onChange={this.onPasswordChange}
            />
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <InlineFieldRow>
              <InlineField label="Skip TLS Verify">
                <InlineSwitch
                  value={options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify}
                  checked={options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify}
                  onChange={this.onTlsSkipVerifyChange}
                />
              </InlineField>
            </InlineFieldRow>
          </div>
        </div>
      </div>
    );
  }
}
