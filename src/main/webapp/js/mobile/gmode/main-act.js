"use strict"
HandlebarsIntl.registerWith(Handlebars);
var noView = $('.no-view'),
    yesView = $('.yes-view'),
    noDataView = $('.no-data-view');


displayNotiList()

function displayNotiList() {
  $.getJSON('/notification/listNoti.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    
    if(result.data == "browse") {
      hideNotiList()
      return;
    }//로그인 안 한 경우
    
    if(jQuery.isEmptyObject(result.data.listNoti)) {
      displayNoData()
      return;
    }//받아온 데이터가 없는 경우
    
   showNotiList()
    
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


function showNotiList() {
  noView.hide()
  noDataView.hide()
  yesView.show()
}
function hideNotiList() {
  yesView.hide()
  noDataView.hide()
  noView.show()
}
function displayNoData() {
  yesView.hide()
  noView.hide()
  noDataView.show()
}

function setMessage(item) {
  if(item.type == 'appy') {
    item.message = item.musician.nickName + '님이 "' + item.event.title + '" 이벤트에 지원하셨습니다.'
  } else if(item.type == 'pr_accept') {
    item.message = item.musician.nickName + '님이 "' + item.event.title + '"에 대한 참여요청을 수락하셨습니다. 매칭을 원하시면 매칭확정을 진행해주세요!'
  } 
  else if(item.type == 'pr_reject') {
    item.message = item.musician.nickName + '님이 "' + item.event.title + '"에 대한 참여요청을 거절하셨습니다.'
  } else if(item.type == 'mtc') {
    item.message = item.musician.nickName + '님이 "' + item.event.title + '" 이벤트와 매칭 확정되었습니다! 메시지를 보내보세요.'
  } else if(item.type == 'evn_expired') {
    item.message = '"' + item.event.title + '" 이벤트 날짜가 지났습니다.'
  } else if(item.type == 'evn_today') {
    item.message = '오늘은 ' + item.musician.nickName + '님과 매칭된 "' + item.event.title + '" 이벤트 당일입니다!'
  } else {
    item.mesage = ''
  }
}