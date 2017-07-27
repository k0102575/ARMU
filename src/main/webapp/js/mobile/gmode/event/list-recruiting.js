"use strict"

var isEvent = true;

var noEventView = $('.recruiting-no-event'),
yesEventView = $('.recruiting-yes-event');

if(isEvent) {
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
	var applicantBtn = $('#recruiting-applicant-btn'),
		applicantBox = $( "#recruiting-applicant-box" ),
		calleeBtn = $('#recruiting-callee-btn'),
		calleeBox = $('#recruiting-callee-box');
	
applicantBtn.on('click', function(e) {
	if(applicantBtn.attr('data-open') == "true") {
		applicantBtn.html('지원자 <i class="fa fa-angle-down" aria-hidden="true"></i>')
					.attr('data-open', false)
	} else {
		applicantBtn.html('지원자 <i class="fa fa-angle-up" aria-hidden="true"></i>')
					.attr('data-open', true)
	}
	applicantBox.toggle( "fold", 500 );
	e.preventDefault()
})

calleeBtn.on('click', function(e) {
	if(calleeBtn.attr('data-open') == "true") {
		calleeBtn.html('내가 요청한 뮤지션 <i class="fa fa-angle-down" aria-hidden="true"></i>')
					.attr('data-open', false)
	} else {
		calleeBtn.html('내가 요청한 뮤지션 <i class="fa fa-angle-up" aria-hidden="true"></i>')
					.attr('data-open', true)
	}
	calleeBox.toggle( "fold", 500 );
	e.preventDefault()
})


}