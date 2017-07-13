"use strict"

var noEventView = $('.act-no-event'),
    yesEventView = $('.act-yes-event');

var isEvent = true;

if(isEvent) {
  noEventView.css('display', 'none')
  yesEventView.css('display', '')
} else {
  yesEventView.css('display', 'none')
  noEventView.css('display', '')
}
