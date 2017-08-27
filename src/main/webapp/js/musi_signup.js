var progressBar = $("#signup-progressbar"),
    pageCancelBtn = $("#signup-cancel-btn"),
    signupPage3Backscreen = $("#signup-page3-backscreen"),
    signupPage4Backscreen = $("#signup-page4-backscreen")
    // 이벤트 프로그레스바 밑 취소페이지
    
var signupPage1 = $("#signup-page1"),
    signupPage1Next = $("#signup-page1-next"),
    musiNickName = $("#musi-nickname")
    
    //  이벤트 1페이지 성별과 별명
    
var signupPage2 = $("#signup-page2"),
    signupPage2Prev = $("#signup-page2-prev"),
    signupPage2Next = $("#signup-page2-next"),
    musiAge = $("#musi-age")
    //  이벤트 2페이지 연령 / 팀여부
      
var signupPage3 = $("#signup-page3"),
    signupPage3Prev = $("#signup-page3-prev"),
    signupPage3Next = $("#signup-page3-next"),
    themeSelectButton = $("#theme-select-button"),
    majorSelectButton = $("#major-select-button"),
    genreSelectButton = $("#genre-select-button"),
    themeSelectBox = $("#theme-select-box"),
    majorSelectBox = $("#major-select-box"),
    genreSelectBox = $("#genre-select-box"),
    themeSelectText = $("#theme-select-text"),
    majorSelectText = $("#major-select-text"),
    genreSelectText = $("#genre-select-text"),
    themeSelcetHidden = $("#theme-select-hidden")
    majorSelcetHidden = $("#major-select-hidden")
    genreSelcetHidden = $("#genre-select-hidden")
    categoryThemeName ="",
    categoryMajorName ="",
    categoryGenreName ="",
    categoryThemeNo = "",
    categoryMajorNo = "",
    categoryGenreNo = ""
    // 이벤트 3페이지 카테고리
    
var signupPage4 = $("#signup-page4"),
    signupPage4Prev = $("#signup-page4-prev"),
    signupPage4Next = $("#signup-page4-next"),
    locationTextBox = $("#location-text-box"),
    locationSelcetHidden = $("#location-select-hidden"),
    locationName ="",
    locationNo = ""
    
    // 이벤트 4페이지 희망지역
    
var signupPage5 = $("#signup-page5"),
    signupPage5Prev = $("#signup-page5-prev"),
    signupPage5Next = $("#signup-page5-next"),
    musiHomepage = $("#musi-homepage"),
    signupIntro = $("#signup-intro")

    // 이벤트 5페이지 자기소개/ 홈페이지
    
var signupPage6 = $("#signup-page6"),
    signupPage6Prev = $("#signup-page6-prev"),
    signupPage6Next = $("#signup-page6-next")
    // 이벤트 6페이지 이벤트 확인
    
$(document).ready(function() {
  signupPage1.toggle();
  progress(5)
})

pageCancelBtn.on('click', function() {
  swal({
    title: "입력하신 정보가 사라집니다 \n\n" +
        "취소하시겠습니까?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#8069ef",
    confirmButtonText: "네",
    closeOnConfirm: false,
    cancelButtonText: "아니요"
  },
  function(){
    location.href = "/mobile/gmode/index.html"
  });
})

