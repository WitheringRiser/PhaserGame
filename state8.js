//a state is a scene in a game (main menu, game over, high score states)
demo.state8 = function(){}; //state8 property to our game object that's a function 
demo.state8.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '444444';
		console.log('state8');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};