'use strict';

var Base = require( './../ractives/Base' ),
    o = require( './../ractives/Objects' );
//base.extend(loadtemplate)
var components = {
    Premise: require( './premise.ract' )
};

module.exports = function ( component ) {
    if ( component === 'ALL' ) {
        return o.makeObj( o.keys( components ), o.keys( components ).map( cur => {
            return Base.extend( components[ cur ] )
        } ) )
    }
    return Base.extend( o.pick( components, component ) );
};
