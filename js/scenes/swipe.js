var start = {},
	end = {},
	arrow = null,
	direction = 0,
	leeway = 10;

scenes.swipe = function(){};
scenes.swipe.prototype = {
	preload: function(){
		game.load.image('arrow', 'assets/sprites/arrow.png');
	},
	create: function(){
		game.stage.backgroundColor = "#113399";
		addStateListeners();
		game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		arrow = game.add.sprite(screen.centerX,screen.centerY, 'arrow');
		arrow.anchor.setTo(0.5,0.5);

		game.input.onDown.add(this.startSwipe);
		game.input.onUp.add(this.getSwipeDirection);


	},
	update: function(){

	},
	change: function(a, b) {

	},
	startSwipe: function(){
		start.x = game.input.x;
		start.y = game.input.y;
	},
	getSwipeDirection: function(){
		end.x = game.input.x;
		end.y = game.input.y;

		//they didn't move far enough
		if(Math.abs(end.x - start.x) < leeway
	 	&& Math.abs(end.y - start.y) < leeway){
			//console.log('leeway');
			return false;
		}

		direction = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
/*
		if(Math.abs(end.y - start.y) <  Math.abs(end.x - start.x) ){
			//console.log('horizontal');
			if(end.x > start.x){
				//right
				direction = 0;
			}else{
				//left
				direction = 180;
			}

		}else{
			//console.log('vertical');
			if(end.y > start.y){
				//up
				direction = 90;
			}else{
				//down
				direction = 270;
			}
		}
*/
		arrow.angle = direction;
		console.log(arrow.angle);
	}
}
