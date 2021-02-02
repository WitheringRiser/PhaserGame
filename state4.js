//a state is a scene in a game (main menu, game over, high score states)
demo.state4 = function(){}; //state4 property to our game object that's a function 
demo.state4.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#ffff00';
		console.log('state4');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};