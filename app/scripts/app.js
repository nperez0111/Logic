'use strict';

require( 'ractive/ractive.runtime' );
window.b = require( './views/Graph' );
window.Router = require( './utils/Router' );
Router.route( {
    Main: function () {
        return new b( {
            el: '.hook'
        } );
    }
} );
Router.base( "Main" );
