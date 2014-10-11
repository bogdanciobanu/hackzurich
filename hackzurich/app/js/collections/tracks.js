TracksCollection = Backbone.Collection.extend({
  model: TrackModel,
  // url: 'http://api.autoidlabs.ch/brands?search=',
  url: 'data/brands.json',
  fetchData: function() {
  	var self = this;
  	this.fetch({success: function (model, data) {
	  	console.log(data[0]['id']);

	  	var sum = 0;
		for (i in data) {
			sum += parseInt(data[i]['id']);
		}

		window.app.set({'footprint-total': sum});

		// console.log(window.app.get('footprint-total'));
  	}});
  }
});