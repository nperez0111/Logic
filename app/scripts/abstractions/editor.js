var Medium = require( 'Medium.js' );
module.exports = function ( options ) {
    var editor = new Medium( Object.assign( {
            mode: Medium.partialMode,
            placeholder: 'it Works',
            autofocus: false
        }, options ) ),
        manip = {
            insHTML: function ( html, callback ) {
                editor.focus();
                editor.insertHtml( html, callback );
                console.log( 'test' )
                return manip;
            },
            destroy: function () {
                editor.destroy();
                return manip;
            },
            getCurVal: function () {
                return editor.value( undefined );
            },
            setCurVal: function ( val ) {
                editor.value( val );
                return manip;
            },
            get: function () {
                return editor;
            },
        };
    return manip;
}
