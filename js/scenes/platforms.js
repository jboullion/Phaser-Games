scenes.platforms = function(){};

var platforms;

scenes.platforms.prototype = {
	preload: function(){
		game.load.spritesheet('dude', 'assets/spritesheets/dudeSheet.png', 159, 250);
		game.load.image('platform', 'assets/sprites/cannon_barrel.png');
		game.load.image('background', 'assets/backgrounds/background1.png');
	},
	create: function(){
		game.stage.backgroundColor = "#003300";
		addStateListeners();

		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		game.load.image('background', 'assets/backgrounds/background1.png');
		var background = game.add.sprite(0,0, 'background');

		game.world.setBounds(0,0,background.width, background.height-100);

		playerOne = characters.dude;
		platforms = game.add.group();

		playerOne.sprite = game.add.sprite(screen.centerX / 2,screen.centerY + (screen.centerY/2), 'dude');

		//create our enemies!
		for(var i = 0; i < 3; i++){
			platforms.create(getRandomInt(75,screen.width - 75), getRandomInt(screen.height - 500,screen.height - 100), 'platform');
		}

		//enable physics on dude
		game.physics.enable([playerOne.sprite, platforms]);//[playerOne.sprite, platforms]

		//center him on screen
		playerOne.sprite.anchor.setTo(0.5, 0.5);
		//create an animation out of the dude spritesheet
		playerOne.sprite.animations.add('walk', [0,1,2]);

		playerOne.sprite.body.collideWorldBounds = true;
		playerOne.sprite.body.gravity.y = 500;
		playerOne.sprite.body.bounce.y = 0.3;
		playerOne.sprite.body.drag.x = 400;
		playerOne.jump = 500;

		//platforms.enableBody = true;
	//	platforms.physicsBodyType = Phaser.Physics.ARCADE;
		platforms.setAll('anchor.x', 0.5);
		platforms.setAll('anchor.y', 0.5);
		platforms.setAll('scale.x', 3);
		platforms.setAll('scale.y', 0.5);
		platforms.setAll('body.immovable', true);

		game.camera.follow(playerOne.sprite);
		game.camera.deadzone = new Phaser.Rectangle(screen.centerX - 300, 0, 600, 800);
	},
	update: function(){
		game.physics.arcade.collide(playerOne.sprite, platforms);

		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			playerOne.sprite.body.acceleration.x = playerOne.velocity;
			//turn around when walking
			playerOne.sprite.scale.setTo(1, 1);
			//walk
			playerOne.sprite.animations.play('walk', 10, true);
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			playerOne.sprite.body.acceleration.x = -playerOne.velocity;
			//turn around when walking
			playerOne.sprite.scale.setTo(-1, 1);
			playerOne.sprite.animations.play('walk', 10, true);
		}else{
			//stop animation and set player into first frame
			playerOne.sprite.body.acceleration.x = 0;
			playerOne.sprite.animations.stop();
			playerOne.sprite.frame = 0;
		}


		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)
			&& game.time.now > playerOne.jumpTimer ){
			playerOne.isJumping = true;
		//	playerOne.sprite.y -= playerOne.speed;
			playerOne.sprite.body.velocity.y = -playerOne.jump;
			playerOne.jumpTimer = game.time.now + 1000;
		}
	}
}
