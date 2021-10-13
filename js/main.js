$(function () {
    $('.slider__box').slick()
    $('.case__slider-box').slick({
        prevArrow: $('.case__prev-button'),
        nextArrow: $('.case__next-button')
    })
});


$(document).ready(function() {

    var element = $(".buttons");
    var height_el = element.offset().top;
    
    $(".buttons").css({
        "width": element.outerWidth(),
        "height": element.outerHeight()
    });

    $(window).scroll(function() {
        
        if($(window).scrollTop() > height_el) {
        
            element.addClass("fixed");

        } else {
        
            element.removeClass("fixed");

        }

    });

});