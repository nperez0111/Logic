module.exports = {
    makeObj: function ( keys, values ) {
        var ret = {};
        if ( Array.isArray( keys ) && Array.isArray( values ) ) {
            keys.forEach( ( cur, i ) => {
                ret[ cur ] = values[ i ];
            } );

        } else {
            ret[ keys ] = values;
        }
        return ret;
    },
    iterateOver: function ( obj, doThat ) {
        this.keys( obj ).forEach( function ( cur, i ) {
            doThat( obj[ cur ], cur, obj );
        } );
        return this.keys( obj );
    },
    transform:function(obj,doThat){
        return this.makeObj( this.keys( obj ), this.keys( obj ).map( function ( cur, i ) {
            return doThat( obj[ cur ], cur, obj );
        } ) );
    },
    pick: function ( obj, prop ) {
        if ( Array.isArray( prop ) ) {
            var ret = {};
            prop.forEach( ( cur ) => {
                ret[ cur ] = obj[ cur ];
            } );
            return ret;
        }
        return obj[ prop ];
    },
    keys: function ( obj ) {
        return Object.keys( obj );
    },
    objFlattenArr:function( previous, next ) {
        return Object.assign( previous, next );
    }
};
