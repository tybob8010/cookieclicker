Game.registerMod('mod1', {
    init: function(){
        // 読み込まれた時にメッセージを出す
        Game.Notify('Test Mod Loaded!', 'ようこそ、テストMODが有効になりました', '', 3);

        // perfectCookie.png を perfectoCookie2.png に置き換える
        Game.Loader.Replace('perfectCookie.png','perfectCookie2.png');
    },
    save: function(){ return ''; },
    load: function(str){ }
});
