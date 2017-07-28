
'use strict'


$('#profile-img, #ccc').on('click', function() {
  $('#profile-toggle').toggle("slide", {
    direction: "down"
  }, 300);
  $('#profile-backscreen').css('display', 'block');
  // container.css('position', '').css('overflow', '');
})

$('#profile-backscreen, #cancel').on('click', function() {
  $('#profile-toggle').toggle("slide", {
    direction: "down"
  }, 300);
  $('#profile-backscreen').css('display', 'none');
  // container.css('position', '').css('overflow', '');
})
//
var a= $('#pwd01'),
b= $('#pwd02')
$('#cp-change').on('click',function() {
  if(a.val() != b.val()){
    alert('비밀번호가 맞지 않읍니다.')
  } else {
    alert('변경 되었읍니다.')
  }
})

displayProfile()

function displayProfile() {
  $.getJSON('/musician/getProfile.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }

    if(result.data == "browse") {
//    hideRecommandList()
      return;
    }//받아온 데이터가 없는 경우

    var templateFn = Handlebars.compile($('#profile-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#profile-container')
    var html = container.html()
    container.html(html + generatedHTML)

    console.log(result.data)
  }, function(err) {
    console.log(err)
  })
}

$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON('/auth/logout.json', function(result) {
    location.href = '/mobile/index.html'
  })
})

