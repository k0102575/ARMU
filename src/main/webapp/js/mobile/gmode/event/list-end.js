"use strict"

var isEndEvent = true;

var noEventView = $('.end-no-event'),
yesEventView = $('.end-yes-event');

if(isEndEvent) {
	noEventView.css('display', 'none')
	yesEventView.css('display', '')
	
	displayEndEventList()
} else {
	yesEventView.css('display', 'none')
	noEventView.css('display', '')
}

function displayEndEventList() {
  $.getJSON('/event/listRecommand.json', function(result) {
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
	var applicantBtn = $('.end-applicant-btn'),
		eventBox = $('.event-box');
	
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


eventBox.on('click', function(e) {
	location.href = 'detail.html'
})

}

