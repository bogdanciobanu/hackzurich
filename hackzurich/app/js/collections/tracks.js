TracksCollection = Backbone.Collection.extend({
  model: TrackModel,
  url: '/api'
});