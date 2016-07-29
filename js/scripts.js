$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    getMenuNavPosition();

    var mapHeightMob = $("#map").height();

    getMapSize();
    getSliderWidth();


    $(document).scroll(function() {
        
            getScrollToTopBtn();

    });

    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getMenuNavPosition();

        mapHeightMob = $("#map").height();


        getMapSize();

        getSliderWidth();


            if ( $(".respmenubtn").hasClass("respmenubtn-active") ) {

                if( bodyWidth < 480 ) {

                    $(".page-content").css({"margin-left": 0 + "%"});
                    $(".menu-tablet").css({"display": "none"});
                    $(".menu-mob").css({"height" : "auto"});

                } else if ( bodyWidth > 480 && bodyWidth < 960 ) {

                    $(".page-content").css({"margin-left": -60 + "%"});

                    $(".menu-tablet").css({
                                            "display": "inline-block",
                                            "margin-right" : 0 + "%"
                                        });

                    $(".menu-mob").css({"display": "none"});                    

                } else {

                    $(".page-content").css({"margin-left": 0 + "%"});

                    if( $(".page-content").hasClass("main-page-menu") ) {

                        $(".menu-tablet").css({"display": "none"});

                    }

                }

            } else {

                if( bodyWidth < 960 ) {

                    $(".page-content").css({"margin-left": 0 + "%"});
                    $(".menu-tablet").css({"display": "none"});
                    $(".menu-mob").css({"display": "none"});

                } else if (bodyWidth > 960) {

                    $(".respmenubtn").removeClass("respmenubtn-active");
                    $(".menu-tablet").css({
                                            "display": "block",
                                            "margin-right" : 0 + "%"
                                        });
                    $(".menu-mob").css({"display": "none"});

                    if( $(".page-content").hasClass("main-page-menu") ||  $(".page-content").hasClass("contacts-page") ) {

                        $(".menu-tablet").css({"display": "none"});

                    }

                }


            }


    });


   function getSliderWidth() {

    var percentWidth;

    if(bodyWidth > 960) {

        percentWidth = 60;

    } else {

        percentWidth = 100;

    }


    $(".slider-for").width( ( $(window).width() / 100 ) * percentWidth );
    $(".slider-miniatures-box").width( ( $(window).width() / 100 ) * percentWidth );
    $(".slide-partners").width( ( $(window).width() / 100 ) * percentWidth );
    $(".slider-partners-block").width( ( $(window).width() / 100 ) * percentWidth );
    $(".slider-block").width( ( $(window).width() / 100 ) * percentWidth );

   } 


//  ---------------------------


    function getMenuNavPosition() {


        $(".main-page-menu-list").css({"width" : $(window).width() - ( $(".left-cell").width() * 2 ) + "px"});

        $(".main-page-menu-list").outerHeight($(window).height() - $(".header").outerHeight(true) - $(".footer").outerHeight(true) - 140);


    }


//  ---------------------------


    $(".respmenubtn").click(function() {

            $(".respmenubtn").toggleClass("respmenubtn-active");

            if(bodyWidth > 480) {

                if( $(".menu-section").hasClass("menu-tablet") ) {

                $(".page").toggleClass("show-menu");

                    if ( $(".page").hasClass("show-menu") ) {

                        $(".menu-tablet").css({"display" : "inline-block"});
                        $(".page").css({"overflow-x" : "hidden"});

                        $(".page-content").animate({"margin-left": -60 + "%"}, 700);
                        $(".menu-tablet").animate({"margin-right": 0 + "%"}, 700);

                    } else {

                        $(".page-content").animate({"margin-left": 0 + "%"}, 700);
                        $(".menu-tablet").animate({"margin-right": -60 + "%"}, 700);

                        setTimeout(function() {

                            $(".menu-section").css({"display" : "none"});
                            $(".page").css({"overflow-x" : "none"});

                        }, 710);

                    }

                }

            } else {

                if( $(".menu-section").hasClass("menu-mob") ) {

                var menuSectionHeight = $(".menu-mob .menu-section-list").outerHeight(true);

                $(".page").toggleClass("show-menu");

                if ( $(".page").hasClass("show-menu") ) {
                
                    $(".menu-mob").animate({"height" : menuSectionHeight + 10 + "px"}, 700);

                    setTimeout(function() {

                        $(".menu-mob").css({"height" : "auto"});

                    }, 710);                    

                } else {

                    $(".menu-mob").animate({"height" : 0 + "px"}, 700);

                }

                }

            }

    });




    var indexItem;
    var innerNavHeight;


    $(".main-page-menu .nav-item").hover(function(){

        indexItem = $( ".main-page-menu .nav-item" ).index( this );

        if ( $(".main-page-menu .nav-item:eq("+ indexItem +") .inner-nav-block").height() <= 0 ) {

            innerNavHeight = $(".main-page-menu .nav-item:eq("+ indexItem +") .inner-nav").height();

        } else {

            innerNavHeight = 0;

        }

        $(".main-page-menu .nav-item .inner-nav-block:eq("+ indexItem +")").delay(600).stop().animate({"height": innerNavHeight + "px"}, 700);

    });



    var indexLeftItem;
    var innerLeftNavHeight;

    $( ".menu-section .nav-item").hover(function(){

        indexLeftItem = $( ".menu-section .nav-item" ).index( this );

        if ( $( ".menu-section .nav-item:eq("+ indexLeftItem +") .inner-nav-block").height() <= 0 ) {

            innerLeftNavHeight = $( ".menu-section .nav-item:eq("+ indexLeftItem +") .inner-nav").height();

        } else {

            innerLeftNavHeight = 0;

        }

        $( ".menu-section .nav-item .inner-nav-block:eq("+ indexLeftItem +")").delay(700).stop().animate({"height": innerLeftNavHeight + "px"}, 700);

    });



// ----------------------------



    function getMapSize() {

        if(bodyWidth >= 480) {

            $("#map").height(570);

        } else {

            $("#map").height(230);

        }

    }

    mapHeightMob = $("#map").height();

    $(".show-map").click(function() {

        if ( bodyWidth <= 480 ) {

            if ($("#map").height() > mapHeightMob ) {

                $("#map").animate({"height": mapHeightMob + "px"}, 700);
                $(".show-txt").text("Развернуть");

                if( $(".arrow-map").hasClass("up") ) {

                    $(".arrow-map").removeClass("up");

                }
                

            } else {

                $("#map").animate({"height": 570 + "px"}, 700);
                $(".arrow-map").addClass("up");
                $(".show-txt").text("Свернуть");

            }

        }    

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