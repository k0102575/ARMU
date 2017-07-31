
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

var a= $('#pwd01'),
b= $('#pwd02')
$('#cp-change').on('click',function() {
  if(a.val() != b.val()){
    alert('비밀번호가 맞지 않읍니다.')
  } else {
    alert('변경 되었읍니다.')
  }
})
var mno;
displayProfile()
function displayProfile() {
  $.getJSON('/member/getProfile.json', function(result) {
    console.log(result)

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
    return mno=result.data.profile.no
    
  }, function(err) {
    console.log(err)
  })
}

$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON('/auth/logout.json', function(result) {
    location.href = '/mobile/index.html'
  })
})

var fiFilenames = $('#fi-filenames');
$('#fi-photoupload').fileupload({
  url: '/member/update.json',
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
  autoUpload: true,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
  disableImageResize: /Android(?!.*Chrome)|Opera/
        .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
  previewMaxWidth: 100,   // 미리보기 이미지 너비
  previewMaxHeight: 100,  // 미리보기 이미지 높이 
  previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
  submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
     data.formData = {
        "no": mno
    };
  }, 
  done: function (e, d) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
    console.log('done()...');
    console.log(d);

  var imlibsData = d.result;
  console.log(imlibsData.data);
    var file = imlibsData.data[0];
    console.log(file)

    $('#profile-toggle').toggle("slide", {
      direction: "down"
    }, 300);
    $('#profile-backscreen').css('display', 'none');
  }
});

