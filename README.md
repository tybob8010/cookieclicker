# CookieClicker

## はじめに
このレポジトリは https://github.com/ozh/cookieclicker からフォークしました。

コメントを和訳しただけです。

### 原作のCookieClicker,フォーク元をリスペクトしてください！

---

## フォーク元readme.md和訳

<img src="img/perfectCookie.png" width="128">

オリジナルのゲームはこちらです：
http://orteil.dashnet.org/cookieclicker/

このミラーは、えーっと……一応“教育目的”ということで  
オフラインで自分用にダウンロードして“学習”したり、  
オリジナルのURLで“学習”できない場合は、以下のURLからオンラインでプレイできます。

https://tybob8010.github.io/cookieclicker/

↓フォーク元
http://ozh.github.io/cookieclicker/



### アップデート方法

オリジナルのゲームが更新された場合、以下の手順でミラーを更新できます：

#### 1. 新しい画像をすべて取得する :

ルートディレクトリから実行します。

ユーザーエージェントを設定：
* `USER="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"`

* `cd img/`
* `wget --user-agent="$USER" --convert-links -O index.html http://orteil.dashnet.org/cookieclicker/img/`
* `grep -v PARENTDIR index.html | grep '\[IMG' | grep -Po 'a href="\K.*?(?=")' | sed 's/\?.*//' > _imglist.txt`
* `wget --user-agent="$USER" -N -i _imglist.txt -B http://orteil.dashnet.org/cookieclicker/img/`

#### 2.新しいサウンドをすべて取得する :

同様に、ルートディレクトリから実行します：

* `cd snd/`
* `wget --user-agent="$USER" --convert-links -O index.html http://orteil.dashnet.org/cookieclicker/snd/`
* `grep -v PARENTDIR index.html | grep '\[SND' | grep -Po 'a href="\K.*?(?=")' | sed 's/\?.*//' > _sndlist.txt`
* `wget --user-agent="$USER" -N -i _sndlist.txt -B http://orteil.dashnet.org/cookieclicker/snd/`

#### 3. 新しい翻訳ファイルをすべて取得する :

同様に、ルートディレクトリから実行します：

* `cd loc/`
* `wget --user-agent="$USER" --convert-links -O index.html http://orteil.dashnet.org/cookieclicker/loc/`
* `grep -v PARENTDIR index.html | grep '\[TXT' | grep -Po 'a href="\K.*?(?=")' | sed 's/\?.*//' > _loclist.txt`
* `wget --user-agent="$USER" -i _loclist.txt http://orteil.dashnet.org/cookieclicker/loc/`

#### 4. `js` および `html` ファイルを更新する :

同様に、ルートディレクトリから実行します：

* Fetch the updated `index.html` file: `wget --user-agent="$USER" -O index.html http://orteil.dashnet.org/cookieclicker/` 
* Fetch the updated `style.css` file: `wget --user-agent="$USER" -O style.css http://orteil.dashnet.org/cookieclicker/style.css`
* Fetch updated `js` files : `wget --user-agent="$USER" -i _jslist.txt -B http://orteil.dashnet.org/cookieclicker/`
* Scan `index.html` for any new `<script src` and also `main.js` for any new local javascript (eg `Game.last.minigameUrl`). If there are new scripts, update the `_jslist.txt` accordingly.
* In `main.js` there is a nonfunctional URL we need to change: 
  * Find `DataDir=window.location.origin+'/data/';`, and change to `DataDir='https://orteil.dashnet.org/data/';`

#### 5. 更新内容を報告してください :)

もし更新できた場合は、他の人のためにもプルリクエストを作成してください。ありがとうございます！
