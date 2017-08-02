
'use strict'



var mno;
displayProfile()
function displayProfile() {
  $.getJSON('/member/getProfile.json', function(result) {

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
    $('#nick').val(result.data.profile.nickName)
    var nick1=$('#nick').val() 
//    $('#guide-no').text(nick1.length+'/20')
    abc(nick1)
    return mno=result.data.profile.no
  }, function(err) {
    console.log(err)
  })
}

function updateNick() {
  console.log(mno)
  var nick= $('#nick')  
  console.log(nick.val())
  $.post('/member/update.json',
      {'nickName':nick.val(),
        'no': mno
      }, function(result) {
  location.href = '/mobile/mypage/mypage.html'
  },'json')
}

$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON('/auth/logout.json', function(result) {
    location.href = '/mobile/index.html'
  })
})



function abc(a) {
  $('#nick').on('keyup',function() {
    var b=$('#nick').val()
    var c = (b.length==0)
    $('#guide-no').text(b.length+'/20')
    if(b== a || c){
      $('#header-enter').css('color','white')
    } else {
      $('#header-enter').css('color','#ffec86')
      $('#header-enter').on('click', function(){
        updateNick()
      })
    }
  })
}

