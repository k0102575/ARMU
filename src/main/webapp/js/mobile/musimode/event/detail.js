"use strict"

var viewContainer = $('.event-container'),
		moreBackscreen = $('.more-backscreen'),
		moreToggle = $('.more-toggle')

$('.more-btn').on('click', function() {
	console.log('moremore')
	moreBackscreen.toggle("fade", 500)
	moreToggle.toggle( "blind", 500 );
})


//viewContainer.css('display', 'none')