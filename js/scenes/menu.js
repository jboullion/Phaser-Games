scenes.menu = function(){};
scenes.menu.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = "#f10000";
        debugLog('menu');
		addStateListeners();

		//force the game to fit all scales
		game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	update: function(){}
}
