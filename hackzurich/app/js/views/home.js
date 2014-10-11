HomeView = Backbone.Marionette.ItemView.extend({
	template: 'home',
	el: '#container',
    render: function() {
    	$(this.el).empty();
    	window.headerView.model = new DataModel({'title': 'Carbon<span class="h1-slim">Less</span>', 'back': '', 'visible': ''});
    	window.headerView.render();
    	console.log(window.app);
    	var jsonData = {};
    	$.extend(jsonData, window.recommendation.toJSON(), window.app.toJSON());
    	console.log(jsonData);
		$(this.el).append(window.JST[this.template]({data: jsonData}));
    }
});