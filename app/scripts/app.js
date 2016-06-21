'use strict';

var Ractive = require( 'ractive/ractive.min' );
Ractive.DEBUG = /unminified/.test( function () { /*unminified*/ } );
var GraphEditor = require( './views/GraphEditor' );
window.Router = require( './utils/Router' );
Router.route( {
    "Graph/editor": function () {
        return new GraphEditor( {
            el: '.hook'
        } );
    }
} );
Router.base( "Graph/editor" );
