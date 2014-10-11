HomeView = Backbone.Marionette.ItemView.extend({
	template: 'home',
	el: '#container',
    render: function() {
    	$(this.el).empty();
    	window.headerView.model = new DataModel({'title': 'CarbonLess', 'back': '', 'visible': ''});
    	window.headerView.render();
		$(this.el).append(window.JST[this.template]());
    }
});