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
value = '',
messageBox = $('#messageBox'),
sendBtn = $('#send-btn'),
msgInput = $('#msg-input'),
msgInputBox = $('.message-input-box');

messageBox.scrollTop(messageBox.prop('scrollHeight'));

sendBtn.on('click', function() {
	appendChatBubble()
})

msgInput.keyup(function (e) {
	if (e.keyCode == 13) {
		sizeUp()
	}
})//줄바꿈하기

function sizeUp() {
	  msgInput.css('height', msgInput.prop('scrollHeight') + 12 + 'px');
	  msgInputBox.css('height', msgInputBox.prop('scrollHeight') + 12 + 'px');
	  msgInputBox.css('line-height', msgInputBox.prop('scrollHeight') + 12 + 'px');
	}

function sizeBack() {
	msgInput.css('height', '4vh')
	msgInputBox.css('height', '7vh')
	msgInputBox.css('line-height', '7vh')
}

function appendChatBubble() {
	
	value = msgInput.val()
	
	/*space나 줄바꿈만 있는 경우 버블을 추가하지 않음.*/
	var text = value.replace(/\r?\n/g, '');
	text = text.replace(/\s/g, "");
	if(!text) return;
	
	value = value.replace(/\r?\n/g, '<br />');
	$('<div>').addClass('chat-balloon')
	.addClass(myAlias ? "me" : "him")
	.html(value)
	.appendTo(messageBox)
	.append($('<img>').attr('src', myAlias ? '' : '../musician/photo/m1.jpg').addClass(myAlias ? '' : 'sender-img'))
	.append($('<div>').addClass('tail').addClass(myAlias ? "me-tail" : "him-tail"))
	.append($('<div>').addClass('tail-white').addClass(myAlias ? "me-tail-white" : "him-tail-white"))
	msgInput.val('')
	
	msgInput.focus()
	sizeBack()
	
	resizeMessageBoxPadding()
	messageBox.scrollTop(messageBox.height())

	var num = parseInt(Math.random() * 100)
	if (num > 50) {
		myAlias = false
	} else {
		myAlias = true
	}
}


function resizeMessageBoxPadding() {
	var padding = parseFloat(messageBox.css('padding-top')) 
	if(padding < 10 || padding == 10) return;
	
	var lastBalloon = $('.chat-balloon:last')
	var totalBalloonHeight = parseFloat(lastBalloon.css('height'))
							+ parseFloat(lastBalloon.css('margin-top')) 
							+ parseFloat(lastBalloon.css('margin-bottom'))
							+ parseFloat(lastBalloon.css('padding-top'))
							+ parseFloat(lastBalloon.css('padding-bottom'));
	
	var result = padding - totalBalloonHeight;
	if(result < 10) {
		result = 10;
	}
	
	messageBox.css('padding-top', result + 'px')
}