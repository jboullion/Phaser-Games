var DEBUG = 1;

var scenes = {},
	MENUKEY = Phaser.Keyboard.ONE,
	CHARKEY = Phaser.Keyboard.TWO,
	LVLKEY = Phaser.Keyboard.THREE,
	FIGHTKEY = Phaser.Keyboard.FOUR,
	IDLEKEY = Phaser.Keyboard.FIVE;

scenes.states = [];
scenes.states[MENUKEY] ='menu';
scenes.states[CHARKEY] ='characterSelect';
scenes.states[LVLKEY] ='levelSelect';
scenes.states[FIGHTKEY] ='fight';
scenes.states[IDLEKEY] ='idle';



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
