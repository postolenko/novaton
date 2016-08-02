$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth; // ширина окна браузера


    getMenuNavPosition(); // получение центральной позиции меню на главной странице

    var mapHeightMob = $("#map").height();  // высота карты на странице "Контакты"

    getMapSize();  // получение размера ширины карты на странице контактов
    getSliderWidth(); // получение размера ширины слайдера на странице Услуги
    getModalSliderPostion();

    $(document).scroll(function() {
        
            // getScrollToTopBtn();   // при необходимости эту функцию можно использовать для отображения кнопки скролла
                                      // для прокрутки страницы в самый вверх
    });

    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth; // ширина окна браузера

        getMenuNavPosition(); // получение центральной позиции меню на главной странице

        mapHeightMob = $("#map").height();  // высота карты на странице "Контакты"


        getMapSize(); // получение размера ширины карты на странице контактов

        getSliderWidth(); // получение размера ширины слайдера на странице Услуги

        getModalSliderPostion();  // получение центральной позиции модального слайдера

        $(".background").css({
            "width": $(window).width() + "px",
            "height": $(window).height() + "px"
        });

        // ----------------------------------------------------------------

        if ( bodyWidth >= 480 ) {  // В случае если описание слайда Услуги равен 0 и отступы тоже 
                                   // приписываются нужные стили

            $(".slide-description:eq("+ indexItemSlide +")").css({
                                                                "height": "auto",
                                                                "padding": "2% 9%"
                                                            });

        }

        //  ---------------------------------------------------------------

        //  Этот код для адаптиврного меню. Отвечает за поведение меню при ресайзе окна браузера

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
                    $(".menu-tablet").css({
                                            "display": "none",
                                            "margin-right" : -60 + "%"
                                        });
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

    $(".background").css({
        "width": $(window).width() + "px",
        "height": $(window).height() + "px"
    });

    // -----------------------------------------------------------------------------------------

    var persentsServiceMiniaturesWidth;
    var persentsSliderPartnersWidth;
   

   function getSliderWidth() {   // получение размера ширины слайдера на странице Услуги

    persentsServiceMiniaturesWidth = ( $(".service-miniatures .item").outerWidth(true) / ( $(".slider-miniatures-box").width() * 0.01 ) ) * $(".service-miniatures .item").length * 1.1;

    $(".service-miniatures").css({ "width" : persentsServiceMiniaturesWidth + "%" });

    persentsSliderPartnersWidth = ( $(".slider-partners .item").outerWidth(true) / ( $(".slider-partners-block").width() * 0.01 ) ) * $(".slider-partners .item").length * 1.1;

    $(".slider-partners").css({ "width" : persentsSliderPartnersWidth + "%" });


    // if(bodyWidth <= 960) {

    //     $(".slider-miniatures-box").css({"width" : $(window).width() + "px"});

    // }

    

   } 


//  ----------------------------------------------------------------------------------------

// получение центральной позиции меню на главной странице

    function getMenuNavPosition() {


        $(".main-page-menu-list").css({"width" : $(window).width() - ( $(".left-cell").width() * 2 ) + "px"});

        $(".main-page-menu-list").outerHeight($(window).height() - $(".header").outerHeight(true) - $(".footer").outerHeight(true) - 140);


    }

//  ---------------------------------------------------------------------

//  Показать - скрыть модальный слайдер на странице Услуги

    $(".slide-service .item").click(function() {

        $(".modal-service-slider-box").fadeIn(300);

        getModalSliderPostion();

    });

    $(".modal-bg, .close-modal-sl").click(function() {

        $(".modal-service-slider-box").fadeOut(300);

    });


// -----------------------------------------------------------------------------------------

    function getModalSliderPostion() {    // получение центральной позиции модального слайдера

        $(".center-position-slider").css({"margin-top" : ( $(window).height() - $(".modal-slide-service").height() ) / 2 + "px" });

        if ( parseInt( $(".center-position-slider").css("margin-top") ) <= 0 ) {

            $(".center-position-slider").css({"margin-top" : 10 + "px"});

        }

    }


// -----------------------------------------------------------------------------------------

//  Показать-скрыть меню при клике на гамбургер

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

