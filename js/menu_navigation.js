// $(".link-h").click(function(e) {

// 	var indexItem = $( ".link-h" ).index( this );

// 	if( $(".nav-item:eq("+ indexItem +") ul").hasClass("inner-nav")) {

// 		e.preventDefault();	

// 		if ( $(".nav-item:eq("+ indexItem +") > .inner-nav").height() > 0 ) {

// 			$(".nav-item:eq("+ indexItem +") > .inner-nav").css({"height" : 0 });

// 		} else {

// 			$(".nav-item:eq("+ indexItem +") > .inner-nav").css({"height" : "auto"});

// 		}

// 	}

// });



// $(document).ready(function() {

// 	$(".respmenubtn").click(function() {

// 		$(".page").toggleClass("show-menu");

// 		if( $(".page").hasClass("show-menu") ) {

// 			$(".page").css({"min-height" : $(".menu-section").outerHeight(true) + "px"});

// 			console.log( $(".menu-section").height() ) ;

// 		} else {

// 			$(".page").css({"min-height" : 0});

// 			// if( bodyWidth < 768) {

// 			// 	$(".page").css({"min-height" : 0});

// 			// 	$(".main-page-menu").css({"margin-top" : ( $(".content").height() - $(".main-page-menu").height() ) / 2 + "px" });

// 			// }
			
// 		}

// 		$(".page-content").toggleClass("show-menu");
// 		$(".menu-section").toggleClass("show-menu");

// 	});

// });