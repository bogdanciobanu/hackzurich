this["JST"] = this["JST"] || {};

this["JST"]["_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="row-fluid header">\n\t<a href="' +
((__t = ( back )) == null ? '' : __t) +
'" class="back ' +
((__t = ( visible )) == null ? '' : __t) +
'"><span class="fa fa-chevron-left"></span></a>\n    <h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n</header>';

}
return __p
};