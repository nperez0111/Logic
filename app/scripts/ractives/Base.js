window.Ractive = require( 'ractive/ractive.min' );

module.exports = Ractive.extend( [ require( './Networking.js' ), require( './Arrays.js' ), require( './Utilities.js' ), require( './Objects.js' ), require( './Logging.js' ) ].reduce( ( first, next ) => {
    return Object.assign( first, next );
}, {} ) );
