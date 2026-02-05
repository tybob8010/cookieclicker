Game.registerMod('mod2', {
    init: function() {
        // MOD 読み込み時の通知
        Game.Notify('mod2 Mod Loaded!', 'ようこそ、mod2が有効になりました', '', 3);

        // perfectCookie.png を perfectoCookie2.png に置き換え
        var newCookieUrl = 'https://raw.githubusercontent.com/tybob8010/cookieclicker/gh-pages/img/perfectCookie%203.png';
        if (Game.Loader) {
            Game.Loader.Replace('perfectCookie.png', newCookieUrl);
            Game.Win('So much to do so much to see')
            order=700000;
            new Game.Achievement('テストだよ',loc("みつけた <b>あああ</b>を.")+'<q>テスト</q>',[300,6]);
            Game.Win('テストだよ')
            order = 5000; // 表示順を設定
            new Game.Achievement(
                'Super Clicker', // 実績の名前
                loc("Make <b>%1</b> cookies by clicking.", loc("%1 cookie", LBeautify(10))) + '<q>Click, click, click!</q>', // 実績の説明
                [10, 10] // 実績の進行状況（IDと進行度）
            );
            Game.Win('Super Clicker')
            order=60000;Game.TieredAchievement('おおおお','','Prism',5);
            Game.Win('おおおお')

        }
    },
    save: function(){ return ''; },
    load: function(str){ }
});
