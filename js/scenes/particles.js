var leftEmitter, rightEmitter;

scenes.particles = function(){};
scenes.particles.prototype = {
	preload: function(){
		game.load.spritesheet('particles', 'assets/spritesheets/particles.png', 16, 16);
		//game.load.image('volcano', 'assets/sprites/volcano.png');
	},
	create: function(){
		game.stage.backgroundColor = "#cc6699";
		addStateListeners();
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//SETTING UP THE DEBUG PLUGIN. THIS WILL RUN ON ALL SCENES
		game.debug.font = "24px monospace";
		game.debug.lineHeight = 20;
		if (!game.timing) {
			game.timing = game.plugins.add(Phaser.Plugin.AdvancedTiming);
		}

		//var particlesArr = [];
		//particlesArr[0] = game.add.sprite(16, 16, 'particles', 0);
		//particlesArr[1] = game.add.sprite(16, 16, 'particles', 1);

		//var particleCount = 2;
		//var particleArray = Array.apply(null, {length: particleCount}).map(Number.call, Number)

		leftEmitter = game.add.emitter(0, screen.centerY, 500);
		rightEmitter = game.add.emitter(screen.width, screen.centerY, 500);

		leftEmitter.bounce.setTo(0.5, 0.5);
		leftEmitter.maxParticleSpeed.set(600,-50);
		//leftEmitter.setXSpeed(400, 600);
	    //leftEmitter.setYSpeed(-50, 50);
		leftEmitter.makeParticles('particles', 0, 1000, false, true);


	    rightEmitter.bounce.setTo(0.5, 0.5);
		//rightEmitter.maxParticleSpeed.set(-600,-50);
	    rightEmitter.setXSpeed(-400, -600);
	    rightEmitter.setYSpeed(-50, 50);
	    rightEmitter.makeParticles('particles', 1, 1000, false, true);


		// explode, lifespan, frequency, quantity
		leftEmitter.start(false, 3000, 50);
		rightEmitter.start(false, 3000, 50);


		//Turn emitters on and off
/*
		game.time.events.add(2000, function(){
			emitter.start(false, 5000, 20);
			game.time.events.loop(500, function(){
				if(emitter.on){
					emitter.on = false;
				}else{
					emitter.on = true;
				}
			});
		});
*/
	},
	update: function(){
		game.physics.arcade.collide(leftEmitter, rightEmitter, this.change, null, this);
	},
	change: function(a, b) {
		a.body.velocity.x = a.body.velocity.x / 2;//game.rnd.integerInRange(100, 200);
		b.body.velocity.x = b.body.velocity.x / 2;//game.rnd.integerInRange(100, 200);
	    //a.frame = 3;
	    //b.frame = 3;

	}
}
