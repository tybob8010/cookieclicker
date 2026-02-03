Game.registerMod('mod1', {
    init: function() {
        // 読み込まれた時にメッセージを出す
        Game.Notify('Test Mod Loaded!', 'ようこそ、テストMODが有効になりました', '', 3);

        // perfectCookie.png を perfectoCookie2.png に置き換える
        if (Game.Loader) {
            Game.Loader.Replace('perfectCookie.png', 'perfectoCookie2.png');
        }

        // ゲーム初期化後にも置き換えを保証
        Game.registerHook('reset', function() {
            if (Game.Loader) {
                Game.Loader.Replace('perfectCookie.png', 'perfectoCookie2.png');
            }
        });
    },

    save: function() { return ''; },
    load: function(str) { }
});
