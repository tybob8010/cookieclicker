Game.registerMod('mod_Dungeon', {
    init: function() {
        // MOD 読み込み時の通知
        Game.Notify('Dungeon is enabled!', 'DungeonMODが有効になりました', '', 3);

        if (Game.Loader) {
            Game.last.minigameUrl='DungeonGen.js';
            Game.last.minigameUrl='dungeon.js';
        }
    },
    save: function(){ return ''; },
    load: function(str){ }
});
