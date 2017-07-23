"use strict"

var noEventView = $('.rec-no-event'),
yesEventView = $('.rec-yes-event');

var isEvent = true;


if(isEvent) {
	noEventView.css('display', 'none')
	yesEventView.css('display', '')

	displayRecommandByEventMusiList();
	displayBestReviewMusiList();
	displayPopularMusiList();
	displayMostPopularCategoryList();
} else {
	yesEventView.css('display', 'none')
	noEventView.css('display', '')
}



function displayRecommandByEventMusiList() {
	$.getJSON('/musician/listRecommand.json', function(result) {

		var templateFn = Handlebars.compile($('#rec-by-event-musi-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-by-event-musi-container')
		var html = container.html()
		container.html(html + generatedHTML)

		/*initialize swiper when document ready*/
		$(document).ready(function () {
			var mySwiper = new Swiper ('.swiper-container', {
				pagination: '.swiper-pagination',
				prevButton: '.swiper-button-prev',
				nextButton: '.swiper-button-next',
				centeredSlides: true,
				paginationClickable: true,
				spaceBetween: 30,
				slidesPerView: 'auto',
				cssWidthAndHeight: true,
				paginationType: 'bullets',
				paginationElement: 'span'
			});
		});//initialize swiper ended
	}, function(err) {
		console.log(err)
	})
}


function displayBestReviewMusiList() {
	$.getJSON('/musician/listRecommand.json', function(result) {
		var templateFn = Handlebars.compile($('#rec-best-review-musi-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-best-review-musi-container')
		var html = container.html()
		container.html(html + generatedHTML)

	}, function(err) {
		console.log(err)
	})
}

function displayPopularMusiList() {
	$.getJSON('/musician/listRecommand.json', function(result) {
		var templateFn = Handlebars.compile($('#rec-popular-musi-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-popular-musi-container')
		var html = container.html()
		container.html(html + generatedHTML)
	}, function(err) {
		console.log(err)
	})
}

function displayMostPopularCategoryList() {
	$.getJSON('/musician/listRecommand.json', function(result) {
		var templateFn = Handlebars.compile($('#rec-most-popular-category-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-most-popular-category-container')
		var html = container.html()
		container.html(html + generatedHTML)
	}, function(err) {
		console.log(err)
	})
}
