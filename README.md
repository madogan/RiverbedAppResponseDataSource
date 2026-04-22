# Riverbed AppResponse Data Source for Grafana

Turkce dokumantasyon: [README.tr.md](README.tr.md)

## Overview

This repository contains a Grafana data source plugin for Riverbed AppResponse.
It includes:

- A **frontend query editor** (TypeScript/React)
- A **backend binary** (Go, Grafana Plugin SDK)
- A **proxy-based integration model** using datasource routes in `plugin.json`
- A **Docker-based local validation setup** for Grafana 12.x and 13.x

The plugin is currently aligned for Grafana 12/13 compatibility.

## Features

- Query Riverbed AppResponse APIs through Grafana datasource proxy routes
- Support for multiple source groups in the query editor:
  - Application
  - Host Group
  - Web App
  - IP
  - SSL
  - Alerts
- Configurable datasource settings:
  - Base path
  - Username
  - Password (secure field)
  - TLS skip verify option
- Backend health check endpoint for datasource validation

## Compatibility

- Grafana dependency range: `>=12.0.0 <14.0.0`
- Tested locally against:
  - Grafana `12.3.6`
  - Grafana `13.0.x`
- Plugin signature in local dev: **unsigned** (allowed via Grafana setting)

## Project Structure

- `src/` frontend plugin code (`module.ts`, query/config editors, datasource logic)
- `pkg/` Go backend plugin entrypoint and health/query handlers
- `dist/` built plugin artifacts (frontend + backend binaries)
- `docker/` local Grafana provisioning and config files
- `.github/workflows/` CI and release pipelines

## Development

### Prerequisites

- Node.js (LTS, modern npm)
- Go toolchain
- Docker + Docker Compose

### Install dependencies

```bash
npm install
go mod tidy
```

### Frontend commands

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm test
```

### Backend commands

```bash
go run github.com/magefile/mage@latest buildAll
go test ./pkg/...
go build ./pkg/...
```

## Local Grafana Validation (12 + 13)

Start both versions:

```bash
docker compose up -d
```

Access:

- Grafana 12: <http://localhost:3001>
- Grafana 13: <http://localhost:3002>
- Default credentials: `admin / admin`

Stop:

```bash
docker compose down
```

The compose setup binds:

- plugin artifacts from `./dist`
- provisioning from `./docker/provisioning`
- Grafana config from `./docker/grafana/grafana.ini`

Unsigned plugin loading is enabled for `alidogan-appresponse-datasource`.

## Signing

For distribution, sign the plugin:

```bash
npm run sign
```

Required environment variable:

- `GRAFANA_ACCESS_POLICY_TOKEN`

## License

Apache-2.0
