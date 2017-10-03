var game = new Phaser.Game(1440,900,Phaser.AUTO);

game.state.add('menu', scenes.menu);
game.state.add('characterSelect', scenes.characterSelect);
game.state.add('levelSelect', scenes.levelSelect);
game.state.add('fight', scenes.fight);
game.state.add('idle', scenes.idle);
game.state.add('load', scenes.load);

game.state.start('menu');
