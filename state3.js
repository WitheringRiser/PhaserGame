//a state is a scene in a game (main menu, game over, high score states)
demo.state3 = function(){}; //state3 property to our game object that's a function 
demo.state3.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#ff00ff';
		console.log('state3');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};