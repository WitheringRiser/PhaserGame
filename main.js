var game = new Phaser.Game(600, 400, Phaser.AUTO); //creating a Phaser game object
game.state.add('state0', demo.state0); //setting a property of this game using an object method
game.state.add('state1', demo.state1);
game.state.add('state2', demo.state2);
game.state.add('state3', demo.state3);
game.state.add('state4', demo.state4);
game.state.add('state5', demo.state5);
game.state.add('state6', demo.state6);
game.state.add('state7', demo.state7);
game.state.add('state8', demo.state8);
game.state.add('state9', demo.state9);
game.state.start('state0'); //game starts at state 1 