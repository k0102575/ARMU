  $("#prev-page").click(function() {
	location.href="/mobile/index.html"
  }) // #prev-page().click

  
$('#fi-photoupload').fileupload({
  url: '/member/signUpPhoto.json',
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  singleFileUploads: true, // 한 요청에 여러 개의 파일을 전송시키기.
  autoUpload: true,        // 파일을 추가할 때 자동 업로딩 설정.
  disableImageResize: /Android(?!.*Chrome)|Opera/
    .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
    previewMaxWidth: 100,   // 미리보기 이미지 너비
    previewMaxHeight: 100,  // 미리보기 이미지 높이 
    previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
    submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
    }, 
    processalways: function(e, data) {
      var imagesDiv = $('#signup-preview');
      imagesDiv.attr('src', '');
      console.log(data)
        try {
          if (data.files[0].preview.toDataURL) {
//            imagesDiv.css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');
            imagesDiv.attr('src',data.files[0].preview.toDataURL())
          }
        } catch (err) {}
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