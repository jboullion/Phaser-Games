var game = new Phaser.Game(screen.width,screen.height,Phaser.AUTO);

game.state.add(scenes.states[FIGHTKEY], scenes.fight);
game.state.add(scenes.states[TILEMAPKEY], scenes.tilemap);
game.state.add(scenes.states[BULLETKEY], scenes.bullets);
game.state.add(scenes.states[BUTTONKEY], scenes.buttons);
game.state.add(scenes.states[TWEENKEY], scenes.tweens);
game.state.add(scenes.states[PLATFORMKEY], scenes.platforms);
game.state.add(scenes.states[PARTICLEKEY], scenes.particles);
game.state.add(scenes.states[SWIPEKEY], scenes.swipe);
game.state.add(scenes.states[TEXTKEY], scenes.text);
game.state.add(scenes.states[SCOREKEY], scenes.highscore);

game.state.start(scenes.states[SCOREKEY]);
