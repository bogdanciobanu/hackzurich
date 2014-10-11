/**************************************************
* Initialize App
**************************************************/

MyApp = new Backbone.Marionette.Application();

/**************************************************
* Initialize App Model   					  
**************************************************/

MyApp.addInitializer(function(options){

	window.router = new Router({
	});
	MyApp.vent.trigger('routing:started');
	Backbone.history.start();

	if(Backbone.history.fragment == '') {

		Backbone.history.navigate('home', true);

	}


});

$(document).ready(function() {

	window.app = new AppModel();

	window.list = new ListCollection();

	window.tracks = new TracksCollection();

	window.recommendation = new RecommendationModel();

	window.tracks.fetch({success: function (model, data) {

		// Compute the footprint, before the app is up
		window.tracks.computeFootprint(data);

		window.recommendation.fetch({success: function (model, data) {

			MyApp.start();

		}});

	}});

});