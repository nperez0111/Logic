var Base = require( './../ractives/Base.js' );
module.exports = Base.extend( {
    template: require( './Editing.ract' ).template,
    data: function () {
        return {
            premises: [ 'yes', 'no' ],
        }
    },
    components: require( './../components/LoadComponent' )( [ 'Premise', 'Editor' ] )
} );
