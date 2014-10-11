HeaderView = Backbone.Marionette.ItemView.extend({
	template: '_header',
	el: '#container',
    render: function() {
    	console.log('render header');
    	// console.log(this.model.toJSON());
		// $(this.el).append(window.JST[this.template](this.model.toJSON()));
    }
});