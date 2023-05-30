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

        //  Back to top button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        // animation for Back to top button
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.header-left button').on('click', function () {
            $('.ofcavas-menu').addClass('current');
        });

        $('.offcanvas-bottom span').on('click', function () {
            $('.ofcavas-menu').removeClass('current');
        });


        // owlCarousel
        $('.owl-csel1').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: [
                        '<img src="images/left.svg" alt="">',
                        '<img src="images/right.svg" alt="">'
                    ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });


        $('.owl-csel2').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            URLhashListener: true,
            startPosition: 'URLHash',
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // owlCarousel
        $('.owl-csel3').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: [
                        '<img src="images/left.svg" alt="">',
                        '<img src="images/right.svg" alt="">'
                    ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
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
        })





        
    });

})(jQuery);