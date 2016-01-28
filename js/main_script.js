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
new WOW().init();



/*******************************
*         \WOW\
********************************/

});