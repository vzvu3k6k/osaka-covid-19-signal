#!/bin/bash

docker container run --rm \
  -v $(pwd)/capture:/usr/src/app/capture \
  --security-opt seccomp=chrome.json \
  zenika/alpine-chrome:81-with-puppeteer node capture/main.js
