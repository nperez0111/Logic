var isFunc = require( 'is-function' ),
    _ = require( './../ractives/Objects' ),
    props = [ 'data', 'computed' ],
    shared = {
        Premise: {
            data: {
                title: "we not good"
            },
            computed: {

            }

        }
    };
module.exports = function ( key, obj ) {
    var objToMerge = _.makeObj( _.keys( obj ).filter( cur => {
            return props.indexOf( cur ) == -1;
        } ), obj ),
        merged = _.objExtend( shared[ key ], objToMerge );
    props.forEach( cur => {
        merged[ cur ] = _.objExtend( merged[ cur ], isFunc( obj[ cur ] ) ? obj[ cur ]() : obj[ cur ] );
    } )
    return merged;
};
