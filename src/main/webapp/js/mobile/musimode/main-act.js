"use strict"

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
   })
   
    var templateFn = Handlebars.compile($('#noti-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#noti-container')
    var html = container.html()
    container.html(html + generatedHTML)
  }, function(err) {
    console.log(err)
  })
}




function setMessage(item) {
  if(item.type == 'pr') {
    item.message = item.writer.name + '님이 "' + item.event.title + '" 이벤트에 참여해주시기를 요청하셨습니다.'
  } else if(item.type == 'appy_reject') {
    item.message = item.writer.name + '님이 "' + item.event.title + '"에 대한 지원을 거절하셨습니다.'
  } else if(item.type == 'mtc') {
    item.message = item.writer.name + '님의 "' + item.event.title + '" 이벤트와 매칭이 확정되었습니다! 메시지를 보내보세요.'
  } else if(item.type == 'evn_today') {
    item.message = '오늘은 ' + item.writer.name + '님과 매칭된 "' + item.event.title + '" 이벤트 당일입니다!'
  } else if(item.type == 'evn_edit') {
    item.message = item.writer.name + '님이 "' + item.event.title + '" 이벤트를 변경하여 지원이 취소되었습니다.'
  } else if(item.type == 'evn_delete') {
    item.message = item.writer.name + '님이 "' + item.event.title + '" 이벤트를 삭제하여 지원이 취소되었습니다.'
  } else if(item.type == 'rev') {
    item.message = item.writer.name + '님이 새로운 리뷰를 작성하셨습니다. 확인해보세요!'
  } else {
    item.mesage = ''
  }
}