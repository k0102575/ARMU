"use strict"

displayRecommandByEventMusiList();
displayBestReviewMusiList();
displayPopularMusiList();
displayMostPopularCategoryList();

function displayRecommandByEventMusiList() {
	$.getJSON('/event/listRecommand.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
		
		if(result.data == "browse") {
			hideRecommandList()
			return;
		}//받아온 데이터가 없는 경우
		
			$.each(result.data.listRecommand, function(i, item) {
				var starInteger = parseInt(item.score),
				starRealNumber = item.score - starInteger;
				starAdd(starInteger, starRealNumber, item)
				heartAdd(item)
			});

		var templateFn = Handlebars.compile($('#rec-event-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-event-container')
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




function displayBestReviewMusiList() {
	$.getJSON('/event/listRecommand.json', function(result) {
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
	$.getJSON('/event/listRecommand.json', function(result) {
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
	$.getJSON('/event/listRecommand.json', function(result) {
//		var tags;
//		$.each(result.data.listRecommand, function(i, item) {
//		tags[0] = item
//		})
		var templateFn = Handlebars.compile($('#rec-most-popular-category-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-most-popular-category-container')
		var html = container.html()
		container.html(html + generatedHTML)
	}, function(err) {
		console.log(err)
	})
}




function starAdd(starInteger, starRealNumber, item) {
	item.score = "";

	for (var i = 1; i <= starInteger; i++) {
		item.score += "<i class='fa fa-star' aria-hidden='true'></i>"
	}

	if(starRealNumber >= 0.8) {
		item.score += "<i class='fa fa-star' aria-hidden='true'></i>"
	} else if(starRealNumber <= 0.3) {
		item.score += "<i class='fa fa-star-o' aria-hidden='true'></i>"
	} else {
		item.score += "<i class='fa fa-star-half-o' aria-hidden='true'></i>"
	}

	if(starInteger < 4) {
		for (var i = 1; i <= 4 - starInteger; i++) {
			item.score += "<i class='fa fa-star-o' aria-hidden='true'></i>"
		}
	}

	return item;
}

function heartAdd(item) {
	if (item.isFavorite == 1) {
		item.isFavorite = '<i class="fa fa-heart" aria-hidden="true"></i>'
	} else {
		item.isFavorite = '<i class="fa fa-heart-o" aria-hidden="true"></i>'
	}
}

