"use strict"
moment().format();
console.log(moment.locale());
var host = '13.125.35.189',
	  javaPort = 80,
    nodePort = 8888;

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



var params = decodeURIComponent(location.href).split('?')[1],
    receiverNo = parseInt(params.split('&')[0].split('=')[1]),
    nickName = params.split('&')[1].split('=')[1],
    senderNo = parseInt(params.split('&')[2].split('=')[1]),
    mode = params.split('&')[3].split('=')[1];

var isOpponentOnline = 'N';
var photo;
var ws;
var timeBefore;
var dateBefore;
var isMyAliasBefore;

/*get요청 파라미터 안보이게 하기*/
window.history.replaceState(null, null, "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);


$(window).on('load', function() {
  var messageBox = $('#messageBox'),
    sendBtn = $('#send-btn'),
    msgInput = $('#msg-input'),
    msgInputBox = $('.message-input-box'),
    backBtn = $('.back-btn');

  messageBox.scrollTop(messageBox.prop('scrollHeight'));
  $('.chat-msg-header').text(nickName)


  sendBtn.on('click', function() {
    appendChatBubble(msgInput.val(), true, true, isOpponentOnline)
    //내가 쓴 메시지이므로 datetime정보를 넣지 않으면, 알아서 지금 시간으로 처리함
  })

  backBtn.on('click', function() {
    location.href = 'http://' + host + ':'+ javaPort + '/mobile/chat/index.html?mode=' + mode
  })

  getPhotoPath()
  //사진 path를 java서버에서 가져온 후,
  //displayChatBubbles()를 실행하여 이전 채팅 내역을 보여주고,
  //readyChat()을 실행하여 nodeJS서버와 websocket 연결함

  function getPhotoPath() {
    $.post('/chat/getPhotoPath.json', {
        'no': receiverNo
      },
      function(result) {
        photo = result.photo
        displayChatBubbles()
        readyChat()
      }).done(function() {}).fail(function() {
      console.log('post요청 실패')
    }).always(function() {});
  }

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
          appendChatBubble(item.msg, item.who == senderNo, false, item.isread, item.date)
        });
      }).done(function() {}).fail(function() {
      console.log('post요청 실패')
    }).always(function() {});
  } //displayChatBubbles()



  function appendChatBubble(value, isMyAlias, isSendData, isread, datetime) {
    /*space나 줄바꿈만 있는 경우 버블을 추가하지 않음.*/
    var text = value.replace(/\r?\n/g, '');
    text = text.replace(/\s/g, "");
    if (!text) return;

    var sendValue = value;//서버에 보내는 내용엔 <br>과같은 HTML tag가 없어야 하므로 따로 둠

    displayDateLine(datetime)

    value = value.replace(/\r?\n/g, '<br />');
    var readTag = $('<span>').addClass('read').addClass(isMyAlias ? "my-read" : 'his-read')
    var timeTag = $('<span>').addClass('time').addClass(isMyAlias ? "my-time" : 'his-time')
    var balloon = $('<div>').addClass('chat-balloon')
                            .addClass(isMyAlias ? "me" : "him")
                            .html(value)
                            .appendTo(messageBox)
                            .append($('<img>').attr('src', isMyAlias ? '' : photo + '_80.png').addClass(isMyAlias ? '' : 'sender-img'))
                            .append($('<div>').addClass('tail').addClass(isMyAlias ? "me-tail" : "him-tail"))
                            .append($('<div>').addClass('tail-white').addClass(isMyAlias ? "me-tail-white" : "him-tail-white"))
                            .append(readTag)
                            .append(timeTag)


    displayReadTag(balloon, readTag, isMyAlias, isread)
    displayTimeTag(balloon, timeTag, isMyAlias, readTag, datetime)

    if (isSendData) {
      sendChat(sendValue)
      msgInput.val('')
      msgInput.focus()
    }//클라이언트가 상대에게(서버에) 보내는 메시지인 경우에만 실행

    sizeBack()//inputbox의 크기를 이전 상태로 되돌려놓음

    resizeMessageBoxPadding()//추가된 메시지 크기에 맞게 박스 크기(패딩)를 줄여, 아래에 추가된 메시지가 보일 수 있게 함

    var viewHeight
    if (messageBox.height() < messageBox.prop("scrollHeight")) viewHeight = messageBox.prop("scrollHeight")
    else viewHeight = messageBox.height()
    messageBox.scrollTop(viewHeight)//가장 마지막 메시지가 보일 수 있도록 스크롤을 가장 아래로 내림
  }//appendChatBubble()



  function sendChat(value) {
    var obj = {
      'message': value
    }
    ws.send(JSON.stringify(obj))
  }


  function displayReadTag(balloon, readTag, isMyAlias, isread) {
    if (isMyAlias) {
      readTag.css('right', parseFloat(balloon.css('width')) + parseFloat(balloon.css('padding-left')) +
        parseFloat(balloon.css('margin-right')))
      if (isread == 'N') {
        readTag.html('안읽음')
      } else {
        readTag.html('읽음<i class="fa fa-check" aria-hidden="true"></i>')
      }
    } else {
      readTag.css('left', parseFloat(balloon.css('width')) + parseFloat(balloon.css('padding-right')) +
          parseFloat(balloon.css('padding-left')) + 2.5)
        .html('읽음<i class="fa fa-check" aria-hidden="true"></i>')
    }
  }//displayReadTag


  function displayTimeTag(balloon, timeTag, isMyAlias, readTag, datetime) {
    var sendDate;
    var htmlTime = '';

    if(datetime) sendDate = moment(datetime) //받아온 일시정보가 있으면, 즉 이미 있는 채팅내역을 뿌리는 경우
    else sendDate = moment() //받아온 일시정보가 없으면, 즉 내가 보내는 메시지를 뿌리는 경우

    if(!dateBefore) dateBefore = sendDate

    if(sendDate.isAfter(dateBefore, 'minute')) {
      htmlTime = sendDate.format('a hh:mm')
      dateBefore = sendDate
    }//같은 시간(분 기준)에 보낸 것은 굳이 time tag를 달지 않기 위함

    if(isMyAliasBefore == null || isMyAliasBefore != isMyAlias) {
      isMyAliasBefore = isMyAlias
      htmlTime = sendDate.format('a hh:mm')
    }//같은 시간이더라도 날짜 태그 밑에 새로 오는 메시지라던가,
    //두 사람의 각 첫번째 메시지에는 time tag를 달도록 함



    if (isMyAlias) {
      timeTag.css('right', parseFloat(balloon.css('width')) + parseFloat(balloon.css('padding-left')) +
                parseFloat(balloon.css('margin-right')) + parseFloat(readTag.css('width')))
              .html(htmlTime)
    } else {
      timeTag.css('left', parseFloat(balloon.css('width')) + parseFloat(balloon.css('padding-right')) +
                parseFloat(balloon.css('padding-left')))
              .html(htmlTime)
    }
  }//displayTimeTag


  function displayDateLine(datetime) {
    var sendDate;
    var htmlDate = '';

    if(datetime) sendDate = moment(datetime) //받아온 일시정보가 있으면, 즉 이미 있는 채팅내역을 뿌리는 경우
    else sendDate = moment() //받아온 일시정보가 없으면, 즉 내가 보내는 메시지를 뿌리는 경우

    if(!dateBefore) dateBefore = sendDate

    if(sendDate.isAfter(dateBefore, 'day')) {
      htmlDate = sendDate.format('MM월 DD일')
      dateBefore = sendDate
      $('<p>').addClass('date').addClass('chat-balloon').appendTo(messageBox).html(htmlDate)
      isMyAliasBefore = null//날짜 표시 다음에 오는 메시지에는 time tag를 달 수 있도록 비워줌
      resizeMessageBoxPadding()
    }
  }//displayDateLine





  function readyChat() {
    ws = new WebSocket('ws://' + host + ':' + nodePort + '/chat/send.json');

    ws.onopen = function(event) {
      var obj = {
        'receiver': receiverNo,
        'sender': senderNo,
        'isMusician': (mode == 'musimode' ? 'Y' : 'N')
      }
      ws.send(JSON.stringify(obj))//서버와 연결되면 내가 누구이고 상대가 누구인지, 내가 뮤지션인지 정보를 보내서 서버에서 셋팅할 수 있도록 함
    }

    ws.onmessage = function(event) {
      var data = JSON.parse(event.data)
      if (data.sender == 'him') {//상대가 데이터를 보낸 경우
        if (data.readChange == 'Y') {//단순히 들어왔다는 것을 알린 경우(메시지 내용 없음)
          console.log('읽음정보 업데이트!')
          $('.read').html('읽음<i class="fa fa-check" aria-hidden="true"></i>')
          isOpponentOnline = 'Y';
        } else {//상대가 어떤 메시지를 보낸 경우
          appendChatBubble(data.message, false, false, isOpponentOnline, data.datetime)
                          /*(value, isMyAlias, isSendData, isread, datetime)*/
        }
      } else if(data.exit) {//상대가 퇴장한 경우(이 메시지도 상대에게서 오지만, data.sender정보가 넘어오지 않음)
        isOpponentOnline = "N"
        console.log('상대방 퇴장함')
      }
    }//ws.onmessage()

  }//readyChat()



  function resizeMessageBoxPadding() {
    var padding = parseFloat(messageBox.css('padding-top'))

    if (padding < 30 || padding == 30) {
      return;
    }

    var lastBalloon = $('.chat-balloon:last')
    var totalBalloonHeight = parseFloat(lastBalloon.css('height')) +
      parseFloat(lastBalloon.css('margin-top')) +
      parseFloat(lastBalloon.css('margin-bottom')) +
      parseFloat(lastBalloon.css('padding-top')) +
      parseFloat(lastBalloon.css('padding-bottom'));

    var result = padding - totalBalloonHeight;
    if (result < 30) {
      result = 30;
    }

    messageBox.css('padding-top', result + 'px')
  } //resizeMessageBoxPadding()



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







$(window).scroll(function() {
   if ($(document).scrollTop() >= 1) {
      $("html").css({
         "touch-action": "auto"}
      );
   } else {
      $("html").css({
         "touch-action": "pan-down"
      });
   }
});
