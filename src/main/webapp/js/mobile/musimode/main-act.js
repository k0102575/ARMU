"use strict"

displayNotiList()

function displayNotiList() {
  $.getJSON('/notification/listMusiNoti.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    
    var templateFn = Handlebars.compile($('#noti-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#noti-container')
    var html = container.html()
    container.html(html + generatedHTML)
  }, function(err) {
    console.log(err)
  })
}
