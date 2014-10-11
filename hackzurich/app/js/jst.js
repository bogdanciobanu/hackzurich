window.JST = this['JST'];

Backbone.Marionette.Renderer.render = function(template, data){
  if (!window.JST[template]) throw "Template '" + template + "' not found!";
  return window.JST[template](data);
}