TracksCollection = Backbone.Collection.extend({
  model: TrackModel,
  // url: 'http://api.autoidlabs.ch/brands?search=',
  url: 'data/brands.json',
  computeFootprint: function(data) {

	  var sum = 0;
		for (i in data) {
			sum += parseInt(data[i]['id']);
		}

  	window.app.set({'footprint_total': sum});
  }
});