#!/bin/bash

docker container run --rm \
  -v $(pwd)/capture:/usr/src/app/capture \
  zenika/alpine-chrome:81-with-puppeteer node capture/main.js
