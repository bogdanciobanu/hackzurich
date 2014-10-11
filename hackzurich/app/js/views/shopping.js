ShoppingView = Backbone.Marionette.ItemView.extend({
	template: 'shopping',
	el: '#container',
    render: function() {
    	$(this.el).empty();
    	console.log('hi');
    	window.headerView.model = new DataModel({'title': 'Shopping list', 'back': '#home', 'visible': 'visible'});
    	window.headerView.render();
    	console.log(window.JST[this.template]());
		// $(this.el).append(window.JST[this.template](this.model.toJSON()));
		$(this.el).append(window.JST[this.template]());
    }
});