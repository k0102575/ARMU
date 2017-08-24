"use strict"
displayRecommandEventList();
displayTop10CategoryList();
displayRecentEventList();

function displayRecommandEventList() {
	$.getJSON('/event/listRecommand.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
			$.each(result.data.listRecruiting, function(i, item) {
				var starInteger = parseInt(item.score),
				starRealNumber = item.score - starInteger;
				starAdd(starInteger, starRealNumber, item)//별점 처리
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

function displayTop10CategoryList() {
	$.getJSON('/category/listTop10.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
		console.log(result)
		var templateFn = Handlebars.compile($('#rec-most-popular-category-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-most-popular-category-container')
		var html = container.html()
		container.html(html + generatedHTML)
	}, function(err) {
		console.log(err)
	})
}

function displayRecentEventList() {
  $.getJSON('/event/listRecent.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    $.each(result.data.listRecent, function(i, item) {
      var starInteger = parseInt(item.score),
      starRealNumber = item.score - starInteger;
      starAdd(starInteger, starRealNumber, item)//별점 처리
    });
    var templateFn = Handlebars.compile($('#rec-recent-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#rec-recent-event-container')
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



