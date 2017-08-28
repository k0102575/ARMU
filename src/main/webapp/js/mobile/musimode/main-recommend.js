"use strict"
var renderCount=0;

$('.rec-title').hide()
$('.loader-box').show()
displayRecommandEventList();
displayTop10CategoryList();
displayRecentEventList();




function displayRecommandEventList() {
	$.getJSON('/event/listRecommand.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
		console.log(result.data)
			$.each(result.data.listRecommand, function(i, item) {
				heartAdd(item)
			});

			var templateFn = Handlebars.compile($('#rec-event-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-event-container')
		var html = container.html()
		container.html(html + generatedHTML).hide()
          
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
			
		removeLoader(++renderCount)
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
		var templateFn = Handlebars.compile($('#rec-most-popular-category-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#rec-most-popular-category-container')
		var html = container.html()
		container.show().html(html + generatedHTML).hide()
		
		$('.rec-hashtag').on('click', function(e) {
		  e.preventDefault()
		  var type =$(this).attr('data-type'),
		      typeno=$(this).attr('data-typeno'),
		      no=$(this).attr('data-no')
		      $('#category2').trigger('click')
		  if (type=='theme') {
       $('#filter-theme').trigger('click') 
       $('.filter-thm-sub-tab[data-no='+typeno+']').trigger('click')
       $('.thm[data-no='+no+']').trigger('click')
       $('#filter-thm-backscreen').trigger('click')
      } else if (type=='genre'){
        $('#filter-genre').trigger('click') 
        $('.filter-gen-sub-tab[data-no='+typeno+']').trigger('click')
        $('.gen[data-no='+no+']').trigger('click')
        $('#filter-gen-backscreen').trigger('click')
      } else if (type=='major'){
        $('#filter-major').trigger('click') 
        $('.filter-mjr-sub-tab[data-no='+typeno+']').trigger('click')
        $('.mjr[data-no='+no+']').trigger('click')
        $('#filter-mjr-backscreen').trigger('click')
      }
    })
    
    removeLoader(++renderCount)
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
      heartAdd(item)
    });
    var templateFn = Handlebars.compile($('#rec-recent-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#rec-recent-event-container')
    var html = container.html()
    container.html(html + generatedHTML).hide()
    
    removeLoader(++renderCount)
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



function heartChange(isFavorite, pressedBtn) {
  if (isFavorite == '<i class="fa fa-heart" aria-hidden="true"></i>') {
    isFavorite = '<i class="fa fa-heart-o" aria-hidden="true"></i>'
      $.post('/event/favorRemove.json', {
        'no': pressedBtn.attr('data-no')
        }, function(result) {
          if(result.status == 'error') {
            
          }
        }, 'json')
  } else {
    isFavorite = '<i class="fa fa-heart" aria-hidden="true"></i>'
    $.post('/event/favorAdd.json', {
      'no': pressedBtn.attr('data-no')
      }, function(result) {}, 'json')
  }
  return isFavorite;
}


function setClickEvents() {
  $('.event-click').on('click', function() {
    location.href = 'event/detail.html?no=' + $(this).attr('data-no')
  })
  
  $('.favor-click').on('click', function() {
    var pressedBtn = $(this);
    var isFavorite = heartChange(pressedBtn.html(), pressedBtn)
    pressedBtn.html(isFavorite)
  })
}


function removeLoader(count) {
	if(count != 3) return
	
	$('.loader-box').css('display' , 'none')
	$('.rec-title').fadeIn(700)
	$('#rec-event-container').fadeIn(700)
	$('#rec-most-popular-category-container').fadeIn(700)
	$('#rec-recent-event-container').fadeIn(700)
	setClickEvents()
}

