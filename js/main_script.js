$(document).ready(function(){
/*******************************
*         СЛАЙДЕР
********************************/
$(function() {

    $('#carousel').carouFredSel({
        responsive: true,
        items: {
            width:900,
            visible: 1
        },
        scroll: 1,
        auto:false,
        //{
        //    duration: 1250,
        //    timeoutDuration: 2500
        //},
        prev: '#prev',
        next: '#next'
    });

});
/*******************************
*         СТИЛИЗАЦИЯ ФОРМ
********************************/
$(function() {
    $('select').styler();

});
/*******************************
*         ЛАЙТБОКС
********************************/
$(".fancybox").fancybox({
    //центрируем
    helpers: {
        overlay: {
            locked: false
        }
    }
});
    $(".popup-link").fancybox({
        closeBtn:false,
        padding:0,
        //центрируем
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

/*******************************
*         WOW
********************************/
var wow = new WOW(
     {
    //    boxClass:     'wow',      // animated element css class (default is wow)
    //    animateClass: 'animated', // animation css class (default is animated)
        offset:       200,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
    wow.init();




/*******************************
*         \WOW\
********************************/

});