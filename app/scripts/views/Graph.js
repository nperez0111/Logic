var Base = require( './../ractives/Base.js' );
module.exports = Base.extend( {
    template: require( './Graph.ract' ).template,
    data: function () {
        return {
            premises: [ 'yes', 'no' ],
            data: {
                logy: function ( a ) {
                    console.log( a )
                    return ( a )
                }
            }
        }
    },
    components: require( './../components/LoadComponent' )( 'ALL' )
} );
