//a state is a scene in a game (main menu, game over, high score states)
var demo = {};
demo.state0 = function(){}; //state0 property to our game object that's a function 
demo.state0.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#00ff00';
		console.log('state0');
		//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};

function changeState(i, stateNum) {
	game.state.start('state' + stateNum)
};

function addKeyCallback(key, fn, args){
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};

function addChangeStateEventListeners(){
	addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
	addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
	addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
	addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
	addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
	addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
	addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
	addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
	addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
	addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}