//서버에서 학생목록 데이터를 받아온다.

var pageNoTag = $('#page-no')  // 매번 이걸 찾으면 안좋다 찾아놓은걸 쓰자
var currPageNo = parseInt(pageNoTag.text())
tbody = $('#teacher-tbl > tbody'),
prevBtn = $('#prev-btn'),
nextBtn = $('#next-btn'),
pageSize = 3;

$(document.body).on('click', '.detail-link', function(event){
  location.href ='view.html?no=' + $(this).attr('data-no')
  event.preventDefault()
})

prevBtn.click(function() {
  displayList(currPageNo - 1)
}) //prev-btn.click

nextBtn.click(function() {
  displayList(currPageNo + 1)
})  //next-btn.click

function displayList(pageNo){
  $.getJSON('list.json', {'pageNo':pageNo, 'pageSize':pageSize}, function(result) {

    var totalCount = result.data.totalCount

    var lastPageNo = parseInt(totalCount / pageSize) + (totalCount % pageSize > 0 ? 1: 0)

    var templateFn = Handlebars.compile($('#tbody-template').text())
    var generatedHTML = templateFn(result.data)
    tbody.text('')
    tbody.html(generatedHTML)  // 문자열 html을 리턴한다.

    currPageNo = pageNo
    pageNoTag.text(currPageNo)

    if(currPageNo == 1){
      prevBtn.prop('disabled', true)
    } else {
      prevBtn.prop('disabled', false)
    }

    if(currPageNo == lastPageNo){
      nextBtn.prop('disabled', true)
    } else {
      nextBtn.prop('disabled', false)
    }

  })

} // displayList()

displayList(1)