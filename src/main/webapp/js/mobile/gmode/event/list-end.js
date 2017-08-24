"use strict"

displayEndEventList()


function displayEndEventList() {
	$.getJSON('/event/listEnd.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
	$.each(result.data.listEnd, function(i, item) {
	  if(item.isReview == 1) item.isReview = 'review-exist';
	  else item.isReview = 'no-review';
	})
		var templateFn = Handlebars.compile($('#end-event-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#end-event-container')
		var html = container.html()
		container.html(html + generatedHTML)
	
		controlBtns()
	}, function(err) {
		console.log(err)
	})
}





function controlBtns() {
  $('.end-event-click').on('click', function(e) {
    location.href = 'detail-end.html?no=' + $(this).attr('data-no') +'&review=false'
  })
  
  $('.musician-review-exist').on('click', function(e) {
    var pressedBtn = $(this)
    location.href = 'detail-end.html?no=' + pressedBtn.attr('data-no') +'&review=false'
  })
  
  $('.musician-no-review').on('click', function(e) {
    var pressedBtn = $(this)
    location.href = 'detail-end.html?no=' + pressedBtn.attr('data-no') +'&review=true'
  })
  
}

