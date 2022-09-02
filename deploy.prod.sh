#!/bin/bash

# Remove old artifacts.
rm -rf dist

# Build frontend. (For development use `yarn dev`)
yarn build  
# yarn dev

# Build backend.
mage -v

scp -r ./dist ./src /package.json ./tsconfig.json ./Magefile.go ./go.sum ./go.mod grafana@172.16.34.24:/var/lib/grafana/plugins/riverbed-appresponse-datasource/

ssh -t grafana@172.16.34.24 'sudo systemctl restart grafana-server'
