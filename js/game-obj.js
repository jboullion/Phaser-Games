var DEBUG = 1;

//setup screen
var screen = {};
screen.width = 1200;
screen.height = 800;
screen.centerX = screen.width / 2;
screen.centerY = screen.height / 2;

//setup scenes
var scenes = {},
	MENUKEY = Phaser.Keyboard.ONE,
	LOADKEY = Phaser.Keyboard.TWO;
	LVLKEY = Phaser.Keyboard.THREE,
	FIGHTKEY = Phaser.Keyboard.FOUR,
	IDLEKEY = Phaser.Keyboard.FIVE,
	CHARKEY = Phaser.Keyboard.SIX,

scenes.states = [];
scenes.states[MENUKEY] ='menu';
scenes.states[CHARKEY] ='characterSelect';
scenes.states[LVLKEY] ='levelSelect';
scenes.states[FIGHTKEY] ='fight';
scenes.states[IDLEKEY] ='idle';
scenes.states[LOADKEY] ='load';

//setup characters
var characters = {};
characters.dude = {};
characters.dude.sprite = null;
characters.dude.speed = 6;
characters.dude.isJumping = false;
characters.dude.jumpTimer = 0;
characters.dude.tilespeed = 500;

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

/**
 * Setup the state listeners to move between the states
 */
function addStateListeners(){
	if(DEBUG !== 1) return false;

	for(var s in scenes.states){
		addKeyCallback(s, changeState, s);
	}
}
