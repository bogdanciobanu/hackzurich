ShoppingView = Backbone.Marionette.ItemView.extend({
	template: 'shopping',
	el: '#container',
	events: {
		'click #button-add': 'addItem'
	},
	addItem: function() {
		console.log($('#input-item').val());
		window.list.add({'name': $('#input-item').val()});
	},
    render: function() {
    	$(this.el).empty();
    	console.log('hi');
    	window.list.add({'name': 'Test'});
    	window.headerView.model = new DataModel({'title': 'Shopping list', 'back': '#home', 'visible': 'visible'});
    	window.headerView.render();
    	console.log(window.JST[this.template]());
    	console.log(window.list);
    	window.jsonData = {'recommendation': window.recommendation.toJSON(), 'list': window.list.toJSON()};
    	// console.log(jsonData);
		// $(this.el).append(window.JST[this.template](this.model.toJSON()));
		$(this.el).append(window.JST[this.template](window.jsonData));
    }
});