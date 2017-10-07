var DEBUG = 1;

//setup screen
var screen = {};
screen.width = 1200;
screen.height = 800;
screen.centerX = screen.width / 2;
screen.centerY = screen.height / 2;

//setup scenes
var scenes = {},
	FIGHTKEY = Phaser.Keyboard.ONE,
	TILEMAPKEY = Phaser.Keyboard.TWO;
	BULLETKEY = Phaser.Keyboard.THREE;
	BUTTONKEY = Phaser.Keyboard.FOUR,
	TWEENKEY = Phaser.Keyboard.FIVE,
	PLATFORMKEY = Phaser.Keyboard.SIX,
	PARTICLEKEY = Phaser.Keyboard.SEVEN,
	SWIPEKEY = Phaser.Keyboard.EIGHT;

scenes.states = [];
scenes.states[FIGHTKEY] ='fight';
scenes.states[TILEMAPKEY] ='tilemap';
scenes.states[BULLETKEY] ='bullets';
scenes.states[BUTTONKEY] ='buttons';
scenes.states[TWEENKEY] ='tweens';
scenes.states[PLATFORMKEY] ='platforms';
scenes.states[PARTICLEKEY] ='particles';
scenes.states[SWIPEKEY] ='swipe';

//setup characters
var characters = {};
characters.dude = {};
characters.dude.sprite = null;
characters.dude.speed = 6;
characters.dude.isJumping = false;
characters.dude.jumpTimer = 0;
characters.dude.tilemap = 300;
characters.dude.velocity = 350;

var playerOne = null;

var terrain = {};
/**
 * Use for debugging information
 */
function debugLog(data){
    if(DEBUG !== 1) return false;

	console.log(data);
}

/**
 * Setup the state listeners to move between the states on keypress
 */
function addStateListeners(){
	if(DEBUG !== 1) return false;

	for(var s in scenes.states){
		addKeyCallback(s, changeState, s);
	}
}

/**
 * Change the game state
 */
function changeState(event, stateNum){
	debugLog('Change State: '+scenes.states[stateNum]);
	game.state.start(scenes.states[stateNum]);
}

/**
 * Helper function to take action on key press
 */
function addKeyCallback(key, fn, args){
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}



function getRandomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
