#!/bin/bash

: '
This script is used to build plugin and sent to plugins directory of Grafana.
We use after making some changes in plugin code and want to update it.

It gets "-p" argument as plugins directory.
'

# Get arguments.
while getopts ":p:" opt; do
  case $opt in
    p) pluginsDir="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    exit 1
    ;;
  esac
  case $OPTARG in
    -*) echo "Option $opt needs a valid argument"
    exit 1
    ;;
  esac
done

# Exact path to the directory where the plugins are stored.
pluginsDir="${pluginsDir}/riverbed-appresponse-datasource/"

# Build frontend.
yarn dev

# Build backend.
mage -v

# Copy files into plugin directory.
# ATTENTION: It overwrite current files.
mkdir -p $pluginsDir
cp -r -f -v ./dist $pluginsDir
cp -r -f -v ./src $pluginsDir
cp -r -f -v ./package* $pluginsDir
cp -r -f -v ./tsconfig.json $pluginsDir
cp -r -f -v ./Magefile.go $pluginsDir
cp -r -f -v ./go.sum $pluginsDir
cp -r -f -v ./go.mod $pluginsDir
