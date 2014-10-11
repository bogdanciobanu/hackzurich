RankingsView = Backbone.Marionette.ItemView.extend({
	template: 'rankings',
	el: 'body',
    render: function() {
		// $(this.el).append(window.JST[this.template]());
    }
});