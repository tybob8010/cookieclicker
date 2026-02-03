Game.registerMod('mod1', {
    init: function() {
        // MOD 読み込み時の通知
        Game.Notify('Test Mod Loaded!', 'ようこそ、テストMODが有効になりました', '', 3);

        // perfectCookie.png を perfectoCookie2.png に置き換え
        var newCookieUrl = 'https://raw.githubusercontent.com/tybob8010/cookieclicker/gh-pages/img/perfectCookie%202.png';
        if (Game.Loader) {
            Game.Loader.Replace('perfectCookie.png', newCookieUrl);
        }
    },
    save: function(){ return ''; },
    load: function(str){ }
});
