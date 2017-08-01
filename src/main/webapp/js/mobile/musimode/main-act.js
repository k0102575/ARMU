"use strict"

displayNotiList()

function displayNotiList() {
  $.getJSON('/notification/listNoti.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    
    console.log(result.data)
    var templateFn = Handlebars.compile($('#noti-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#noti-container')
    var html = container.html()
    container.html(html + generatedHTML)
    console.log(generatedHTML)
  }, function(err) {
    console.log(err)
  })
}
