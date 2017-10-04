scenes.load = function(){};
scenes.load.prototype = {
	preload: function(){
		//LOAD tilemap and assets
		game.load.tilemap('grassmap', 'assets/tilemaps/grassmap.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'assets/spritesheets/tiles.png');
		game.load.image('colliders', 'assets/spritesheets/colliders.png');
		game.load.image('large_colliders', 'assets/spritesheets/large_colliders.png');

		game.load.spritesheet('dude', 'assets/spritesheets/dudeSheet.png', 159, 250);

	},
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		addStateListeners();

		game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.world.setBounds(0,0,screen.width, screen.height);

		//LOAD tilemap
		var map = game.add.tilemap('grassmap');
		map.addTilesetImage('tiles');
		map.addTilesetImage('colliders');
		map.addTilesetImage('large_colliders');


		//NOTE: the order of layers matters
		terrain.grass = map.createLayer('grass');
		terrain.dirt = map.createLayer('dirt');
		terrain.road = map.createLayer('road');
		terrain.rocks = map.createLayer('rocks');

		map.setCollisionBetween(11,22, true, 'rocks');


		playerOne = characters.dude;
		//setup our dude
		playerOne.sprite = game.add.sprite(screen.centerX,screen.centerY, 'dude');
		//center him on screen
		playerOne.sprite.anchor.setTo(0.5, 0.5);
		playerOne.sprite.scale.setTo(0.5, 0.5);
		//create an animation out of the dude spritesheet
		playerOne.sprite.animations.add('walk', [0,1,2]);

		//enable physics on dude
		game.physics.enable(playerOne.sprite);
		playerOne.sprite.body.collideWorldBounds = true;

		game.camera.follow(playerOne.sprite);
		game.camera.deadzone = new Phaser.Rectangle(screen.centerX - 100, 0, 200, 200);

	},
	update: function(){
		game.physics.arcade.collide(playerOne.sprite, terrain.rocks, function(){
			debugLog('Hitting Rock');
		});

		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			//playerOne.sprite.x += playerOne.speed;
			playerOne.sprite.body.velocity.x = playerOne.tilespeed;
			//turn around when walking
			playerOne.sprite.scale.setTo(0.5, 0.5);
			//walk
			playerOne.sprite.animations.play('walk', 12, true);
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			playerOne.sprite.body.velocity.x = -playerOne.tilespeed;
			//turn around when walking
			playerOne.sprite.scale.setTo(-0.5, 0.5);
			playerOne.sprite.animations.play('walk', 12, true);
		}else{
			playerOne.sprite.body.velocity.x = 0;
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			playerOne.sprite.body.velocity.y = -playerOne.tilespeed;
			//turn around when walking
			playerOne.sprite.scale.setTo(0.5, 0.5);
			//walk
			playerOne.sprite.animations.play('walk', 12, true);
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			playerOne.sprite.body.velocity.y = playerOne.tilespeed;
			//turn around when walking
			playerOne.sprite.scale.setTo(-0.5, 0.5);
			playerOne.sprite.animations.play('walk', 12, true);
		}else{
			playerOne.sprite.body.velocity.y = 0;
		}

		if(! game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)
 		 && ! game.input.keyboard.isDown(Phaser.Keyboard.LEFT)
	 	 && ! game.input.keyboard.isDown(Phaser.Keyboard.UP)
  		 && ! game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			 playerOne.sprite.body.velocity.y = 0;
			 playerOne.sprite.body.velocity.x = 0;
			 //stop animation and set player into first frame
			 playerOne.sprite.animations.stop();
			 playerOne.sprite.frame = 0;
		 }

	}
}
