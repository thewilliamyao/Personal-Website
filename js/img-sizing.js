/**
 * Created by wyao on 2016-10-01.
 */
$( document ).ready(function () {
    if($(window).width() > 767) {
        $(".long-img").css({
            'height': (($(".long-link").width()) - 20) * .5
        });
    }
});

$( window ).resize(function() {
    if($(window).width() > 767) {
        $(".long-img").css({
            'height': (($(".long-link").width()) - 20) * .5
        });
    }
});

$( document ).ready(function() {
    if($(window).width() <= 767) {
        $(".long-img").attr("src", "img/answers_square.png");
        $("#featured-img").removeClass("long-img").addClass("img-responsive");
        $(".img-responsive").css({
           'width': $(".box-words-wrapper").width()
        });
    }
    else
        $(".long-img").attr("src", "img/answers_wider.png");
})

$( window ).resize(function() {
    if($(window).width() <= 767) {
        $(".long-img").attr("src", "img/answers_square.png");
        $("#featured-img").removeClass("long-img").addClass("img-responsive").css({'height': "auto"});
    }
    else
    {
        $(".long-img").attr("src", "img/answers_wider.png");
        $("#featured-img").removeClass("img-responsive").addClass("long-img").css({'height': ""});
    }
});