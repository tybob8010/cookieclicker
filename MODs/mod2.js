Game.registerMod('mod2', {
    init: function() {
        // MOD 読み込み時の通知
        Game.Notify('mod2 Mod Loaded!', 'ようこそ、mod2が有効になりました', '', 3);

        // perfectCookie.png を perfectoCookie2.png に置き換え
        var newCookieUrl = 'https://raw.githubusercontent.com/tybob8010/cookieclicker/gh-pages/img/perfectCookie%203.png';
        if (Game.Loader) {
            Game.Loader.Replace('perfectCookie.png', newCookieUrl);
            Game.Win('So much to do so much to see')
            new Game.Achievement('Oldennnnnnnn! days',loc("Find the <b>forgotten madeleine</b>.")+'<q>DashNet Farms remembers.</q>',[30,6]);
            Game.Win('Oldennnnnnnn! days')
        }
    },
    save: function(){ return ''; },
    load: function(str){ }
});
