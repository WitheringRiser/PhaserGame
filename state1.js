//a state is a scene in a game (main menu, game over, high score states)

demo.state1 = function(){}; //state1 property to our game object that's a function 
demo.state1.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#ff0000';
		console.log('state1');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};