//a state is a scene in a game (main menu, game over, high score states)
demo.state7 = function(){}; //state7 property to our game object that's a function 
demo.state7.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#666666';
		console.log('state7');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};