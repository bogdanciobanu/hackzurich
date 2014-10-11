/**************************************************
* Initialize App
**************************************************/

MyApp = new Backbone.Marionette.Application();

/**************************************************
* Initialize App Model   					  
**************************************************/

MyApp.addInitializer(function(options){

	window.app = new AppModel();

	window.router = new Router({
	});
	MyApp.vent.trigger('routing:started');
	Backbone.history.start();

	Backbone.history.navigate('home', true);

});

$(document).ready(function() {

	window.tracks = new TracksCollection();

	window.list = new ListCollection();

	MyApp.start();

});