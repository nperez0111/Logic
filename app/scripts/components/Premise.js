'use strict';

var Ractive = require( 'ractive/ractive.runtime' );

var Premise = Ractive.extend( {
    template: require( './premise.ract' ).template,
    isolated: true,
    data: {}
} );

module.exports = Premise;
