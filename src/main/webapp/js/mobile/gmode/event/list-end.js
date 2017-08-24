"use strict"

displayEndEventList()


function displayEndEventList() {
	$.getJSON('/event/listEnd.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
	console.log(result.data)
	$.each(result.data.listEnd, function(i, item) {
	  if(item.isReview == 1) {
	    item.isReview = 'review-exist'
	  }
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
	var applicantBtn = $('.end-applicant-btn');

	applicantBtn.on('click', function(e) {
		if($(this).attr('data-open') == "true") {
			$(this).html('함께한 뮤지션 <i class="fa fa-angle-down" aria-hidden="true"></i>')
			.attr('data-open', false)
		} else {
			$(this).html('함께한 뮤지션 <i class="fa fa-angle-up" aria-hidden="true"></i>')
			.attr('data-open', true)
		}
		$(this).siblings('.end-applicant-box').toggle( "fold", 500 );
		e.preventDefault()
	})


  $('.end-event-click').on('click', function(e) {
    location.href = 'detail-end.html?no=' + $(this).attr('data-no') +'&review=false'
  })
  
    $('.end-musician-click').on('click', function(e) {
    location.href = 'detail-end.html?no=' + $(this).attr('data-no') +'&review=true'
//    location.href = '../musi-info/index.html?no=' + $(this).attr('data-no')
  })
  
}

