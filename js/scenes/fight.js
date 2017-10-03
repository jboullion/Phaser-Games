scenes.fight = function(){};
scenes.fight.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = "#001111";
        debugLog('fight');
		addStateListeners();
	},
	update: function(){}
}
