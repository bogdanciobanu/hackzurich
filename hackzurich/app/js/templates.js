this["JST"] = this["JST"] || {};

this["JST"]["_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="row-fluid header">\n\t<div class="col-xs-12">\n\t\t<a href="' +
((__t = ( back )) == null ? '' : __t) +
'" class="back ' +
((__t = ( visible )) == null ? '' : __t) +
'"><span class="fa fa-chevron-left"></span></a>\n\t    <h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n    </div>\n</header>';

}
return __p
};

this["JST"]["home"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <section class="row-fluid track">\n\n\t\t<div class="col-xs-12">\n\t\t<h2>track</h2>\n\t\t\t<div class="row-fluid">\n\t\t\t\t<div class="col-xs-6 state">\n\t\t\t\t\t<h3>current state</h3>\n\t\t\t\t\t\n\t\t\t\t\t<span class="footprint">' +
((__t = ( footprint_total )) == null ? '' : __t) +
' Kg CO<sub>2</sub></span>\n\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-6 trend"><h3>your trend</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="arrow arrow-white">\n\t\t\t<i class="fa fa-chevron-right"></i>\n\t\t\t</div>\n\t\n\t\t</div>\n    </section>\n\n    <section class="row-fluid shopping">\n      <div class="col-xs-12">\n\t      <h2>go shopping</h2>\n\t\t\t\t\n\t\t\t\t<ul class="products">\n\t\t\t\t\t<li class="product"><img src="" alt=""></li>\n\t\t\t\t\t<li class="product"><img src="" alt=""></li>\n\t\t\t\t\t<li class="product"><img src="" alt=""></li>\n\t\t\t\t</ul>\n\n\t\t\t\t<h3>new product recommendations for you</h3>\n\n\t\t\t\t<div class="arrow arrow-white">\n\t\t\t\t<i class="fa fa-chevron-right"></i>\n\t      </div>\n      </div>\n    </section>\n\n\n    <section class="row-fluid ranking">\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<h2>Your Rankings</h2>\n\t\t\t\t<div class="arrow arrow-green">\n\t\t\t\t<i class="fa fa-chevron-right"></i>\n\t\t\t\t</div>\n      </div>\n    </section>';

}
return __p
};

this["JST"]["shopping-next"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<input type="text" placeholder="Item Name..." name="item-next" id="item-next" class="form-control" />';

}
return __p
};

this["JST"]["shopping"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Add Items</h2>\n<form id="list">\n\t<input type="text" placeholder="Item Name..." name="item" id="item" class="form-control" />\n</form>';

}
return __p
};