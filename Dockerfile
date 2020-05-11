FROM zenika/alpine-chrome:81-with-puppeteer
COPY capture.js /usr/src/app
ENTRYPOINT ["node", "capture.js"]
