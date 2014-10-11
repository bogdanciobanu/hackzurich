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

});

$(document).ready(function() {

	MyApp.start();

});