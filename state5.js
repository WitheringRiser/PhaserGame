//a state is a scene in a game (main menu, game over, high score states)
demo.state5 = function(){}; //state5 property to our game object that's a function 
demo.state5.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#00ffff';
		console.log('state5');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};