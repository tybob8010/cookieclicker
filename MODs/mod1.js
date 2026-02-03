Game.registerMod('mod1', {
    init: function(){
        // 読み込まれた時にメッセージを出す
        Game.Notify('Test Mod Loaded!', 'ようこそ、テストMODが有効になりました', '', 3);

        // perfectCookie.png を perfectoCookie2.png に置き換える
        for (var i in Game.Objects){
            var obj = Game.Objects[i];
            if (obj.icon === 'perfectCookie.png') obj.icon = 'perfectoCookie2.png';
        }

        // もし画像パスを直接参照する関数があれば、それも置き換える
        if (Game.Upgrade) {
            for (var i in Game.Upgrades){
                var upg = Game.Upgrades[i];
                if (upg.icon === 'perfectCookie.png') upg.icon = 'perfectoCookie2.png';
            }
        }
    },
    save: function(){ return ''; },
    load: function(str){ }
});
