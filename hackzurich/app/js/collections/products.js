ProductsCollection = Backbone.Collection.extend({
  model: ProductModel,
  url: 'api'
});