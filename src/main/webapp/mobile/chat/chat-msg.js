"use strict"

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-left',
    inDuration: 500,
    outDuration: 700,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function(url) {
      window.location.href = url;
    }
  });
})//$(document).ready()

var myAlias = true,
    value1 = "아아호호아하옿아 ㅏ아아아아에에 아아아에에아아아에에아아아에에 아아아에에",
    value2 = "아아호호아하옿아 ㅏ아아아아에에",
    value3 = "아아호호",
    value = value1,
    messageBox = $('#messageBox'),
    sendBtn = $('#send-btn');

var num;
sendBtn.on('click', function() {
	//.append($('<div>').addClass(myAlias ? '' : 'sender-img').append($('<img>').attr('src', '../musician/photo/m1.jpg')))
  $('<div>').addClass('chat-balloon')
  			.addClass(myAlias ? "me" : "him")
  			.html(value)
            .appendTo(messageBox)
            .append($('<img>').attr('src', myAlias ? '' : '../musician/photo/m1.jpg').addClass(myAlias ? '' : 'sender-img'))
            .append($('<div>').addClass('tail').addClass(myAlias ? "me-tail" : "him-tail"))
            .append($('<div>').addClass('tail-white').addClass(myAlias ? "me-tail-white" : "him-tail-white"))
  messageBox.scrollTop(messageBox.prop('scrollHeight'));

  num = parseInt(Math.random() * 100)

  if (num > 50) {
    myAlias = false
    value = value1
  } else {
    myAlias = true
    value = value1
  }
})//sendBtn.on()
