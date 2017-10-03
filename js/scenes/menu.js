scenes.menu = function(){};
scenes.menu.prototype = {
	preload: function(){
		game.load.image('dude', 'assets/sprites/test-dude.png');

	},
	create: function(){
		game.stage.backgroundColor = "#f10000";
        debugLog('menu');
		addStateListeners();

		//force the game to fit all scales
		//game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		//setup our dude
		characters.dude.sprite = game.add.sprite(screen.centerX,screen.centerY, 'dude');
		//center him on screen
		characters.dude.sprite.anchor.setTo(0.5, 0.5);
	},
	update: function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			characters.dude.sprite.x += characters.dude.speed;
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			characters.dude.sprite.x -= characters.dude.speed;
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			characters.dude.isJumping = true;
			characters.dude.sprite.y -= characters.dude.speed;
		}
	}
}
