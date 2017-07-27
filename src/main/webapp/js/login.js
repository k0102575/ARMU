var  emailInput = $(".email-input"),
     passwordInput = $(".password-input"),
     emailInputCheck = $(".email-input-check"),
     passwordInputCheck = $(".password-input-check")
       
$("#prev-page").on('click', function(){
  location.href="/mobile/index.html"
  })
  
$(".login-btn").on('click', function() {
  if(emailInput.val().length == 0) {
      emailInput.css("border-bottom", "2px solid red");
      emailInputCheck.css("display", "block")
    }
    
    if(passwordInput.val().length == 0) {
      passwordInput.css("border-bottom", "2px solid red");
      passwordInputCheck.css("display", "block")
    }
    
    if (emailInput.val().length > 0 && passwordInput.val().length > 0) {
      
      $.post('/auth/login.json', {
        'email': emailInput.val(),
        'password': passwordInput.val()
      }, function(result) {
        if(result.data == "ok") {
          location.href="/mobile/gmode/index.html"
        }
        if(result.data == "fail") {
          alert("로그인에 실패했습니다")
        }
        
      }, 'json')
      
    }
})

$("input").keypress(function(){
  emailInput.css("border-bottom", "2px solid white");
  passwordInput.css("border-bottom", "2px solid white");
  emailInputCheck.css("display", "none")
  passwordInputCheck.css("display", "none")
})
  
  
