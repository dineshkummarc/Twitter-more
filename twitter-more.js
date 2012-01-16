/*global $:true */
$('<a href="#" class="go-to-last">Last</a>')
    .click(function(){
        var lastOffset=$('.last-new-tweet').offset();
        if(lastOffset){
            $('html,body').animate({
                scrollTop : lastOffset.top-50
            },500);
        }
    })
    .appendTo('.container');
