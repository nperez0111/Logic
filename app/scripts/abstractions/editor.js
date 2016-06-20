var Medium = require( 'Medium.js' );
module.exports = function ( el ) {
    return new Medium( {
        element: el,
        mode: Medium.partialMode,
        placeholder: 'it Works',
        autofocus: false
    } )
}
