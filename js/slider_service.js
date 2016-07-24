$(document).ready(function() {

	var indexPrewiev;
	var styleVal;
	var indexOfSlash;
	var nameFile;
	var formatFile;

	var topPositionPrew;


	$(".service-miniatures .item").click(function() {

		indexPrewiev = $(".service-miniatures .item").index(this);
		styleVal = $(".service-miniatures .item:eq("+indexPrewiev+") img").attr("src");

		indexOfSlash = styleVal.lastIndexOf("/");

		nameFile = styleVal.slice(indexOfSlash + 1);

		$(".slide-service").css({"opacity": .3});

		$(".slide-service").attr("style","background-image: url(photos/"+ nameFile);

		$(".slide-service").animate({"opacity": 1}, 300);
		
	});


	// $(".show-prew").click(function() {

	// 	styleVal = $(".wood-texture-image img").attr("src");

	// 	indexOfSlash = styleVal.lastIndexOf("/");

	// 	nameFile = styleVal.slice(indexOfSlash + 1);

	// 	$(".show-prew-box").fadeIn(500);

	// 	$(".show-prew-box img").attr("src","slider_good/img/"+ nameFile);

	// 	topPositionPrew = ( $(window).height() - $(".show-prew-box img").height() ) / 2;

	// 	$(".show-prew-box img").css({"margin-top": topPositionPrew + "px" });

	// });


	// $(".show-prew-box").click(function() {

	// 	$(".show-prew-box").fadeOut(500);

	// });


});