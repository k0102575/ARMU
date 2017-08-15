"use strict"

var isRecommandEvent = true;

var noEventView = $('.recruiting-no-event'),
yesEventView = $('.recruiting-yes-event');

if(isRecommandEvent) {
	noEventView.css('display', 'none')
	yesEventView.css('display', '')
	
	displayRecruitingEventList()

	
	
} else {
	yesEventView.css('display', 'none')
	noEventView.css('display', '')
}

function displayRecruitingEventList() {
  $.getJSON('/musician/listRecommand.json', function(result) {
    var templateFn = Handlebars.compile($('#recruiting-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#recruiting-event-container')
    var html = container.html()
    container.html(html + generatedHTML)
    
    controlBtns()
  }, function(err) {
    console.log(err)
  })
}


function controlBtns() {
	var applicantBtn = $('.recruiting-applicant-open-btn'),
		calleeBtn = $('.recruiting-callee-btn'),
		eventBox = $('.event-box');
	
applicantBtn.on('click', function(e) {
	if($(this).attr('data-open') == "true") {
		$(this).html('지원자 <i class="fa fa-angle-down" aria-hidden="true"></i>')
					.attr('data-open', false)
	} else {
		$(this).html('지원자 <i class="fa fa-angle-up" aria-hidden="true"></i>')
					.attr('data-open', true)
	}
	$(this).siblings('.recruiting-applicant-box').toggle( "fold", 500 );
	e.preventDefault()
})

calleeBtn.on('click', function(e) {
	if($(this).attr('data-open') == "true") {
		$(this).html('내가 요청한 뮤지션 <i class="fa fa-angle-down" aria-hidden="true"></i>')
					.attr('data-open', false)
	} else {
		$(this).html('내가 요청한 뮤지션 <i class="fa fa-angle-up" aria-hidden="true"></i>')
					.attr('data-open', true)
	}
	$(this).siblings('.recruiting-callee-box').toggle( "fold", 500 );
	e.preventDefault()
})

eventBox.on('click', function(e) {
	location.href = 'detail.html'
})

}