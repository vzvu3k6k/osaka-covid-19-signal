# osaka-covid-19-signal

http://www.pref.osaka.lg.jp/default.html の「大阪府新型コロナ警戒信号」の枠のキャプチャ画像を取得するためのスクリプト

## 使い方

```
$ ./capture.sh
$ open capture/screenshots/signal.png
```

## 動作に必要なもの

- Docker

## License

[CC0](https://creativecommons.org/publicdomain/zero/1.0/)

---

- `chrome.json` is taken from [etc/docker/seccomp/chrome.json in jessfraz/dotfiles](https://github.com/jessfraz/dotfiles/blob/548d48d19cc3c227802a5a564f87f4605175a1a2/).
