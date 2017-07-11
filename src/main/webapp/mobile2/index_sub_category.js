"use strict"

var menuBtn1 = $('#sub-category-menu1'),
		menuBtn2 = $('#sub-category-menu2'),
		menuBtn3 = $('#sub-category-menu3'),
		menuBtn4 = $('#sub-category-menu4'),
		menuBtn5 = $('#sub-category-menu5')
//
menuBtn1.on('click', function() {
	menuBtn2.toggle("slide", {direction : "left"}, 600)
	menuBtn3.toggle("slide", {direction : "left"}, 700)
	menuBtn4.toggle("slide", {direction : "left"}, 400)
	menuBtn5.toggle("slide", {direction : "left"}, 800)
	$('#header-container').css('z-index', 1000)
	$('.category-menu').css('color', 'white')
	$('#header-menu-logo').fadeOut('slow')
	menuBtn1.animate({"top": "-=502px"}, "slow")
$(menuBtn1.children()[1]).animate({"top": "+=50px"}, "slow")

	// $('.sub-category-menu-text').animate()
// 	//menuBtns.attr('hidden', '')//.removeAttr
// 	// menuBtns.css('display', 'none')
});
