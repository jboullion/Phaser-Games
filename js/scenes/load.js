scenes.load = function(){};
scenes.load.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = "#cccccc";
        debugLog('load');
		addStateListeners();
	},
	update: function(){}
}
