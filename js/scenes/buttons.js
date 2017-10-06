scenes.buttons = function(){};

var buttons = {}

scenes.buttons.prototype = {
	preload: function(){
		game.load.spritesheet('buttons', 'assets/spritesheets/buttons.png', 192, 64);

		game.load.image('button_test', 'assets/sprites/cannon_base.png');

	//	game.load.audio('button_sound', 'assets/sounds/button.wav');
		game.load.audio('button_sound', 'assets/sounds/quick_button.wav');
	},
	create: function(){
		game.stage.backgroundColor = "#333300";
		addStateListeners();

		//game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		buttons.sound = game.add.audio('button_sound');
		buttons.sound.addMarker('down',0,0.06);
		buttons.sound.addMarker('up',0.07,0.13);


		buttons.fight = game.add.button(100,100,'buttons', function(){
			changeState(null, FIGHTKEY);
		}, 0,0,0,0);
		buttons.tilemap = game.add.button(200,200,'buttons', function(){
			changeState(null, TILEMAPKEY);
		}, 1,1,1,1);
		buttons.bullet = game.add.button(300,300,'buttons', function(){
			changeState(null, BULLETKEY);
		}, 2,2,2,2);
		//buttons.buttons = game.add.button(400,400,'buttons', function(){
		buttons.tweenkey = game.add.button(400,400,'buttons', function(){
			changeState(null, TWEENKEY);
		}, this, 3,3, 3, 3);

		buttons.tweenkey.onInputDown.add(this.tint, buttons.tweenkey);
		buttons.tweenkey.onInputUp.add(this.untint, buttons.tweenkey);

		var button_test = game.add.button(500,500,'button_test', function(){
			//console.log('testing');
		});

		button_test.onInputDown.add(this.tint, button_test);
		button_test.onInputUp.add(this.untint, button_test);

	},
	tint: function(){
		this.tint = 0xbbbbbb;
		buttons.sound.play('down');
	},
	untint: function(){
		this.tint = 0xFFFFFF;
		buttons.sound.play('up');
	},
	update: function(){}
}
