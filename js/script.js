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
        spaceBetween: 35,
        speed: 1000,
        // Navigation arrows
        navigation: {
          nextEl: '.reviews__slider-next',
          prevEl: '.reviews__slider-prev',
        },
    });

    var mySwiper = new Swiper('.partners__slider', {
        // Optional parameters
        centeredSlides: true,
        noSwipingClass: 'partners__slider',
        loop: true,
        width: 300,
        spaceBetween: 35,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 20000,
    });
});