'use strict';

var Ractive = require( 'ractive/ractive.runtime' ),
    template = require( './premise.ract' ),
    loadTemplate = require( './../utils/loadTemplate' );

var Premise = Ractive.extend( loadTemplate( template ) );
module.exports = Premise;
