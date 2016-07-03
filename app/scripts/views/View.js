var Base = require( './../ractives/Base.js' ),
    sharedProps = require( './../utils/Shared' );
module.exports = Base.extend( sharedProps( 'Main', {
    template: require( './View.ract' ).template,
    data: function () {
        return {
            user: { name: 'Nick' },
            argument: {
                title: 'Is It true?',
                premises: [ 'A dog is an animal.', 'Coco is a dog.' ],
                premiseTitles: [ 'Title' ],
                conclusion: 'Coco is animal.'
            },
        }
    },
    oncomplete: function () { console.log( this ) },
    components: require( './../components/LoadComponent' )( [ 'Premise', 'Viewer' ] )
} ) );
