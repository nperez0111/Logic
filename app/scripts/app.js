'use strict';

var Ractive = require( 'ractive/ractive.runtime' );
Ractive.DEBUG = /unminified/.test( function () { /*unminified*/ } );
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
