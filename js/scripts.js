$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    getMenuNavPosition();


    $(document).scroll(function() {
        
            getScrollToTopBtn();

    });

    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getMenuNavPosition();

// ------------------------------

        if( $(".page").hasClass("show-menu") && bodyWidth >= 768 ) {

            $(".page").css({"min-height" : 0});

        }

        if( $(".page").hasClass("show-menu") && bodyWidth < 768) {

            $(".page").css({"min-height" : $(".menu-section").outerHeight(true) + "px"});

            console.log( $(".menu-section").height() ) ;

        } else {

            $(".page").css({"min-height" : 0});
           
        }


        // if( bodyWidth < 768  &&  bodyWidth >= 320 ) {

        //     $(".page").css({"min-height" : 0});

        //     $(".main-page-menu").css({"margin-top" : ( $(".content").height() - $(".main-page-menu").height() ) / 2 + "px" });

        // }

// ------------------------------


    });


//  ---------------------------


    function getMenuNavPosition() {


        $(".main-page-menu").css({"margin-top" : ( $(".content").height() - $(".main-page-menu").height() ) / 2 + "px" });


    }


//  ---------------------------

    $(document).ready(function() {

        $(".respmenubtn").click(function() {

            $(".nav-list").toggleClass("respnavleftcoor");
            $(".respmenubtn").toggleClass("respmenubtn-active");

        });

    });


// ----------------------------

    $(".respmenubtn").click(function() {

            $(".page").toggleClass("show-menu");

            if( $(".page").hasClass("show-menu") ) {

                $(".page").css({"min-height" : $(".menu-section").outerHeight(true) + "px"});

                console.log( $(".menu-section").height() ) ;

            } else {

                $(".page").css({"min-height" : 0});

                // if(bodyWidth > 480 && bodyWidth <= 768) {

                    // $(".page").css({"height" : "auto"});

                    // setTimeout(function() {

                        $(".page").css({"height" : "auto"});

                        $(".main-page-menu").css({"margin-top" : 0 + "px" });

                    setTimeout(function() {

                        $(".main-page-menu").css({"margin-top" : ( $(".content").height() - $(".main-page-menu").height() ) / 2 + "px" });

                    }, 40);
                   
                // }

                // if( bodyWidth <= 480 ) {

                //     $(".main-page-menu").css({"margin-top" : ( $(".content").height() - $(".main-page-menu").height() ) / 2  + "px" });

                // }
                
            }

            $(".page-content").toggleClass("show-menu");
            $(".menu-section").toggleClass("show-menu");

    });



    // $(".main-page-menu .link-h").hover(function(){

    //     var indexItem = $( ".main-page-menu .link-h" ).index( this );

    //     var innerNavHeight = $(".main-page-menu .inner-nav-block:eq("+ indexItem +") > .inner-nav").height();

    //     console.log(indexItem+"  "+innerNavHeight);

    //     $(".main-page-menu .inner-nav-block:eq("+ indexItem +")").animate({"height": 300 + "px"}, 700);


    // });


    var indexItem;
    var innerNavHeight;


    $(".main-page-menu .nav-item ").hover(function(){

        indexItem = $( ".main-page-menu .nav-item" ).index( this );

        innerNavHeight = $(".main-page-menu .nav-item:eq("+ indexItem +") .inner-nav").height();

        console.log(indexItem +"  "+ innerNavHeight);       

        if ( $(".main-page-menu .inner-nav-block:eq("+ indexItem +")").height() <=0 ) {

            innerNavHeight = $(".main-page-menu .nav-item:eq("+ indexItem +") .inner-nav").height();

        } else {

            innerNavHeight = 0;

        }

        $(".main-page-menu .inner-nav-block:eq("+ indexItem +")").animate({"height": innerNavHeight + "px"}, 700);

    });


    $(".menu-section .nav-item .link-h").hover(function(){

        indexItem = $( ".menu-section .nav-item .link-h" ).index( this );

        innerNavHeight = $(".menu-section .nav-item:eq("+ indexItem +") .inner-nav").height();

        console.log(indexItem +"  "+ innerNavHeight);       

        if ( $(".menu-section .inner-nav-block:eq("+ indexItem +")").height() <=0 ) {

            innerNavHeight = $(".menu-section .nav-item:eq("+ indexItem +") .inner-nav").height();

        } else {

            innerNavHeight = 0;

        }

        $(".menu-section .inner-nav-block:eq("+ indexItem +")").animate({"height": innerNavHeight + "px"}, 700);

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