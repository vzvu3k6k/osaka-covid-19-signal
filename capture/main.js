const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.pref.osaka.lg.jp/default.html');
  const $signalBox = await page.$('.shingo-waku');
  await $signalBox.screenshot({ path: './capture/screenshots/signal.png' });
  await browser.close();
})();
