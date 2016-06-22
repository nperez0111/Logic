var Base = require( './../ractives/Base.js' );
module.exports = Base.extend( {
    template: require( './View.ract' ).template,
    data: function () {
        return {
            premises: [ 'yes', 'no' ],
        }
    },
    components: require( './../components/LoadComponent' )( [ 'Premise', 'Viewer' ] )
} );
