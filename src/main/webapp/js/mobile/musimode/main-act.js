"use strict"
HandlebarsIntl.registerWith(Handlebars);
moment().format();

$('.loader-box').show()
displayNotiList()

function displayNotiList() {
  $.getJSON('/notification/listMusiNoti.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    console.log(result.data)
    $.each(result.data.listNoti, function(i, item) {
     setMessage(item)
     setUnread(item)
     setDate(item)
   })
   
   
    var templateFn = Handlebars.compile($('#noti-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#noti-container')
    var html = container.html()
    $('.loader-box').hide()
    container.html(html + generatedHTML).hide().fadeIn(700)
    
    $('.noti').on('click', function() {
      setClickEvents($(this))
    })
  }, function(err) {
    console.log(err)
  })
}




function setMessage(item) {
  if(item.type == 'pr') {
    item.message = item.writer.name + '님이 "' + item.event.title + '" 이벤트에 참여해주시기를 요청하셨습니다.'
  } else if(item.type == 'appy_reject') {
    item.message = item.writer.name + '님이 "' + item.event.title + '"에 대한 지원을 거절하셨습니다. 다른 이벤트를 찾아보세요!'
  } else if(item.type == 'mtc') {
    item.message = item.writer.name + '님의 "' + item.event.title + '" 이벤트와 매칭이 확정되었습니다! 메시지를 보내보세요.'
  } else if(item.type == 'evn_today') {
    item.message = '오늘은 ' + item.writer.name + '님과 매칭된 "' + item.event.title + '" 이벤트 당일입니다! 이벤트 정보를 꼼꼼히 확인하세요!'
  } else if(item.type == 'evn_edit') {
    item.message = item.writer.name + '님이 "' + item.event.title + '" 이벤트를 변경하여 지원이 취소되었습니다. 변경된 내용을 확인하고 다시 지원해주세요.'
  } else if(item.type == 'evn_delete') {
    item.message = item.writer.name + '님이 "' + item.event.title + '" 이벤트를 삭제하여 지원이 취소되었습니다. 다른 이벤트를 찾아보세요!'
  } else if(item.type == 'rev') {
    item.message = item.writer.name + '님이 새로운 리뷰를 작성하셨습니다. 확인해보세요!'
  } else {
    item.mesage = ''
  }
}


function setUnread(item) {
  if(item.isread == 0) item.isread = 'unread'  
  else item.isread ='read'
}

function setClickEvents(pressedBtn) {
  var type = pressedBtn.attr('data-type'),
      no = pressedBtn.attr('data-no'),
      musicianNo =  pressedBtn.attr('data-musician-no'),
      eventNo =  pressedBtn.attr('data-event-no');
  
  $.post('/notification/setRead.json', {'no': no}, function(result) {
    if(result.status != 'success') {
      console.error("JSON() 실패: ", result.status)
      return;
    }
    
    if(type == 'pr') location.href = 'event/candidate/index.html?tab=pr'
    else if(type == 'appy_reject'|| type == 'evn_delete') $('#category2').trigger('click')
    else if(type == 'mtc') $('#header-menu-email').trigger('click')
    else if(type == 'evn_today' || type == 'evn_edit') location.href = 'event/detail.html?no=' + eventNo
    else if(type == 'evn_expired') location.href = 'musi-info/index.html?no=' + musicianNo
  }, 'json')
}

function setDate(item) {
    var d = moment(item.date)
    item.date = d.format('YYYY-MM-DD')
    item.time = d.format('hh:mm:ss')
}