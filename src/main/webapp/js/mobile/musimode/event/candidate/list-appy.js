"use strict"
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-up',
    outClass: 'fade-out-down',
    inDuration: 500,
    outDuration: 700,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

displayAppyEventList()


function displayAppyEventList() {
  $.getJSON('/event/listMusiAppy.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    console.log(result.data)
    var templateFn = Handlebars.compile($('#appy-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#appy-event-container')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $('.loader-box').hide();
    
    $('.event-box').on('click', function(e) {
      location.href = '../detail.html?no=' + $(this).attr('data-no')
    })
  }, function(err) {
    console.log(err)
  })
}

