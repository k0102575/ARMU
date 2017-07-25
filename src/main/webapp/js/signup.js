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
        'name': emailInput.val(),
        'nickName': nicknameInput.val(),
        'phone': phoneInput.val(),
        'password': passwordInput1.val(),
        'email': emailInput.val()
      }, function(result) {
        memberToggle.toggle()
      }, 'json')
      
    } // if
      
  }) // .singup-btn().click
  
  $('#consent-menu').click(function() {
    window.open("clause.html");
  })
