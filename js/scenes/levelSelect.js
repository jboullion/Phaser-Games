scenes.levelSelect = function(){};
scenes.levelSelect.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = "#003300";
        debugLog('levelSelect');
		addStateListeners();
	},
	update: function(){}
}
