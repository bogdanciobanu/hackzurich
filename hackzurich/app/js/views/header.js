HeaderView = Backbone.Marionette.ItemView.extend({
	template: '_header',
	el: '#container',
    render: function() {
		$(this.el).append(window.JST[this.template](this.model.toJSON()));
    }
});