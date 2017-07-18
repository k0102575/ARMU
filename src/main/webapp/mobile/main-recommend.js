"use strict"

var noEventView = $('.rec-no-event'),
    yesEventView = $('.rec-yes-event');

var isEvent = true;


if(isEvent) {
  noEventView.css('display', 'none')
  yesEventView.css('display', '')

  /*initialize swiper when document ready*/
  $(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination',
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next',
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 30,
      slidesPerView: 'auto',
      cssWidthAndHeight: true,
      paginationType: 'bullets',
      paginationElement: 'span'
    });
  });//initialize swiper ended


} else {
  yesEventView.css('display', 'none')
  noEventView.css('display', '')
}





function displayRecommandByEventMusiList() {
  $.getJSON('json/rec-by-event-musi.json', function(result) {
    var templateFn = Handlebars.compile($('#rec-by-event-musi-template').text())
    var generatedHTML = templateFn(result)
    var container = $('#rec-by-event-musi-container')
    var html = container.html()
    container.html(html + generatedHTML)
  }, function(err) {
    console.log(err)
  })
}