signupPage1Next.on('click', function() {
  if(musiNickName.val().length == 0) {
    swal({
      title: "별명을 입력 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  }
  
  if($("input[name=team-toggle]:checked").val() =="false") {
    signupPage1.toggle(0);
    signupPage2.toggle(0 , function() {
    progress(16.25)
    })
    
   } else {
     getCategory()
     signupPage1.toggle(0);
     signupPage3.toggle(0 , function() {
       progress(27.5)
     });
   }

})

themeSelectButton.on('click', function() {
  themeSelectBox.toggle(0)
  signupPage3Backscreen.toggle(0)
  themeSelectText.text("")
  $("#theme-check-btn").toggle(0)
})

majorSelectButton.on('click', function() {
  majorSelectBox.toggle(0)
  signupPage3Backscreen.toggle(0)
  majorSelectText.text("")
  $("#major-check-btn").toggle(0)
})

genreSelectButton.on('click', function() {
  genreSelectBox.toggle(0)
  signupPage3Backscreen.toggle(0)
  genreSelectText.text("")
  $("#genre-check-btn").toggle(0)
})

signupPage2Prev.on('click', function() {
  signupPage2.toggle(0);
  signupPage1.toggle(0 , function() {
    progress(5)
})
})

signupPage2Next.on('click', function() {
  
  if(musiAge.val().length == 0) {
    swal({
      title: "연령을 입력 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  }
  
  if($("input[name=gender-toggle]:checked").val() == undefined) {
    swal({
      title: "성별을 체크하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  }
  
  themeSelcetHidden.val(categoryThemeNo)
  majorSelcetHidden.val(categoryMajorNo)
  genreSelcetHidden.val(categoryGenreNo)
  
   signupPage2.toggle(0);
   signupPage3.toggle(0 , function() {
     getCategory()
     progress(27.5)
   });
  
})

signupPage3Prev.on('click', function() {
  
if($("input[name=team-toggle]:checked").val() =="false") {
    signupPage3.toggle(0);
    signupPage2.toggle(0 , function() {
      progress(16.25)
    });
    
   } else {
    signupPage3.toggle(0);
    signupPage1.toggle(0 , function() {
      progress(12.5)
    });
   }
  
})

signupPage3Next.on('click', function() {
  
  if(themeSelectText.text() == "") {
    swal({
      title: "테마를 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
  return
} 

if(majorSelectText.text() == "") {
  swal({
    title: "전공을 선택 하세요!",
    type: "warning",
    showCancelButton: false,
    confirmButtonColor: "#8069ef",
    confirmButtonText: "확인",
    customClass: "checkSwal"
  });
  return
} 

if(genreSelectText.text() == "") {
  swal({
    title: "장르를 선택 하세요!",
    type: "warning",
    showCancelButton: false,
    confirmButtonColor: "#8069ef",
    confirmButtonText: "확인",
    customClass: "checkSwal"
  });
  return
}

  themeSelcetHidden.val(categoryThemeNo)
  majorSelcetHidden.val(categoryMajorNo)
  genreSelcetHidden.val(categoryGenreNo)
  getLocation()
  signupPage3.toggle(0);
  signupPage4.toggle(0 , function() {
    progress(50)
  });
}) 

signupPage4Prev.on('click', function() {
  signupPage4.toggle(0);
  signupPage3.toggle(0 , function() {
    progress(27.5)
  });
})

signupPage4Next.on('click', function() {
  if(locationTextBox.text().length == 6) {
    swal({
      title: "지역을 선택하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
  return
  }
  
  locationSelcetHidden.val(locationNo)
  signupPage4.toggle(0);
  signupPage5.toggle(0 , function() {
    progress(72.5)
  });
})

signupPage5Prev.on('click', function() {
  signupPage5.toggle(0);
  signupPage4.toggle(0 , function() {
    progress(50)
  });
})

signupPage5Next.on('click', function() {
  if(signupIntro.val().length == 0) {
    swal({
      title: "자기소개를 입력하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
  return
  }
  
  signupPage5.toggle(0);
  signupPage6.toggle(0 , function() {
    checkConfirm()
    progress(100)
  });
})

signupPage6Prev.on('click', function() {
  signupPage6.toggle(0);
  signupPage5.toggle(0 , function() {
    progress(72.5)
  });
})

signupPage6Next.on('click', function() {
  
  signUp()
  signupPage6.toggle(0);
  $("#member-toggle" ).toggle(0)
  
})

function signUp() {
  if($("input[name=team-toggle]:checked").val() =="true") {
    $.post('/musician/add.json', {
      "isTeam" : "Y",
      "musicianAddTheme" : themeSelcetHidden.val(),
      "musicianAddMajor" : majorSelcetHidden.val(),
      "musicianAddGenre" : genreSelcetHidden.val(),
      "musicianAddLocation" : locationSelcetHidden.val(),
      "intro" : $("#signup-intro").val(),
      "nickName" : $("#musi-nickname").val(),
      "homepage" : $("#musi-homepage").val()
    }, function(result) {
    }, 'json')
    
  } else if($("input[name=team-toggle]:checked").val() =="false") {
    
    $.post('/musician/add.json', {
      "isTeam" : "N",
      "musicianAddTheme" : themeSelcetHidden.val(),
      "musicianAddMajor" : majorSelcetHidden.val(),
      "musicianAddGenre" : genreSelcetHidden.val(),
      "musicianAddLocation" : locationSelcetHidden.val(),
      "intro" : $("#signup-intro").val(),
      "nickName" : $("#musi-nickname").val(),
      "homepage" : $("#musi-homepage").val(),
      "age" : $("#musi-age").val(),
      "gender" : $("input[name=gender-toggle]:checked").val()
    }, function(result) {
    }, 'json')
    
  }
}

function checkConfirm() {
  $(".select-div").html("")
  if($("#musi-homepage").val().length > 0) {
    $(".select-div").append("<label class='signup-text signup-header'>홈페이지</label>")
    $(".select-div").append("<div class='signup-text signup-homepage'>" + $("#musi-homepage").val() + "</div>")
    $(".select-div").append("<br/>\r\n")
  }
  
  if($("input[name=team-toggle]:checked").val() =="true") {
    $(".select-div").append("<label class='signup-text signup-header'>팀</label>")
    $(".select-div").append("<div class='signup-text signup-team'>" + $("#musi-nickname").val() + "  (팀)  </div>")
    $(".select-div").append("<br/>\r\n")
    } else {
      $(".select-div").append("<label class='signup-text signup-header'>별명</label>")
      $(".select-div").append("<div class='signup-text signup-nickname'>" + $("#musi-nickname").val() + "</div>")
      $(".select-div").append("<br/>\r\n")
      $(".select-div").append("<label class='signup-text signup-header'>나이</label>")
      $(".select-div").append("<div class='signup-text signup-age'>" + $("#musi-age").val() + "</div>")
      $(".select-div").append("<br/>\r\n")
      $(".select-div").append("<label class='signup-text signup-header'>성별</label>")
      if($("input[name=gender-toggle]:checked").val() =="M"){
        $(".select-div").append("<div class='signup-text signup-gender'>남성</div>")
        $(".select-div").append("<br/>\r\n")
      } else {
        $(".select-div").append("<div class='signup-text signup-gender'>여성</div>")
        $(".select-div").append("<br/>\r\n")
      } 
    }
  $(".signup-info").text($("#signup-intro").val())

}

function progress(per) {
  progressBar.progressbar({
    value: per,
    create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-image': 'linear-gradient( to left top, rgb(116, 92, 233), rgb(215, 105, 239))'})}
  });
};


function getCategory() {
$.getJSON('/category/listTheme.json', function(result) {
    var templateFn = Handlebars.compile($('#select-theme-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#theme-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#theme-check-cancel").on('click', function() {
        themeSelectBox.toggle(0)
        signupPage3Backscreen.toggle(0)
        $("#theme-check-btn").toggle(0)
    })

    $("#theme-check-check").on('click', function() {
      $("input[name=theme]:checked").each(function() {
        categoryThemeNo += $(this).val() + "," 
        categoryThemeName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        themeSelectText.append("<span class='selectSpan'>" + categoryThemeName + "</span>")
        $(".signup-theme").append("<span class='selectSpan'>" + categoryThemeName + "</span>")
        });
      themeSelectBox.toggle(0)
      signupPage3Backscreen.toggle(0)
      $("#theme-check-btn").toggle(0)
    })
    
  }, function(err) {
    console.log(err)
})

  $.getJSON('/category/listMajor.json', function(result) {
    var templateFn = Handlebars.compile($('#select-major-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#major-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#major-check-cancel").on('click', function() {
      signupPage3Backscreen.toggle(0)
      majorSelectBox.toggle(0)
      $("#major-check-btn").toggle(0)
    })

    $("#major-check-check").on('click', function() {
      $("input[name=major]:checked").each(function() {
        categoryMajorNo += $(this).val() + ","
        categoryMajorName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        majorSelectText.append("<span class='selectSpan'>" + categoryMajorName + "</span>")
        $(".signup-major").append("<span class='selectSpan'>" + categoryMajorName + "</span>")
        });
      signupPage3Backscreen.toggle(0)
      majorSelectBox.toggle(0)
      $("#major-check-btn").toggle(0)
    })
    
  }, function(err) {
    console.log(err)
  })
  
    $.getJSON('/category/listGenre.json', function(result) {
    var templateFn = Handlebars.compile($('#select-genre-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#genre-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#genre-check-cancel").on('click', function() {
      signupPage3Backscreen.toggle(0)
      genreSelectBox.toggle(0)
      $("#genre-check-btn").toggle(0)
    })

    $("#genre-check-check").on('click', function() {
      $("input[name=genre]:checked").each(function() {
        categoryGenreNo += $(this).val() + ","
        categoryGenreName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        genreSelectText.append("<span class='selectSpan'>" + categoryGenreName + "</span>")
        $(".signup-genre").append("<span class='selectSpan'>" + categoryGenreName + "</span>")
        });
      signupPage3Backscreen.toggle(0)
      genreSelectBox.toggle(0)
      $("#genre-check-btn").toggle(0)
    })
    
  }, function(err) {
    console.log(err)
  })
}

function getLocation() {
  $.getJSON('/category/listLocationType.json', function(result) {
    var templateFn = Handlebars.compile($('#location-type-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $("#location-type-container")
    container.html(generatedHTML)
    var locationId = []
    
    $("#location-check-cancel").on('click', function() {
      $("#location-button-box").toggle(0)
      signupPage4Backscreen.toggle(0)
      $("#location-check-btn").toggle(0)
    })
    
    $("#location-check-check").on('click', function() {
      $(".signup-location").append("<span class='selectSpan'>" + $("#location-button-box-header").text() + "</span>")
      $("#location-text-box").append("<span class='selectSpan'>" + $("#location-button-box-header").text() + "</span>")
      
      $("input[name=location]:checked").each(function() {
        locationId.push($(this).val())
        locationSpan = $(this).val()
        locationNo += $(this).val() + ","
        locationName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
      $("#location-text-box").append("<span class='selectSpan'>" + locationName + "</span>")
      $(".signup-location").append("<span class='selectSpan'>" + locationName + "</span>")
      });
      $("#location-text-box").append("<br/>\r\n")
      $(".signup-location").append("<br/>\r\n")
      
      $("#location-button-box").toggle(0)
      signupPage4Backscreen.toggle(0)
      $("#location-check-btn").toggle(0)
    })
    
    $(".location-type-button").on('click', function() {
       var loctno = $(this).val(),
           loctname = $(this).text()
       $(this).css("background", "rgba(255,255,255, 0.5)")
       $.getJSON('/category/listLocation.json', {"loctno" : loctno}, function(result) {
       var templateFn = Handlebars.compile($('#location-button-template').text())
       var generatedHTML = templateFn(result.data)
       var container = $("#location-button-box")
       container.html("")
       container.append("<div id='location-button-box-header'> "+ loctname +" </div>")
       var html = container.html()
       container.html(html + generatedHTML)
       
       $("#location-button-box").toggle(0)
       signupPage4Backscreen.toggle(0)
       $("#location-check-btn").toggle(0)
    })
    
  })
})
}
  
