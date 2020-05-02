$(window).load(function(){
    $('.loader').fadeOut(500);
    $('.wrap-1 .title').animate({'top':'30%'}, 800);
    AOS.init();
})

$(document).ready(function(){
    var rellax = new Rellax ('.rellax');

    $(".navigation-button").click(function(){
        $(".intro, .icons").toggle();
    })

    $(window).scroll(function(){
        var s = $(this).scrollTop();
        if(s>100){
            $('.down img').css({"display":"none"});
        }
        else {
            $('.down img').fadeIn();
        }
    })

    $(".down").click(function(){
        $("body, html").animate({
          "scrollTop":"740px"
        })
    })


    $(".up").click(function(){

        $("body, html").animate({
          "scrollTop":"0px"
        })
    })
})