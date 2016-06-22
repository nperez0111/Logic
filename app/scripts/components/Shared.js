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
    var merged = _.objExtend( shared[ key ], obj );
    props.forEach( cur => {
        merged[ cur ] = _.objExtend( merged[ cur ], isFunc( obj[ cur ] ) ? obj[ cur ]() : obj[ cur ] );
    } )
    return merged;
};
