var //fireball = null,
	fireballs = null,
	nextFire = 0,
	fireballRate = 1000,
	fireballVelocity = 1000;

scenes.fight = function(){};
scenes.fight.prototype = {
	preload: function(){
		game.load.spritesheet('dude', 'assets/spritesheets/dudeSheet.png', 159, 250);
		game.load.image('background', 'assets/backgrounds/background1.png');
		game.load.spritesheet('particles', 'assets/spritesheets/particles.png', 16, 16);
	},
	create: function(){

		//init the game physics. Must be one of the first CREATE functions called
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 750;

		addStateListeners();

		//force the game to fit all scales
		//game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.world.setBounds(0,0,1600, 700);

		//add background
		var background = game.add.sprite(0,0, 'background');

		playerOne = characters.dude;
		//setup our dude
		playerOne.sprite = game.add.sprite(screen.centerX / 2,screen.centerY + (screen.centerY/2), 'dude');

		fireballs = game.add.group();
		fireballs.enableBody = true;
		fireballs.physicsBodyType = Phaser.Physics.ARCADE;
		//we wont need more than 2 fireballs
		fireballs.createMultiple(2,'particles', 1);
		//if this object leaves the screen KILL IT!!
		fireballs.setAll('checkWorldBounds', true);
		fireballs.setAll('outOfBoundsKill', true);
		//center the fireball
		fireballs.setAll('anchor.x', 0.5);
		fireballs.setAll('anchor.y', 0.5);

		//BIG BALLS
		fireballs.setAll('scale.x', 3);
		fireballs.setAll('scale.y', 3);
		//not affected by gravity
		fireballs.setAll('body.allowGravity', false);

		//center him on screen
		playerOne.sprite.anchor.setTo(0.5, 0.5);
		//create an animation out of the dude spritesheet
		playerOne.sprite.animations.add('walk', [0,1,2]);
		playerOne.sprite.animations.add('fireball', [0,4,5,4,0]);
		playerOne.sprite.animations.add('punch', [0,8,9,10,9,8,0]);
		playerOne.sprite.animations.add('kick', [0,12,13,14,15,14,13,12,0]);

		//enable physics on dude
		game.physics.enable(playerOne.sprite);
		playerOne.sprite.body.collideWorldBounds = true;

		game.camera.follow(playerOne.sprite);
		game.camera.deadzone = new Phaser.Rectangle(screen.centerX - 300, 0, 600, 800);

	},
	update: function(){
		game.physics.arcade.collide(playerOne, playerOne.emitter, this.change, null, this);

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

		}else if(playerOne.sprite.animations.currentAnim.name == 'walk'){
			//stop animation and set player into first frame
			playerOne.sprite.animations.stop();
			playerOne.sprite.frame = 0;
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.Q)){
			this.shootFireball();
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.W)){

			playerOne.sprite.animations.play('punch', 12, false);

		}else if(game.input.keyboard.isDown(Phaser.Keyboard.E)){

			playerOne.sprite.animations.play('kick', 12, false);

		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)
			&& playerOne.sprite.body.onFloor()
			&& game.time.now > playerOne.jumpTimer ){
			playerOne.isJumping = true;
			playerOne.sprite.y -= playerOne.speed;
			playerOne.sprite.body.velocity.y = -550;
			playerOne.jumpTimer = game.time.now + 150;
		}
	},
	render: function(){
		//game.debug.text('render FPS: ' + (game.time.fps || '--') , 12, 120, "#00ff00");
	},
	shootFireball: function(){

		if(game.time.now > nextFire){
			var fireballHeight =  playerOne.sprite.y - (playerOne.sprite.height/3);
			nextFire = game.time.now + fireballRate;

			fireball = fireballs.getFirstDead();
			fireball.reset(playerOne.sprite.x + (playerOne.sprite.width/2), fireballHeight);
			game.physics.arcade.moveToXY(fireball, playerOne.sprite.scale.x * (screen.width + fireball.width), fireballHeight, fireballVelocity);

			//Animate player!
			playerOne.sprite.animations.play('fireball', 12, false);
		}

	}
}
