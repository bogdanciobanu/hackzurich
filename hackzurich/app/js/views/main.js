MainView = Backbone.Marionette.ItemView.extend({
	template: 'main',
	el: 'body',
    render: function() {
		$(this.el).append(window.JST[this.template]());
    }
});