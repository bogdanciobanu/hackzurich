ShoppingView = Backbone.Marionette.ItemView.extend({
	template: 'shopping',
	el: 'body',
    render: function() {
		// $(this.el).append(window.JST[this.template]());
    }
});