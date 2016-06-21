'use strict';

var Ractive = require( 'ractive/ractive.min' );
Ractive.DEBUG = /unminified/.test( function () { /*unminified*/ } );
var GraphEditor = require( './views/GraphEditor' ),
	Graph=require('./views/Graph');
	
window.Router = require( './utils/Router' );

Router.route( {
    "Graph/editor": function () {
        return new GraphEditor( {
            el: '.hook'
        } );
    },
    "Graph/view":function(){
    	return new Graph( {
    		el: '.hook'
    	} );
    }
} );
Router.base( "Graph/editor" );
