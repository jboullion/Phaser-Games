scenes.menu = function(){};
scenes.menu.prototype = {
	preload: function(){
		//game.load.image('dude', 'assets/sprites/dude.png');
		game.load.spritesheet('dude', 'assets/spritesheets/dudeSheet.png', 159, 250);
		game.load.image('background', 'assets/backgrounds/background1.png');
	},
	create: function(){
		//init the game physics. Must be one of the first CREATE functions called
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 2000;

		playerOne = characters.dude;

		debugLog('menu');
		addStateListeners();

		//force the game to fit all scales
		//game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.world.setBounds(0,0,1600, 700);

		//add background
		var background = game.add.sprite(0,0, 'background');

		//setup our dude
		playerOne.sprite = game.add.sprite(screen.centerX / 2,screen.centerY + (screen.centerY/2), 'dude');
		//center him on screen
		playerOne.sprite.anchor.setTo(0.5, 0.5);
		//create an animation out of the dude spritesheet
		playerOne.sprite.animations.add('walk', [0,1,2]);

		//enable physics on dude
		game.physics.enable(playerOne.sprite);
		playerOne.sprite.body.collideWorldBounds = true;

		game.camera.follow(playerOne.sprite);
		game.camera.deadzone = new Phaser.Rectangle(screen.centerX - 300, 0, 600, 800);

	},
	update: function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			playerOne.sprite.x += playerOne.speed;
			//turn around when walking
			playerOne.sprite.scale.setTo(1, 1);
			//walk
			playerOne.sprite.animations.play('walk', 12, true);
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			playerOne.sprite.x -= playerOne.speed;
			//turn around when walking
			playerOne.sprite.scale.setTo(-1, 1);
			playerOne.sprite.animations.play('walk', 12, true);
		}else{
			//stop animation and set player into first frame
			playerOne.sprite.animations.stop();
			playerOne.sprite.frame = 0;
		}


		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)
			&& characters.dude.sprite.body.onFloor()
			&& game.time.now > characters.dude.jumpTimer ){
			characters.dude.isJumping = true;
			characters.dude.sprite.y -= characters.dude.speed;
			characters.dude.sprite.body.velocity.y = -750;
			characters.dude.jumpTimer = game.time.now + 150;
		}
	}
}
