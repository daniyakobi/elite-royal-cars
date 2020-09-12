$(document).ready(function() {
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();

        const main = $('.main').height();
        const navbar = $('.navbar').height();
        const navbarTop = $('.navbar-top').height();

        if (scrollTop => navbar * 2) {
            $('.navbar').css({
                "top": -navbarTop,
            });
        };
        if (scrollTop < navbar * 2) {
            $('.navbar').css({
                "top": 0,
            });
        };
    });

    var mySwiper = new Swiper('.reviews__slider-container', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

});