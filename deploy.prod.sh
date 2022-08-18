#!/bin/bash

# Remove old artifacts.
rm -rf dist

# Build frontend. (For development use `yarn dev`)
yarn build  
# yarn dev

# Build backend.
mage -v

# Exact path to the directory where the plugins are stored.
pluginsDir="/etc/grafana/plugins/riverbed-appresponse-datasource/"

# Copy files into plugin directory.
# ATTENTION: It overwrite current files.
rm -rf $pluginsDir
mkdir -p $pluginsDir
cp -r -f -v ./dist $pluginsDir
cp -r -f -v ./src $pluginsDir
cp -r -f -v ./package* $pluginsDir
cp -r -f -v ./tsconfig.json $pluginsDir
cp -r -f -v ./Magefile.go $pluginsDir
cp -r -f -v ./go.sum $pluginsDir
cp -r -f -v ./go.mod $pluginsDir

scp -r -v ./dist/ $pluginsDir