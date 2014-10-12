TracksCollection = Backbone.Collection.extend({
  model: TrackModel,
  // url: 'http://api.autoidlabs.ch/brands?search=',
  url: 'http://127.0.0.1:8000/api/receipt/?format=json&client_id=115883',
  computeFootprint: function(data) {

	  var sum = 0;
		for (i in data) {
			sum += parseInt(data[i]['co2']);
		}

  	window.app.set({'footprint_total': sum});
  }
});