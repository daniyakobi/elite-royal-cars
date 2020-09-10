$(document).ready(function() {
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();

        const main = $('.main').height();
        const navbar = $('.navbar').height();
        const navbarTop = $('.navbar-top').height();
        console.log(main, navbar, navbarTop, scrollTop);

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
});