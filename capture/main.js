const puppeteer = require('puppeteer');

(async () => {
  // FIXME: enable sandbox for security
  // https://github.com/puppeteer/puppeteer/blob/6099272612e9f998caaf7dc7c747b7643986da6c/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  const page = await browser.newPage();
  await page.goto('http://www.pref.osaka.lg.jp/default.html');
  const $signalBox = await page.$('.shingo-waku');
  await $signalBox.screenshot({ path: './capture/screenshots/signal.png' });
  await browser.close();
})();
