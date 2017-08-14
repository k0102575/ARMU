"use strict"

var isEvent = true;

var noEventView = $('.ongoing-no-event'),
yesEventView = $('.ongoing-yes-event');

if(isEvent) {
	noEventView.css('display', 'none')
	yesEventView.css('display', '')
	
	displayOngoingEventList()
} else {
	yesEventView.css('display', 'none')
	noEventView.css('display', '')
}



function displayOngoingEventList() {
	$.getJSON('/musician/listRecommand.json', function(result) {
	    var templateFn = Handlebars.compile($('#ongoing-event-template').text())
	    var generatedHTML = templateFn(result.data)
	    var container = $('#ongoing-event-container')
	    var html = container.html()
	    container.html(html + generatedHTML)
	    
	    controlBtns()
	  }, function(err) {
	    console.log(err)
	  })
}





function controlBtns() {
	var applicantBtn = $('#ongoing-applicant-btn'),
		applicantBox = $( "#ongoing-applicant-box" ),
		eventBox = $('.event-box');
	
applicantBtn.on('click', function(e) {
	if(applicantBtn.attr('data-open') == "true") {
		applicantBtn.html('함께하는 뮤지션 <i class="fa fa-angle-down" aria-hidden="true"></i>')
					.attr('data-open', false)
	} else {
		applicantBtn.html('함께하는 뮤지션 <i class="fa fa-angle-up" aria-hidden="true"></i>')
					.attr('data-open', true)
	}
	applicantBox.toggle( "fold", 500 );
	e.preventDefault()
})


eventBox.on('click', function(e) {
	location.href = 'detail.html'
})

}



