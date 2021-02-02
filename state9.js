//a state is a scene in a game (main menu, game over, high score states)
demo.state9 = function(){}; //state9 property to our game object that's a function 
demo.state9.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#222222';
		console.log('state9');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};