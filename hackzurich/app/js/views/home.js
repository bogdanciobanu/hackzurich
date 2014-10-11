HomeView = Backbone.Marionette.ItemView.extend({
	template: 'home',
	el: '#container',
    render: function() {
    	console.log('render homie!!!');
    	window.headerView.model = new Data({'title': 'Foodprint', 'back': '', 'visible': ''});
    	console.log(window.headerView.model.toJSON());
    	window.headerView.render();
		$(this.el).append(window.JST[this.template]());
    }
});