var Base = require( './../ractives/Base.js' ),
    sharedProps = require( './../utils/Shared' );
module.exports = Base.extend( sharedProps( 'Main', {
    template: require( './View.ract' ).template,
    data: function () {
        return {
            premises: [ 'yes', 'no' ],
            userName: 'Nick'
        }
    },
    oncomplete: function () { console.log( this ) },
    components: require( './../components/LoadComponent' )( [ 'Premise', 'Viewer' ] )
} ) );
