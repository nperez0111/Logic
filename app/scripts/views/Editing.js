var Base = require( './../ractives/Base.js' ),
    sharedProps = require( './../utils/Shared' );
module.exports = Base.extend( sharedProps( 'Main', {
    template: require( './Editing.ract' ).template,
    data: function () {
        return {
            premises: [ 'yes', 'no' ],
        }
    },
    components: require( './../components/LoadComponent' )( [ 'Premise', 'Editor' ] )
} ) );
