var loadCss = require( './loadCss' );
var pick = require( './../ractives/Objects' ).pick;
module.exports = function ( template ) {
    loadCss( template );
    return Object.assign( {
        template: template.template
    }, pick( template, Object.keys( template ).filter( cur => {
        return cur !== 'css' && cur !== 'template'
    } ) ) );
}