// ------------------


    var indexItem;
    var innerNavHeight;

// Поведение Центрально Меню на Главной Странице при наведении курсора. 


    $(".main-page-menu .nav-item").hover(function(){

        indexItem = $( ".main-page-menu .nav-item" ).index( this );

        if ( $(".main-page-menu .nav-item:eq("+ indexItem +") > .inner-nav-block").height() <= 0 ) {

            innerNavHeight = $(".main-page-menu .nav-item:eq("+ indexItem +") > .inner-nav-block .inner-nav").height();

        } else {

            innerNavHeight = 0;

        }

        $(".main-page-menu .nav-item:eq("+ indexItem +") > .inner-nav-block").delay(600).stop().animate({"height": innerNavHeight + "px"}, 700);

    });


// Поведение Навигиционного Меню при наведении курсора. 

    var indexLeftItem;
    var innerLeftNavHeight;

    $( ".menu-section .nav-item").hover(function(){

        indexLeftItem = $( ".menu-section .nav-item" ).index( this );

        if($( ".menu-section .nav-item:eq("+ indexLeftItem +") > div").hasClass("inner-nav-block")) {

            if ( $( ".menu-section .nav-item:eq("+ indexLeftItem +") > .inner-nav-block").height() <= 0 ) {

                innerLeftNavHeight = $( ".menu-section .nav-item:eq("+ indexLeftItem +") > .inner-nav-block .inner-nav").height();

            } else {

                innerLeftNavHeight = 0;

            }

            $( ".menu-section .nav-item:eq("+ indexLeftItem +") > .inner-nav-block").delay(700).stop().animate({"height": innerLeftNavHeight + "px"}, 700);

        }


    });

// ----------------------------------------------------



    function getMapSize() {   // получение размера ширины карты на странице контактов

        if(bodyWidth >= 480) {

            $("#map").height(570);

        } else {

            $("#map").height(230);

        }

    }

    mapHeightMob = $("#map").height();

    var countCall = 0;

    $(".show-map").click(function() {

        if ( bodyWidth <= 480 ) {

            if ($("#map").height() > mapHeightMob ) {

                $("#map").animate({"height": mapHeightMob + "px"}, 700);

                $(".show-txt").text("Развернуть");

                if( $(".arrow-map").hasClass("up") ) {

                    $(".arrow-map").removeClass("up");

                }
                

            } else {

                $("#map").animate({"height": 470 + "px"}, 700);

                if(countCall <= 0) {

                    setTimeout(function() {

                        initMap();

                    }, 710);

                }

                countCall++;            

                $(".arrow-map").addClass("up");
                $(".show-txt").text("Свернуть");

            }

        }    

    });


// ---------------------------------------------------------

var slideDescriptionHeight;
var indexItemSlide;

 $(".responsive-show-tab").click(function() {

        if ( bodyWidth <= 480 ) {

            indexItemSlide = $(".responsive-show-tab").index(this);

            slideDescriptionHeight = $(".slide-description:eq("+ indexItemSlide +")").height();

            if ( slideDescriptionHeight > 0 ) {

                $(".slide-description:eq("+ indexItemSlide +")").animate({
                                                                            "height": 0,
                                                                            "padding": 0
                                                                        }, 700);

                $(".responsive-show-tab:eq("+ indexItemSlide +") .show-txt").text("Развернуть");

                if( $(".arrow-desc").hasClass("up") ) {

                    $(".arrow-desc").removeClass("up");

                }
                

            } else {

                // $(".slide-description:eq("+ indexItemSlide +")").animate({"height": 100 + "%"}, 700);
                $(".slide-description:eq("+ indexItemSlide +")").css({
                                                                        "height": "auto",
                                                                        "padding": "10px 2px"
                                                                    });
                $(".arrow-desc").addClass("up");
                $(".responsive-show-tab:eq("+ indexItemSlide +") .show-txt").text("Свернуть");

            }

        }    

    });


// ---------------------------------------------------------

    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    function getScrollToTopBtn() {    // при необходимости эту функцию можно использовать для отображения кнопки скролла
                                      // для прокрутки страницы в самый вверх. Только кнопке задайте класс "scroll-to-top". 


        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }

// ---------------------------------------------------------

});