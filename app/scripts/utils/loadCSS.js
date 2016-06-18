module.exports = function ( template ) {
    var css = document.createElement( "style" );
    css.type = "text/css";
    css.innerHTML = template.css;
    document.body.appendChild( css );
}
