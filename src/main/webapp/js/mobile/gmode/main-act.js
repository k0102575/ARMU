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