import React, { ChangeEvent, PureComponent } from 'react';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { Button, InlineField, InlineFieldRow, Input, Switch } from '@grafana/ui';
import { AppResponseDataSourceOptions, AppResponseSecureJsonData } from './types';

interface Props extends DataSourcePluginOptionsEditorProps<AppResponseDataSourceOptions> { }

interface State {}

export class ConfigEditor extends PureComponent<Props, State> {

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
    const secureJsonData = (options.secureJsonData || {}) as AppResponseSecureJsonData;

    return (
      <div>
        <InlineFieldRow>
          <InlineField label="Path" grow>
            <Input value={options.jsonData.path || ''} onChange={this.onPathChange} />
          </InlineField>
        </InlineFieldRow>

        <InlineFieldRow>
          <InlineField label="User" grow>
            <Input value={options.jsonData.username || ''} onChange={this.onUsernameChange} />
          </InlineField>
        </InlineFieldRow>

        <InlineFieldRow>
          <InlineField
            label="Password"
            tooltip={secureJsonFields?.password ? 'Configured' : 'Not configured'}
            grow
          >
            <Input
              type="password"
              value={secureJsonData.password || ''}
              placeholder={secureJsonFields?.password ? 'configured' : ''}
              onChange={this.onPasswordChange}
            />
          </InlineField>
          {secureJsonFields?.password && (
            <Button variant="secondary" onClick={this.onResetPassword}>
              Reset
            </Button>
          )}
        </InlineFieldRow>

        <InlineFieldRow>
          <InlineField label="Skip TLS Verify">
            <Switch
              value={options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify}
              checked={options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify}
              onChange={this.onTlsSkipVerifyChange}
            />
          </InlineField>
        </InlineFieldRow>
      </div>
    );
  }
}
