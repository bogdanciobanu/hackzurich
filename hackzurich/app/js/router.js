var Router = Backbone.Marionette.AppRouter.extend({
	initialize: function() {
		window.mainController = new MainController();
		this.controller = window.mainController;

	},
	appRoutes: {
		'home': 'home',
		'shopping': 'shopping',
		'shopping/:id': 'shopping',
		'tracks': 'tracks',
		'tracks/:id': 'tracks',
		'rankings/': 'rankings',
		'rankings/:id': 'rankings',
		'default': 'home'
	},
	// onRoute: function(name, path, args) {
	// }
});