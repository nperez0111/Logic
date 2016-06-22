'use strict';

var Base = require( './../ractives/Base' ),
    o = require( './../ractives/Objects' );

var components = {
    Premise: require( './Premise.ract' ),
    Editor: require( './Editor.ract' ),
    Viewer: require( './Viewer.ract' ),
};

module.exports = function ( query ) {
    if ( query === 'ALL' ) {
        return o.transform( components, cur => {
            return Base.extend( cur )
        } )
    } else if ( Array.isArray( query ) ) {
        return o.transform( o.pick( components, query ), cur => {
            return Base.extend( cur )
        } )
    }

    return Base.extend( o.pick( components, query ) );
};
