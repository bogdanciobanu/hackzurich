HomeView = Backbone.Marionette.ItemView.extend({
	template: 'home',
	el: '#container',
    render: function() {
    	$(this.el).empty();
    	window.headerView.model = new DataModel({'title': 'Carbon<span class="h1-slim">Less</span>', 'back': '', 'visible': ''});
    	window.headerView.render();
    	var jsonData = {};
    	$.extend(jsonData, window.recommendation.toJSON(), window.app.toJSON());
		$(this.el).append(window.JST[this.template]({data: jsonData}));
    }
});