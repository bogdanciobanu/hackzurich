ListCollection = Backbone.Collection.extend({
  model: ListItemModel,
  url: 'api'
});