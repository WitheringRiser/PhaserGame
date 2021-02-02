//a state is a scene in a game (main menu, game over, high score states)
demo.state2 = function(){}; //state2 property to our game object that's a function 
demo.state2.prototype = {
	preload: function(){}, //loading images
	create: function(){
		game.stage.backgroundColor = '#0000ff';
		console.log('state2');

		addChangeStateEventListeners();
	}, //setting initial values for everything
	update: function(){} //code run every frame
};