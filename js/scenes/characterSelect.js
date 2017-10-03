scenes.characterSelect = function(){};
scenes.characterSelect.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = "#333300";
        debugLog('characterSelect');
		addStateListeners();
	},
	update: function(){}
}
