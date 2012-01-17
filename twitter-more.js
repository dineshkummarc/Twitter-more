/*global $:true */

// go to last unread tweet link
// placed on the right of the top toolbar
$('<a href="#" class="go-to-last"><i></i></a>')
    .click(function(){
        var lastOffset=$('.last-new-tweet').offset();
        if(lastOffset){
            $('html,body').animate({
                scrollTop : lastOffset.top-50
            },500);
        }
    })
    .appendTo('.container');

// go to favorites link
// placed on the right of the 'Discover' link
$('<li><a class="js-hover" href="/#!/favorites">Favorites</a></li>')
    .appendTo('#global-actions');
