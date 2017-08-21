"use strict"

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
     if(item.type == '이벤트 지원') {
       item.contents = item.musician.nickName + '님이 "' + item.event.title +
                       '" 이벤트에 지원하셨습니다.'
     } else if(item.type == '요청 수락') {
       item.contents = item.musician.nickName + '님이 "' + item.event.title +
       '"에 대한 참여요청을 수락하셨습니다. 매칭을 원하시면 매칭확정을 진행해주세요!'
     }
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