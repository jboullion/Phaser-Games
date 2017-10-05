var game = new Phaser.Game(screen.width,screen.height,Phaser.AUTO);

game.state.add('fight', scenes.fight);
game.state.add('tilemap', scenes.tilemap);
game.state.add('bullets', scenes.bullets);
game.state.add('scenefour', scenes.scenefour);
game.state.add('scenefive', scenes.scenefive);
game.state.add('scenesix', scenes.scenesix);


scenes.states[FIGHTKEY] ='fight';
scenes.states[TILEMAPKEY] ='tilemap';
scenes.states[BULLETKEY] ='bullets';
scenes.states[SCENEFOUR] ='scenefour';
scenes.states[SCENEFIVE] ='scenefive';
scenes.states[SCENESIX] ='scenesix';

game.state.start('bullets');
