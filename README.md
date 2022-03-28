# Grafana Riverbed AppResponse Data Source Backend Plugin 

[![Build](https://github.com/grafana/grafana-starter-datasource-backend/workflows/CI/badge.svg)](https://github.com/grafana/grafana-datasource-backend/actions?query=workflow%3A%22CI%22)

## What is Grafana Data Source Backend Plugin?

Grafana supports a wide range of data sources, including Prometheus, MySQL, and even Datadog. We didn't find a plugin for Riverbed's AppResponse. There was [a plugin](https://github.com/Crinon/grafana-riverbed-appresponse) which is developed for Grafana 3.x.x and they do not maintain. We've inspired Crinon's plugin and built this plugin which is developed for Grafana 7.x.x and latest versions. 

For more information about backend plugins, refer to the documentation on [Backend plugins](https://grafana.com/docs/grafana/latest/developers/plugins/backend/).

## Getting started

A data source backend plugin consists of both frontend and backend components.

### Frontend

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

### Backend

1. Update [Grafana plugin SDK for Go](https://grafana.com/docs/grafana/latest/developers/plugins/backend/grafana-plugin-sdk-for-go/) dependency to the latest minor version:

   ```bash
   go get -u github.com/grafana/grafana-plugin-sdk-go
   go mod tidy
   ```

2. Build backend plugin binaries for Linux, Windows and Darwin:

   ```bash
   mage -v
   ```

3. List all available Mage targets for additional commands:

   ```bash
   mage -l
   ```

### Authors

<div style="fluid">
<div style="text-align: center;">
   <img style="border-radius: 50%;" align="center" width="100" height="100" src="https://media-exp1.licdn.com/dms/image/C4D03AQH_TCvtbY1tsg/profile-displayphoto-shrink_400_400/0/1516884661634?e=1654128000&v=beta&t=9ScpFD9OPFjVU_FX0ghb9fO0G4q0BUz7v9LA4WK1ZYg">
   <p style="padding: 10px;"> Can Cihan Hırçın </p>
</div>

<div style="text-align: center;">
   <img style="border-radius: 50%;" align="center" width="100" height="100" src="https://media-exp1.licdn.com/dms/image/C4D03AQFfCmD3e-gnKQ/profile-displayphoto-shrink_400_400/0/1559579240964?e=1654128000&v=beta&t=oeq58CcbzMBaUqa8KWlgwb-yheBz03TIiKpynSEkSM0">
   <p style="padding: 10px;"> Muhammed Ali Doğan </p>
</div>
</div>

