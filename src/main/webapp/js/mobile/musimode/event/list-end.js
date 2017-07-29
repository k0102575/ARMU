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
  $.getJSON('/event/listOngoing.json', function(result) {
    var templateFn = Handlebars.compile($('#end-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#end-event-container')
    var html = container.html()
    container.html(html + generatedHTML)
  }, function(err) {
    console.log(err)
  })
}