var game = new Phaser.Game(screen.width,screen.height,Phaser.AUTO);

game.state.add(scenes.states[FIGHTKEY], scenes.fight);
game.state.add(scenes.states[TILEMAPKEY], scenes.tilemap);
game.state.add(scenes.states[BULLETKEY], scenes.bullets);
game.state.add(scenes.states[BUTTONKEY], scenes.buttons);
game.state.add(scenes.states[TWEENKEY], scenes.tweens);
game.state.add(scenes.states[PLATFORMKEY], scenes.platforms);

game.state.start(scenes.states[PLATFORMKEY]);
