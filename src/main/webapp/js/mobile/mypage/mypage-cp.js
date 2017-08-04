
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
    var pwd1 = result.data.profile.password
    checkPwd1(pwd1)
    checkPwd2()
    return mno=result.data.profile.no
  }, function(err) {
    console.log(err)
  })
}

function updatePwd() {
  console.log(mno)
  var pwd= $('#pwd3')  
  console.log(pwd.val())
  $.post('/member/updatePwd.json',
      {'password':pwd.val(),
        'no': mno
      }, function(result) {
//  location.href = '/mobile/mypage/mypage.html'
  },'json')
}


function checkPwd1(a) {
  $('#pwd1').on('keyup',function() {
    var b = $('#pwd1').val()
    var result = ("*"+CryptoJS.SHA1(CryptoJS.SHA1(b))).toUpperCase();
    if(a!=result){
      $('.checkError').css('display','block')
    } else {
      $('#pwd1').css('border','0')
      $('.checkError').css('display','none')
    }
  })
}

function checkPwd2() {
  $('#pwd3,#pwd2').on('keyup', function() {
    if($('#pwd2').val() != $('#pwd3').val()) {
      $('.checkError2').css('display','block')
    } else {
      $('.checkError2').css('display','none')
      $('#pwd-enter').on('click', function() {
        updatePwd()
      })
    }
  })
}



$('#pwd-enter').on('click', function () {
  swal({
    title: "비밀번호가 변경되었습니다.",
    type: "success",
    showCancelButton: false,
    confirmButtonColor: "#8069ef",
    confirmButtonText: "확인",
    customClass: "checkSwal"
  }, function() {
    location.href = '/mobile/mypage/mypage.html'
  });
})

