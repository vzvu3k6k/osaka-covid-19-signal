const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.pref.osaka.lg.jp/default.html');

  // 「▼ 信号の意味についてはこちら」を非表示にする
  await page.addStyleTag({
    content: '.shingo-waku [style="cursor:pointer;"] { display: none }'
  });

  // 「大阪モデルの詳細はこちらへ」のセルを非表示にする
  await page.addStyleTag({
    content: '[style="text-align:right;margin-top:5px;margin-bottom:5px;"] { display: none }'
  });

  const $signalBox = await page.$('.shingo-waku');
  await $signalBox.screenshot({ path: './capture/screenshots/signal.png' });

  const $detailBox = await page.$('.shingo-meisai-waku');
  await $detailBox.screenshot({ path: './capture/screenshots/detail.png' });

  await browser.close();
})();
