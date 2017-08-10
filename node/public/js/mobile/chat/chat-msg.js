"use strict"
moment().format();

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-left',
    inDuration: 700,
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
}) //$(document).ready()


var params = decodeURIComponent(location.href).split('?')[1],
  receiverNo = parseInt(params.split('&')[0].split('=')[1]),
  nickName = params.split('&')[1].split('=')[1],
  senderNo = parseInt(params.split('&')[2].split('=')[1]),
	mode = params.split('&')[3].split('=')[1];

  window.history.pushState("object or string", "Title", "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);

$(window).on('load', function() {
  var messageBox = $('#messageBox'),
    sendBtn = $('#send-btn'),
    msgInput = $('#msg-input'),
    msgInputBox = $('.message-input-box');

	var photo;

	getPhotoPath()

	function getPhotoPath() {
		$.post('/chat/getPhotoPath.json',
		{'no' : receiverNo},
      function(result) {
        photo = result.photo
				//displayChatBubbles()
      }).done(function() {}).fail(function() {
      console.log('post요청 실패')
    }).always(function() {});
	}

  messageBox.scrollTop(messageBox.prop('scrollHeight'));
  $('.chat-msg-header').text(nickName)



// displayChatBubbles()

  function displayChatBubbles() {
		var url;
    if (mode == 'musimode') url = '/chat/listMusi.json'
		else url = '/chat/list.json'

    $.post(url, {
        "senderNo": senderNo,
        "receiverNo": receiverNo,
				"photo": photo
      },
      function(result) {
        $.each(result.list, function(i, item) {
					photo = item.path;
          appendChatBubble(item.msg, item.who == senderNo, false)
        });
      }).done(function() {}).fail(function() {
      console.log('post요청 실패')
    }).always(function() {});
  } //displayChatBubbles()



  function appendChatBubble(value, isMyAlias, isSendData) {
    /*space나 줄바꿈만 있는 경우 버블을 추가하지 않음.*/
    var text = value.replace(/\r?\n/g, '');
    text = text.replace(/\s/g, "");
    if (!text) return;

		var sendValue = value;

		value = value.replace(/\r?\n/g, '<br />');
    $('<div>').addClass('chat-balloon')
      .addClass(isMyAlias ? "me" : "him")
      .html(value)
      .appendTo(messageBox)
      .append($('<img>').attr('src', isMyAlias ? '' : photo + '_80.png').addClass(isMyAlias ? '' : 'sender-img'))
      .append($('<div>').addClass('tail').addClass(isMyAlias ? "me-tail" : "him-tail"))
      .append($('<div>').addClass('tail-white').addClass(isMyAlias ? "me-tail-white" : "him-tail-white"))

		console.log(sendValue)
		console.log(value)
    if (isSendData) sendChat(sendValue)

    msgInput.val('')

    msgInput.focus()
    sizeBack()

    resizeMessageBoxPadding()

    messageBox.scrollTop(messageBox.height())
  }


function readyChat() {
	var ws = new WebSocket('ws://192.168.0.22:8888/chat/send.json');

	ws.onopen = function(event) {
		var obj = {
			'receiver': receiverNo,
			'sender': senderNo,
			'isMusician': (mode == 'musimode' ? 'Y' : 'N'),
			'photo': photo
		}
		ws.send(JSON.stringify(obj))
	}

	ws.onmessage = function(event) {
		var data = JSON.parse(event.data)
		console.log(data)
		if (data.sender == 'him') appendChatBubble(data.message, false, false)
	};
}


  function sendChat(value) {
    var obj = {
      'message': value
    }
    ws.send(JSON.stringify(obj))
  }




  function resizeMessageBoxPadding() {
    var padding = parseFloat(messageBox.css('padding-top'))

    if (padding < 10 || padding == 10) {
      return;
    }

    var lastBalloon = $('.chat-balloon:last')
    var totalBalloonHeight = parseFloat(lastBalloon.css('height')) +
      parseFloat(lastBalloon.css('margin-top')) +
      parseFloat(lastBalloon.css('margin-bottom')) +
      parseFloat(lastBalloon.css('padding-top')) +
      parseFloat(lastBalloon.css('padding-bottom'));


    var result = padding - totalBalloonHeight;
    if (result < 10) {
      result = 10;
    }

    messageBox.css('padding-top', result + 'px')
  } //resizeMessageBoxPadding()


  sendBtn.on('click', function() {
    appendChatBubble(msgInput.val(), true, true)
  })

  msgInput.keyup(function(e) {
    if (e.keyCode == 13) {
      sizeUp()
    }
    e.preventDefault()
  }) //줄바꿈하기

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

})
