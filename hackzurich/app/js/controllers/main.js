var MainController = Marionette.Controller.extend({
	initialize: function() {

		window.mainView = new MainView({});

		window.headerView = new HeaderView({});

	},
	home: function() {
		console.log('home route');
		var homeView = new HomeView({});
		homeView.render();
	},
	shopping: function(id) {
		console.log('shopping route');
		var shoppingView = new ShoppingView({});
		shoppingView.render();
	},
	tracks: function(id) {

	},
	rankings: function(id) {

	}
});