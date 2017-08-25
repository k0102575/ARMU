
'use strict'



var mno;
var pwd1;
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
    pwd1 = result.data.profile.password
//    checkPwd1(pwd1)
//    checkPwd2()
    return mno=result.data.profile.no
  }, function(err) {
    console.log(err)
  })
}

function updatePwd() {
  var pwd= $('#pwd3')
  $('#pwd-enter').on('click', function() {
    $.post('/member/updatePwd.json',
        {'password':pwd.val(),
         'no': mno
        }, function(result) {
//  location.href = '/mobile/mypage/mypage.html'
        },'json')
    swal({
      title: "비밀번호가 변경되었습니다.",
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    }, function() {
      history.go(-1)
    });
  })
}

var x,y,z

$('body').on('keyup', '#pwd1', function() {
  var b = $('#pwd1').val()
    var result = ("*"+CryptoJS.SHA1(CryptoJS.SHA1(b))).toUpperCase();
    x=(pwd1==result)
    if(pwd1!=result){
      $('.checkError').css('display','block')
    } else {
      $('#pwd1').css('border','0')
      $('.checkError').css('display','none')
      if (x&&y&&z) {
        $('#pwd-enter').css('color','#ffec86')
        updatePwd()
      }
    }
})

$('body').on('keyup','#pwd3,#pwd2',function() {
  y=($('#pwd2').val() == $('#pwd3').val())
    z= ($('#pwd2').val()!= '')
    
    if($('#pwd2').val() != $('#pwd3').val()) {
      $('.checkError2').css('display','block')
      $('#pwd-enter').css('color','lightgray')
    } else {
      $('.checkError2').css('display','none')
      if (x&&y&&z) {
        $('#pwd-enter').css('color','#ffec86')
        updatePwd()
      }
    }
})