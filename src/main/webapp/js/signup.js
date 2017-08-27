var memberToggle = $("#member-toggle" ),
    emailInput = $(".email-input" ),
    passwordInput1 = $(".password-input1" ),
    passwordInput2 = $(".password-input2" ),
    nameInput = $(".name-input" ),
    phoneInput = $(".phone-input" ),
    nicknameInput = $(".nickname-input"),
    emailInputCheck = $(".email-input-check" ),
    passwordInput1Check = $(".password-input1-check" ),
    passwordInput2Check = $(".password-input2-check" ),
    nameInputCheck = $(".name-input-check" ),
    phoneInputCheck = $(".phone-input-check" ),
    nicknameInputCheck = $(".nickname-input-check")

  $("input").keypress(function(){
    emailInput.css("border-bottom", "2px solid white");
    passwordInput1.css("border-bottom", "2px solid white");
    passwordInput2.css("border-bottom", "2px solid white");
    nameInput.css("border-bottom", "2px solid white");
    phoneInput.css("border-bottom", "2px solid white");
    emailInputCheck.css("display", "none")
    passwordInput1Check.css("display", "none")
    passwordInput2Check.css("display", "none")
    nameInputCheck.css("display", "none")
    phoneInputCheck.css("display", "none")
    passwordInput1Check.html("비밀번호가 입력해주세요.")
    passwordInput2Check.html("비밀번호가 입력해주세요.")
  })

  $("#prev-page").click(function() {
    location.href="/mobile/index.html"
  }) // #prev-page().click

  $(".signup-btn").on('click', function() {
    if(emailInput.val().length == 0) {
      emailInput.css("border-bottom", "2px solid red");
      emailInputCheck.css("display", "block")
    }
    
    if(passwordInput1.val().length == 0) {
      passwordInput1.css("border-bottom", "2px solid red");
      passwordInput1Check.css("display", "block")
    }
    
    if(passwordInput2.val().length == 0) {
      passwordInput2.css("border-bottom", "2px solid red");
      passwordInput2Check.css("display", "block")
    }
    
    if(nameInput.val().length == 0) {
      nameInput.css("border-bottom", "2px solid red");
      nameInputCheck.css("display", "block")
    }
    
    if(phoneInput.val().length == 0) {
      phoneInput.css("border-bottom", "2px solid red");
      phoneInputCheck.css("display", "block")
    }
    
    if(passwordInput1.val() != passwordInput2.val()) {
      passwordInput1Check.html("비밀번호가 틀립니다.")
      passwordInput2Check.html("비밀번호가 틀립니다.")
      passwordInput1Check.css("display", "block")
      passwordInput2Check.css("display", "block")
    }
    
    
    
    if (emailInput.val().length > 0 && passwordInput1.val().length > 0 &&
        passwordInput2.val().length > 0 && nameInput.val().length > 0 && phoneInput.val().length > 0) {
      
      $.post('/member/add.json', {
        'name': nameInput.val(),
        'nickName': nicknameInput.val(),
        'phone': phoneInput.val(),
        'password': passwordInput1.val(),
        'email': emailInput.val(),
        'photo' : fiFilenames.val()
      }, function(result) {
        memberToggle.toggle()
      }, 'json')
      
    } // if
      
  }) // .singup-btn().click
  
var fiFilenames = $('#fi-filenames');
$('#fi-photoupload').fileupload({
  url: '/member/signupPhoto.json',
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
  autoUpload: true,        // 파일을 추가할 때 자동 업로딩 설정.
  disableImageResize: /Android(?!.*Chrome)|Opera/
    .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
    previewMaxWidth: 800,   // 미리보기 이미지 너비
    previewMaxHeight: 800,  // 미리보기 이미지 높이 
    previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
    submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
    }, 
    processalways: function(e, data) {
      var imagesDiv = $('#profile-img');
      imagesDiv.attr('src', '');
      for (var i = 0; i < data.files.length; i++) {
        try {
          if (data.files[i].preview.toDataURL) {
            imagesDiv.css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');
            imagesDiv.css("height", "800px");
          }
        } catch (err) {}
      }
    },
    done: function (e, d) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
      var imlibsData = d.result;
      var file = imlibsData.data[0];
      fiFilenames.val('/image/profile/' + file.filename)
    }
});
  
  $('#consent-menu').click(function() {
    window.open("clause.html");
  })
  
  $(".login-btn").on('click', function() {
	  location.href="/mobile/gmode/index.html"
  })
  
   $(".musician-btn").on('click', function() {
	  location.href="/mobile/musi_signup.html"
  })
  
