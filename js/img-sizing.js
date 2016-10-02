/**
 * Created by wyao on 2016-10-01.
 */
$( "img" ).each( function() {
    var $img = $( "long-img" );
    $img.height(($img.width() - 20) * .5);
});