'use strict';

var Ractive = require( 'ractive/ractive.min' );
Ractive.DEBUG = /unminified/.test( function () { /*unminified*/ } );
var Editor = require( './views/Editing' ),
    Viewer = require( './views/View' );

window.Router = require( './abstractions/Router' );

Router.route( {
    "Graph/editor": function () {
        return new Editor( {
            el: '.hook'
        } );
    },
    "Graph/view": function () {
        return new Viewer( {
            el: '.hook'
        } );
    }
} );
Router.base( "Graph/editor" );
