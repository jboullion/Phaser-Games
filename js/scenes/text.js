//http://saganipsum.com/?p=1
var sagan = "Hypatia venture great turbulent clouds citizens of distant epochs two ghostly white figures in coveralls and helmets are soflty dancing. Star stuff harvesting star light! Across the centuries ship of the imagination. Another world birth finite but unbounded rings of Uranus! Orion's sword hydrogen atoms courage of our questions hearts of the stars permanence of the stars Drake Equation Apollonius of Perga worldlets, brain is the seed of intelligence the only home we've ever known radio telescope light years Vangelis descended from astronomers, light years and billions upon billions upon billions upon billions upon billions upon billions upon billions.";

//http://hodoripsum.com/
var hodor = "Hodor, hodor; hodor hodor hodor! Hodor. Hodor hodor - hodor - hodor hodor HODOR hodor, hodor hodor?! Hodor hodor - hodor, hodor. Hodor hodor hodor hodor! Hodor! Hodor hodor, hodor; hodor hodor... Hodor hodor hodor; hodor hodor, hodor, hodor hodor. Hodor hodor - hodor hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor; hodor hodor?";

//http://slipsum.com/
var samipsum = "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.";

WebFontConfig = {
	google: { families: ['Chewy','Gochi Hand','Press Start 2P'] }
}

scenes.text = function(){};
scenes.text.prototype = {
	preload: function(){
		game.load.image('arrow', 'assets/sprites/arrow.png');
	},
	create: function(){
		game.stage.backgroundColor = "#111111";
		addStateListeners();
		game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		this.spellOutText(50, 100, screen.width - 100, sagan, 20, 20, '#FFF', 'Press Start 2P');
		this.spellOutText(50, 300, (screen.width - 100) * 0.8, hodor, 30, 50, '#FFF', 'Gochi Hand');
		this.spellOutText(50, 500, (screen.width - 100) * 0.6, samipsum, 40, 100, '#FFF', 'Chewy');

	},
	update: function(){

	},
	spellOutText: function(x, y, width, text, fontSize, speed, fill, font) {
		//this is the sentence that is printing on the screen
		var sentence = game.add.text(x,y,'',{fontSize: fontSize + 'px', fill: fill, font: font });

		//this is an invisible line that helps us determine when to wrap our text based on it's current width
		//the first 2 arguments are offsetting this text so it will wrap at the right time
		var currentLine = game.add.text(fontSize,fontSize,'',{fontSize: fontSize + 'px', font: font });
		currentLine.alpha = 0;

		//call the addChar method at a certain speed
		var loop = game.time.events.loop(speed, addChar);

		//index of the cursor / current letter
		var index = 0;

		//add 1 letter from a line of
		function addChar(){
			//next character
			sentence.text += text[index];
			currentLine.text += text[index];

			//new line
			if(currentLine.width  > width && text[index] == ' ') {
				sentence.text += '\n';
				currentLine.text = '';
			}

			//stop loop
			if(index >= text.length - 1){
				game.time.events.remove(loop);
			}
			index++;
		}
	}
}
