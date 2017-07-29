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
	  }, function(err) {
	    console.log(err)
	  })
}