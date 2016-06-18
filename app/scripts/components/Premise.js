'use strict';

var Ractive = require( 'ractive/ractive.runtime' ),
    template = require( './premise.ract' ),
    loadTemplate = require( './../utils/loadTemplate' );

var Premise = Ractive.extend( Object.assign( {
    oncomplete: function () {
        console.log( 'I be Made' );
        this.on( 'test', ( woa ) => {
            this.set( 'title', 'button' )
        } )
    }
}, loadTemplate( template ) ) );
module.exports = Premise;
