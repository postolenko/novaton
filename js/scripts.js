$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    // getMenuNavPosition();


    $(document).scroll(function() {
        
            getScrollToTopBtn();

    });

    $(window).resize(function() {

        // getMenuNavPosition();

    });


//  ---------------------------


    function getMenuNavPosition() {

        // if( $(".menu-section").hasClass("center-position") ) {


        //     $(".menu-section").css({"margin-top" : ( $(".content").height() - $(".menu-section").height() ) / 2 + "px" });


        // }

        $(".main-page-menu").css({"margin-top" : ( $(".content").height() - $(".main-page-menu").height() ) / 2 - $(".footer").height() + "px" });

    }


//  ---------------------------

    $(document).ready(function() {

        $(".respmenubtn").click(function() {

            $(".nav-list").toggleClass("respnavleftcoor");
            $(".respmenubtn").toggleClass("respmenubtn-active");

        });

    });


// ----------------------------

    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    function getScrollToTopBtn() {


        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }



});