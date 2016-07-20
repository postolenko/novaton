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



$(document).ready(function() {

	$(".respmenubtn").click(function() {

		$(".page").toggleClass("show-menu");
		$(".page-content").toggleClass("show-menu");
		$(".menu-section").toggleClass("show-menu");
		// $(".respmenubtn").toggleClass("respmenubtn-active");

	});

});