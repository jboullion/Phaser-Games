demo.state1 = function(){};
demo.state1.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = "#f10000";
        debugLog('state1');
	},
	update: function(){}
}
