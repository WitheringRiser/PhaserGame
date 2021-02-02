//a state is a scene in a game (main menu, game over, high score states)
demo.state6 = function(){}; //state6 property to our game object that's a function 
demo.state6.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#888888';
		console.log('state6');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};