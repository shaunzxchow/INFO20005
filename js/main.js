(function ($) {
    "use strict";

    $(window).on('load', function(){
        // Prealoder ---------
        $("#preloader").delay(500).fadeOut("slow");
    });


    $(document).ready(function () {

        // sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 1) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();

        // Hamburger-menu
        $('.header-left button').on('click', function () {
            $('.off-canvas-menu').addClass('current');
        });

        $('.off-canvas-bottom span').on('click', function () {
            $('.off-canvas-menu').removeClass('current');
        });

        // accordian
        jQuery(".accordian-title").click(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").next().slideUp();
            } else {
                $(".accordian-title").next().slideUp();
                $(".accordian-title").removeClass("active");
                $(this).addClass("active").next().slideDown();
            }
            return false;
        });
    });
    function addToCartFeedback() {
        alert("Item added to cart!");
    }

})(jQuery);