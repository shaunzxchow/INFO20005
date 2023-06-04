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

        // Hamburger menu
        var headerLeftBtn = document.querySelector(".header-left button");
        var ofcanvasMenu = document.querySelector(".ofcavas-menu");
        var offcanvasBottom = document.querySelector(".offcanvas-bottom span");
  
        headerLeftBtn.addEventListener("click", function () {
         ofcanvasMenu.classList.add("current");
        });
  
        offcanvasBottom.addEventListener("click", function () {
          ofcanvasMenu.classList.remove("current");
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