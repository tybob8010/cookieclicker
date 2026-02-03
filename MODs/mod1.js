Game.registerMod('mod1', {
    init: function() {
        // 読み込まれた時にメッセージを出す
        Game.Notify('mod1 Loaded!', 'ようこそ mod1 が有効になりました', '', 3);

        // perfectCookie.png を perfectoCookie2.png に置き換える
        if (Game.Loader) {
            Game.Loader.Replace('perfectCookie.png', 'perfectoCookie 2.png');
        }

        // ゲーム初期化後にも置き換えを保証
        Game.registerHook('reset', function() {
            if (Game.Loader) {
                Game.Loader.Replace('perfectCookie.png', 'perfectoCookie 2.png');
            }
        });
    },

    save: function() { return ''; },
    load: function(str) { }
});
