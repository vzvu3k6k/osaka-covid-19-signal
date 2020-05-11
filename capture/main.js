const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.pref.osaka.lg.jp/default.html');

  // 「大阪モデルの詳細はこちらへ」のセルを非表示にする
  await page.addStyleTag({
    content: '[style="text-align:right;margin-top:5px;margin-bottom:5px;"] { display: none }'
  });

  const $signalBox = await page.$('.shingo-waku');
  await $signalBox.screenshot({ path: './capture/screenshots/signal.png' });

  await browser.close();
})();
