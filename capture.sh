#!/bin/bash

set -eux

docker build . -t osaka-covid-19-signal:latest

docker container run --rm \
  -u $(id -u) \
  -v $(pwd)/capture:/usr/src/app/capture \
  --security-opt seccomp=chrome.json \
  osaka-covid-19-signal:latest node capture/main.js
