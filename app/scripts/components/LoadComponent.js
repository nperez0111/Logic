'use strict';

var Base = require( './../ractives/Base' ),
    o = require( './../ractives/Objects' );
//base.extend(loadtemplate)
var components = {
    Premise: require( './Premise.ract' ),
    Editor: require( './Editor.ract' )
};

module.exports = function ( component ) {
    if ( component === 'ALL' ) {
        return o.transform( components, cur => {
            return Base.extend( cur )
        } )
    }
    return Base.extend( o.pick( components, component ) );
};
