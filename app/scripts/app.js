'use strict';

var Ractive = require( 'ractive/ractive.min' );
Ractive.DEBUG = /unminified/.test( function () { /*unminified*/ } );
var Editor = require( './views/Editing' ),
    Viewer = require( './views/View' );

window.Router = require( './abstractions/Router' );

Router.route( {
    "Argument/editor": function () {
        return new Editor( {
            el: '.hook'
        } );
    },
    "Argument/view": function () {
        return new Viewer( {
            el: '.hook'
        } );
    }
} );
Router.base( "Argument/editor" );
