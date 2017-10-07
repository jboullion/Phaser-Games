var highScoreText = [],
	highScores = [10,9,8,7,6,5,4,3,2,1],
	database;


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCn9Sgvbtkw9JleCMdUc9kwvXdGH1AQBmg",
  authDomain: "phasertutorials.firebaseapp.com",
  databaseURL: "https://phasertutorials.firebaseio.com",
  projectId: "phasertutorials",
  storageBucket: "phasertutorials.appspot.com",
  messagingSenderId: "964660468476"
};

firebase.initializeApp(config);;

scenes.highscore = function(){};
scenes.highscore.prototype = {
	preload: function(){

	},
	create: function(){
		game.stage.backgroundColor = "#eeccdd";
		addStateListeners();
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		var sceneDescription = "Connect to Firebase database and update the highscore whenever \n the database is updated.";
		game.add.text( 50,25, sceneDescription,{fontSize: '30px', fill: '#000' });

		database = firebase.database();
		var databaseReference = database.ref('highscores');

		/*
		//Change the high scores
		var score = 100;
		for(var i = 0; i < highScores.length; i++){
			score -= getRandomInt(5,10);
			highScores[i] = score;
		}
		database.ref('highscores').set({
		    highscores: highScores
		  });
		*/
		for(var i = 1; i < 10; i++){
			//Display the numbers 1 through 10 and make sure the have an anchor that draw them starting from the right
			game.add.text(500, 100 + (i * 50), i+'. ', {fontSize: '40px'}).anchor.setTo(1,0);
		}

		for(var i = 0; i < 10; i++){
			//Display the numbers 1 through 10 and make sure the have an anchor that draw them starting from the right
			highScoreText[i] = game.add.text(500, 100 + ((i+1) * 50), highScores[i], {fontSize: '40px'});
		}

		//give a reference to our states updateHighScores function
		var updateText = this.updateHighscores;

		//watch our firebase database for any updates
		databaseReference.on('value', function(snapshot){
			var newscores = snapshot.val();
			updateText(newscores.highscores);
		})


	},
	updateHighscores: function(hs){

		for(var i = 0; i < 10; i++){
			//Display the numbers 1 through 10 and make sure the have an anchor that draw them starting from the right
			//game.add.text(500, 20 + ((i+1) * 50), highScores[i], {fontSize: '40px'});

			highScoreText[i].text = hs[i];
		}
	}
}
