var MainController = Marionette.Controller.extend({
	initialize: function() {

		window.mainView = new MainView({});

		window.headerView = new HeaderView({});
	},
	home: function() {
		console.log('home route');
		window.tracks.fetchData();
	},
	lists: function(id) {

	},
	products: function(id) {

	},
	friends: function(id) {

	},
});