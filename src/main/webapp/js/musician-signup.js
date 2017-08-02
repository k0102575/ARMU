  $("#prev-page").click(function() {
	location.href="/mobile/index.html"
  }) // #prev-page().click

  
  $('#fileupload').fileupload({
    url: '/musician/signUpPhoto.json',        // 서버에 요청할 URL
    dataType: 'json', /* "서버가 보낸 데이터가 JSON 문자열이다. 자바스크립트 객체로 바꿔라." 라는 의미*/
    done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
      console.log('done()...');
      console.log(data.result);
      var file = data.result.fileList[0];
      $.each(data.result.fileList, function(index, file) {
        console.log(file.filename + " : " + file.filesize)
      });
    }
})