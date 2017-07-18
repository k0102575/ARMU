"use strict"

var noEventView = $('.act-no-event'),
    yesEventView = $('.act-yes-event');

var isEvent = true;


if(isEvent) {
  noEventView.css('display', 'none')
  yesEventView.css('display', '')
  // $.when(displayOngoingEventList(), displayNowRecruitingEventList())
  displayOngoingEventList();
} else {
  yesEventView.css('display', 'none')
  noEventView.css('display', '')
}

function displayOngoingEventList() {
  $.getJSON('json/act-ongoing-event.json', function(result) {
    var templateFn = Handlebars.compile($('#act-ongoing-event-template').text())
    var generatedHTML = templateFn(result)
    var container = $('#act-ongoing-event-container')
    var html = container.html()
    container.html(html + generatedHTML)

    displayNowRecruitingEventList();
  }, function(err) {
    console.log(err)
  })
}


function displayNowRecruitingEventList() {
  $.getJSON('json/act-now-recruiting-event.json', function(result) {
    var templateFn = Handlebars.compile($('#act-now-recruiting-event-template').text())
    var generatedHTML = templateFn(result)
    var container = $('#act-now-recruiting-event-container')
    var html = container.html()
    container.html(html + generatedHTML)

    displayRecentEventList();
  }, function(err) {
    console.log(err)
  })
}


function displayRecentEventList() {
  $.getJSON('json/act-recent-event.json', function(result) {
    var templateFn = Handlebars.compile($('#act-recent-event-template').text())
    var generatedHTML = templateFn(result)
    var container = $('#act-recent-event-container')
    var html = container.html()
    container.html(html + generatedHTML)
  }, function(err) {
    console.log(err)
  })
}
