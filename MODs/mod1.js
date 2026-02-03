Game.registerMod('mod1', {
    init: function() {
        // MOD読み込み通知
        Game.Notify('mod1 Loaded!', 'mod1が有効になりました', '', 3);

        // 画像ロード完了後に perfectCookie.png を置き換える
        Game.registerHook('imageLoaded', function() {
            Game.Loader.Replace('perfectCookie.png', 'perfectCookie2.png');
        });
    },

    save: function() { return ''; },
    load: function(str) { }
});
