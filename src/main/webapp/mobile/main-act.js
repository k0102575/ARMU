"use strict"

var noEventView = $('.act-no-event'),
    yesEventView = $('.act-yes-event');

var isEvent = true;


if(isEvent) {
  noEventView.css('display', 'none')
  yesEventView.css('display', '')
  displayOngoingEventList();
} else {
  yesEventView.css('display', 'none')
  noEventView.css('display', '')


}


function displayOngoingEventList() {
  $.getJSON('json/act-ongoing-event.json', function(result) {
    var list = result.list
    console.log(result);
    var templateFn = Handlebars.compile($('#ongoing-event-template').text())
    var generatedHTML = templateFn(result)
    var container = $('#act-ongoing-event-container')
    var html = container.html()
    container.html(html + generatedHTML)
    console.log(generatedHTML)
  }, function(err) {
    log('err')
  })
}
