scenes.tweens = function(){};

var tweenme;

scenes.tweens.prototype = {
	preload: function(){
		game.load.image('dude', 'assets/sprites/dude.png');
	},
	create: function(){
		game.stage.backgroundColor = "#333399";
		addStateListeners();

		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		var tweeners = [];

		for(var i = 0; i < 5; i++){
			tweeners[i] = game.add.sprite( (50 + (i * 200) ) ,100,'dude');
		}

		//http://easings.net/
		//https://phaser.io/docs/2.4.4/Phaser.Easing.html
		/*
    Phaser.Easing.Back.In,               // 0
    Phaser.Easing.Back.Out,              // 1
    Phaser.Easing.Back.InOut,            // 2
    Phaser.Easing.Bounce.In,             // 3
    Phaser.Easing.Bounce.Out,            // 4
    Phaser.Easing.Bounce.InOut,          // 5
    Phaser.Easing.Circular.In,           // 6
    Phaser.Easing.Circular.Out,          // 7
    Phaser.Easing.Circular.InOut,        // 8
    Phaser.Easing.Cubic.In,              // 9
    Phaser.Easing.Cubic.Out,             // 10
    Phaser.Easing.Cubic.InOut,           // 11
    Phaser.Easing.Elastic.In,            // 12
    Phaser.Easing.Elastic.Out,           // 13
    Phaser.Easing.Elastic.InOut,         // 14
    Phaser.Easing.Exponential.In,        // 15
    Phaser.Easing.Exponential.Out,       // 16
    Phaser.Easing.Exponential.InOut,     // 17
    Phaser.Easing.Linear.In,             // 18
    Phaser.Easing.Quadratic.In,          // 19
    Phaser.Easing.Quadratic.Out,         // 20
    Phaser.Easing.Quadratic.InOut,       // 21
    Phaser.Easing.Quartic.In,            // 22
    Phaser.Easing.Quartic.Out,           // 23
    Phaser.Easing.Quartic.InOut,         // 24
    Phaser.Easing.Quintic.In,            // 25
    Phaser.Easing.Quintic.Out,           // 26
    Phaser.Easing.Quintic.InOut,         // 27
    Phaser.Easing.Sinusoidal.In,         // 28
    Phaser.Easing.Sinusoidal.Out,        // 29
    Phaser.Easing.Sinusoidal.InOut
		*/
		//tween on load
		var tweenduration = 2 * 1000;
		game.add.tween(tweeners[0]).to({y:'+400'}, tweenduration, 'Bounce.easeOut', true);

		tweenme = game.add.tween(tweeners[1]).to({y:400, x:400}, tweenduration, Phaser.Easing.Quintic.InOut);

		game.add.tween(tweeners[2]).from({y:400}, tweenduration, Phaser.Easing.Circular.Out, true);

		game.add.tween(tweeners[3].scale).to({x: 0.5,y:0.5}, tweenduration, Phaser.Easing.Exponential.In, true, 500, false, true).loop(true);

		game.add.tween(tweeners[4]).to({alpha:0.1}, tweenduration, Phaser.Easing.Sinusoidal.InOut, true, 0, false, true);
	},
	update: function(){}
}
