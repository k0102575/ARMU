
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
    $('#guide-no').text(nick1.length+'/20')
    if($('#nick').val().length != 0) {
      $('#dn').css('display','block')
    }
    $('#dn').on('click', function(){
      delText()
    })
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
  $.post('/member/updateNick.json',
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
    if(c) {
       $('#dn').css('display','none')
    } else {
      $('#dn').css('display','block')
    }
    if(b== a || c){
      $('#nick-enter').css('color','lightgray')
    } else {
      $('#nick-enter').css('color','#ffec86')
      $('#nick-enter').on('click', function(){
        updateNick()
      })
    }
  })
}

function delText() {
  $('#nick').val('')
  $('#dn').css('display','none')
  $('#guide-no').text($('#nick').val().length+'/20')
  $('#nick-enter').css('color','lightgray')
}
