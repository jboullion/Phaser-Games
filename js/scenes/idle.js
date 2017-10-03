scenes.idle = function(){};
scenes.idle.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = "#000033";
        debugLog('idle');
		addStateListeners();
	},
	update: function(){}
}
