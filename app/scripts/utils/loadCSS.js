var loadCss = require( 'insert-css' );
module.exports = function ( template ) {
    loadCss( template.css, {
        prepend: true
    } );
}
