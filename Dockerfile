FROM zenika/alpine-chrome:81-with-puppeteer

USER root
RUN apk del ttf-freefont wqy-zenhei && \
    apk add --no-cache font-ipa && \
    rm -rf /var/cache/* && \
    mkdir /var/cache/apk
USER chrome
