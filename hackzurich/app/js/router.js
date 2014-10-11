var Router = Backbone.Marionette.AppRouter.extend({
	initialize: function() {
		window.mainController = new MainController();
		this.controller = window.mainController;

	},
	appRoutes: {
		'home': 'home',
		'lists': 'lists',
		'lists/:id': 'lists',
		'products': 'products',
		'products/:id': 'products',
		'friends/': 'friends',
		'friends/:id': 'friends',
		'default': 'home'
	},
	// onRoute: function(name, path, args) {
	// }
});