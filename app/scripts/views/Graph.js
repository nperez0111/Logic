var Base = require( './../ractives/Base.js' );
module.exports = Base.extend( {
    template: require( './Graph.ract' ).template,
    data: function () {
        return {
            premises: [ 'yes', 'no' ]
        }
    },
    components: {
        Premise: require( './../components/Premise.js' )
    }
} );
