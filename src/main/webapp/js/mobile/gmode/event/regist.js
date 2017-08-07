var progressBar = $("#event-progressbar"),
    pageCancelBtn = $("#event-cancelbtn"),
    pageCancelPage = $("#event-cancelpage"),
    pageCancelPageBackscreen = $("#event-cancelpage-backscreen"),
    pageCancelPageReturn = $("#event-cancelpage-return"),
    pageCancelPageQuit = $("#event-cancelpage-quit"),
    menuBackScreen = $("#menu-backscreen")
    // 이벤트 프로그레스바 밑 취소페이지
    
var eventPage1 = $("#event-page1"),
    eventPage1Cancel = $("#event-page1-cancel"),
    eventPage1Next = $("#event-page1-next")
    //  이벤트 1페이지
    
var eventPage2 = $("#event-page2"),
    eventPage2Prev = $("#event-page2-prev"),
    eventPage2Next = $("#event-page2-next"),
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

    //  이벤트 2페이지
    
var eventPage3 = $("#event-page3"),
    eventPage3Prev = $("#event-page3-prev"),
    eventPage3Next = $("#event-page3-next"),
    eventPage3Calendar = $("#calendar-page3")
    // 이벤트 3페이지
    
var eventPage4 = $("#event-page4"),
    eventPage4Prev = $("#event-page4-prev"),
    eventPage4Next = $("#event-page4-next"),
    sidoSelectMenu =  $("#sido-select-menu"),
    citySelectMenu =  $("#city-select-menu"),
    DetailLocation = $("#detail-location")
    // 이벤트 4페이지
    
var eventPage5 = $("#event-page5"),
    eventPage5Prev = $("#event-page5-prev"),
    eventPage5Next = $("#event-page5-next"), 
    inputEventName =  $("#event-name"),
    inputEventConent =  $("#event-content")

    // 이벤트 5페이지
    
var eventPage6 = $("#event-page6"),
    eventPage6Prev = $("#event-page6-prev"),
    eventPage6Next = $("#event-page6-next"),
    inputRehearseText = $("#input-rehearse-text"),
    inputRehearseCount = $("#input-rehearse-count"),
    inputRehearsePay = $("#input-rehearse-pay")
    // 이벤트 6 페이지
    
var eventPage7 = $("#event-page7"),
    eventPage7Prev = $("#event-page7-prev"),
    eventPage7Next = $("#event-page7-next"),
    inputEventPay =  $("#event-pay"),
    inputEventRequire =  $("#event-require")

    // 이벤트 7 페이지
    
var eventPage8 = $("#event-page8"),
    eventPage8Prev = $("#event-page8-prev"),
    eventPage8Next = $("#event-page8-next"),
    titleConfirm = $(".event-title"),
    dateConfirm = $(".event-date"),
    locationConfirm = $(".event-location"),
    payConfirm = $(".event-pay"),
    contentConfirm = $(".event-desc"),
    requireConfirm = $(".event-req"),
    themeConfirmText = $(".event-theme"),
    majorConfirmText = $(".event-major"),
    genreConfirmText = $(".event-genre"),
    reherseConfirmCount = $(".reherse-count"),
    reherseConfirmPay = $(".reherse-pay"),
    reherseConfirmInfo = $(".reherse-info"),
    reherseConfirmLine = $("#reherse-line"),
    reherseConfirmHeader =$(".reherse-header")
    
    // 이벤트 8페이지 
    
    var eventPage9 = $("#event-page9"),
    eventPage9Home = $("#event-page9-home")
    
    // 이벤트 9페이지 
    
$(document).ready(function() {
  eventPage1.toggle();
  progress(0)
})

pageCancelBtn.on('click', function() {
  swal({
    title: "입력하신 정보가 사라집니다. \n\n" +
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
  
/*  pageCancelPageBackscreen.css('display', 'block');
  pageCancelPage.toggle(0);*/


})

/*pageCancelPageReturn.on('click', function() {
  pageCancelPage.toggle(0);
  pageCancelPageBackscreen.css('display', 'none');
})

pageCancelPageQuit.on('click', function() {
  location.href="/mobile/gmode/index.html"
})

eventPage1Cancel.on('click', function() {
  location.href="/mobile/gmode/index.html"
})
*/
eventPage1Next.on('click', function() {
  
  $.getJSON('/category/listTheme.json', function(result) {
    var templateFn = Handlebars.compile($('#select-theme-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#theme-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#theme-check-cancel").on('click', function() {
        themeSelectBox.toggle(0)
        menuBackScreen.toggle(0)
        $("#theme-check-btn").toggle(0)
    })

    $("#theme-check-check").on('click', function() {
      $("input[name=theme]:checked").each(function() {
        categoryThemeNo += $(this).val() + "," 
        categoryThemeName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        themeSelectText.append("<span class='selectSpan'>" + categoryThemeName + "</span>")
        themeConfirmText.append("<span class='selectSpan'>" + categoryThemeName + "</span>")
        });
      themeSelectBox.toggle(0)
      menuBackScreen.toggle(0)
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
      menuBackScreen.toggle(0)
      majorSelectBox.toggle(0)
      $("#major-check-btn").toggle(0)
    })

    $("#major-check-check").on('click', function() {
      $("input[name=major]:checked").each(function() {
        categoryMajorNo += $(this).val() + ","
        categoryMajorName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        majorSelectText.append("<span class='selectSpan'>" + categoryMajorName + "</span>")
        majorConfirmText.append("<span class='selectSpan'>" + categoryMajorName + "</span>")
        });
      menuBackScreen.toggle(0)
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
      menuBackScreen.toggle(0)
      genreSelectBox.toggle(0)
      $("#genre-check-btn").toggle(0)
    })

    $("#genre-check-check").on('click', function() {
      $("input[name=genre]:checked").each(function() {
        categoryGenreNo += $(this).val() + ","
        categoryGenreName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        genreSelectText.append("<span class='selectSpan'>" + categoryGenreName + "</span>")
        genreConfirmText.append("<span class='selectSpan'>" + categoryGenreName + "</span>")
        });
      menuBackScreen.toggle(0)
      genreSelectBox.toggle(0)
      $("#genre-check-btn").toggle(0)
    })
    
  }, function(err) {
    console.log(err)
  })
  
  eventPage1.toggle(0);
  eventPage2.toggle(0 , function() {
    progress(12.5)
 });
})

themeSelectButton.on('click', function() {
  themeSelectBox.toggle(0)
  menuBackScreen.toggle(0)
  themeSelectText.text("")
  $("#theme-check-btn").toggle(0)
})

majorSelectButton.on('click', function() {
  majorSelectBox.toggle(0)
  menuBackScreen.toggle(0)
  majorSelectText.text("")
  $("#major-check-btn").toggle(0)
})

genreSelectButton.on('click', function() {
  genreSelectBox.toggle(0)
  menuBackScreen.toggle(0)
  genreSelectText.text("")
  $("#genre-check-btn").toggle(0)
})

eventPage2Prev.on('click', function() {
  location.href="/mobile/gmode/event/regist.html"
})

eventPage2Next.on('click', function() {
  
  
  themeSelcetHidden.val(categoryThemeNo)
  majorSelcetHidden.val(categoryMajorNo)
  genreSelcetHidden.val(categoryGenreNo)
  
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
  
  eventPage2.toggle(0);
  eventPage3.toggle(0 , function() {
    progress(25)
    eventPage3Calendar.datepicker({
      dateFormat: "yy-mm-dd",
      minDate: 0,
      dayNames: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
      dayNamesMin: ["일"," 월"," 수"," 목"," 금"," 토"," 일"]
    });
});
})
 

eventPage3Prev.on('click', function() {
  eventPage3.toggle(0);
  eventPage2.toggle(0 , function() {
    progress(12.5)
  });
})

eventPage3Next.on('click', function() {
  var now = new Date();
  var year= now.getFullYear();
  var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
  var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
          
  var chan_val = year + '-' + mon + '-' + day;
  
  if(eventPage3Calendar.val() == chan_val) {
    swal({
      title: "오늘 날짜는 선택되지 않습니다",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  } 
  
 $.getJSON('/category/listLocationType.json', function(result) {
    var templateFn = Handlebars.compile($('#select-sido-template').text())
    var generatedHTML = templateFn(result.data)
    var container = sidoSelectMenu
    container.html(generatedHTML)
    
   sidoSelectMenu.change(function(){
	   var loctno = $(this).val()
	   var sidoText = $("#sido-select-menu option:selected").text()
	   citySelectMenu.html("")
	   optGroup = $('<optgroup>').attr('label', sidoText);
	   citySelectMenu.append(optGroup);

	   $.getJSON('/category/listLocation.json', {"loctno" : loctno},function(result) {
	    var templateFn = Handlebars.compile($('#select-city-template').text())
	    var generatedHTML = templateFn(result.data)
	    var container = citySelectMenu
		var html = container.html()
		container.html(html + generatedHTML)
	  }, function(err) {
	    console.log(err)
	  })
	   
    })
    
  }, function(err) {
    console.log(err)
})
  
  eventPage3.toggle(0);
  eventPage4.toggle(0 , function() {
    progress(37.5)
  });
})

eventPage4Prev.on('click', function() {
  eventPage4.toggle(0);
  eventPage3.toggle(0 , function() {
    progress(25)
  });
})

eventPage4Next.on('click', function() {
	
	
  sidoSelectMenu.css("border", "1px solid black")
  citySelectMenu.css("border", "1px solid black")
  DetailLocation.css("boder", "1px solid black")
  
  if(sidoSelectMenu.val() == "") {
    sidoSelectMenu.css("border", "1px solid red")
    swal({
      title: "시/도를 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  } 
  
  if(citySelectMenu.val() == "") {
    citySelectMenu.css("border", "1px solid red")
    swal({
      title: "시/군구를 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  } 
  
  if(DetailLocation.val() == "") {
    DetailLocation.css("border", "1px solid red")
    swal({
      title: "상세주소를 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  }
  
  
  eventPage4.toggle(0);
  eventPage5.toggle(0 , function() {
    progress(50)
  });
})

eventPage5Prev.on('click', function() {
  eventPage5.toggle(0);
  eventPage4.toggle(0 , function() {
    progress(37.5)
  });
})

eventPage5Next.on('click', function() {
  
  inputEventName.css("border", "1px solid black")
  inputEventConent.css("boder", "1px solid black")
  
  if(inputEventName.val() == "") {
    inputEventName.css("border", "1px solid red")
    swal({
      title: "이벤트명을 입력하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  } 
  
  if(inputEventConent.val() == "") {
    inputEventConent.css("border", "1px solid red")
    swal({
      title: "이벤트 내용을 입력하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  } 
  
  eventPage5.toggle(0);
  eventPage6.toggle(0 , function() {
    progress(62.5)
  });
})

eventPage6Prev.on('click', function() {
  eventPage6.toggle(0);
  eventPage5.toggle(0 , function() {
    progress(50)
  });
})

eventPage6Next.on('click', function() {
  
  if($("input[name=toggle]:checked").val() == "true") {
    
    if(inputRehearseCount.val() == "") {
      swal({
        title: "리허설 횟수를 입력하세요!",
        type: "warning",
        showCancelButton: false,
        confirmButtonColor: "#8069ef",
        confirmButtonText: "확인",
        customClass: "checkSwal"
      });
      return
    } 
    
    if(inputRehearsePay.val() == "") {
      swal({
        title: "리허설 금액을 입력하세요!",
        type: "warning",
        showCancelButton: false,
        confirmButtonColor: "#8069ef",
        confirmButtonText: "확인",
        customClass: "checkSwal"
      });
      return
    } 
    
    if(inputRehearseText.val() == "") {
      swal({
        title: "리허설 정보를 입력하세요!",
        type: "warning",
        showCancelButton: false,
        confirmButtonColor: "#8069ef",
        confirmButtonText: "확인",
        customClass: "checkSwal"
      });
      return
    } 
    
    
  }
  
  reherseCheck($("input[name=toggle]:checked").val())
  eventPage6.toggle(0);
  eventPage7.toggle(0 , function() {
    progress(75)
  });
})


$(".btn").on('click', function(event) {
  if(event.currentTarget.innerText == "네") {
    inputRehearseText.css("display", "block")
    inputRehearseCount.css("display", "block")
    inputRehearsePay.css("display", "block")
  } else if (event.currentTarget.innerText == "아니요") {
    inputRehearseText.css("display", "none")
    inputRehearseCount.css("display", "none")
    inputRehearsePay.css("display", "none")
  }
  
})

eventPage7Prev.on('click', function() {
  eventPage7.toggle(0);
  eventPage6.toggle(0 , function() {
    progress(62.5)
  });
})

eventPage7Next.on('click', function() {
  
  if(inputEventPay.val() == "") {
    swal({
      title: "금액을 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  } 
  
  eventPage7.toggle(0);
  eventPage8.toggle(0 , function() {
    progress(87.5)
    eventConfirm()
  });
})

eventPage8Prev.on('click', function() {
  eventPage8.toggle(0);
  eventPage7.toggle(0 , function() {
    progress(75)
  });
})

eventPage8Next.on('click', function() {
  
/*  $.post('/event/RegistEventCategory.json', {
    "eventRegistTheme" : themeSelcetHidden.val(),
    "eventRegistMajor" : majorSelcetHidden.val(),
    "eventRegistGenre" : genreSelcetHidden.val()
  }, function(result) {
    eventPage8.toggle(0);
    eventPage9.toggle(0 , function() {
      progress(95)
    });
  }, 'json')*/
  
  if($("input[name=toggle]:checked").val() =="true") {
    $.post('/event/addReherse.json', {
      'writer': 4,
      'locno': citySelectMenu.val(),
      'pay': inputEventPay.val(),
      'requirement': inputEventRequire.val(),
      'contents': inputEventConent.val(),
      'address': DetailLocation.val(),
      'date': eventPage3Calendar.val(),
      'title': inputEventName.val(),
      "eventRegistTheme" : themeSelcetHidden.val(),
      "eventRegistMajor" : majorSelcetHidden.val(),
      "eventRegistGenre" : genreSelcetHidden.val(),
      "rhspay" : inputRehearsePay.val(),
      "rhsnum" : inputRehearseCount.val(),
      "rhsinfo" : inputRehearseText.val()
    }, function(result) {
      eventPage8.toggle(0);
      eventPage9.toggle(0 , function() {
        progress(100)
      });
    }, 'json')
  } else if($("input[name=toggle]:checked").val() =="false") {
    $.post('/event/add.json', {
      'locno': citySelectMenu.val(),
      'pay': inputEventPay.val(),
      'requirement': inputEventRequire.val(),
      'contents': inputEventConent.val(),
      'address': DetailLocation.val(),
      'date': eventPage3Calendar.val(),
      'title': inputEventName.val(),
      "eventRegistTheme" : themeSelcetHidden.val(),
      "eventRegistMajor" : majorSelcetHidden.val(),
      "eventRegistGenre" : genreSelcetHidden.val()
    }, function(result) {
      eventPage8.toggle(0);
      eventPage9.toggle(0 , function() {
        progress(100)
      });
    }, 'json')
  }

})

eventPage9Home.on('click', function() {
  location.href="/mobile/gmode/index.html"
})

function progress(per) {
  progressBar.progressbar({
    value: per,
    create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color': 'rgb(128, 105, 239)'})}
  });
};

function eventConfirm() {
  var locationInfo = $("#sido-select-menu option:selected").text() + "  " + $("#city-select-menu option:selected").text() + "  " + DetailLocation.val()
  titleConfirm.text(inputEventName.val())
  dateConfirm.text(eventPage3Calendar.val())
  locationConfirm.text(locationInfo)
  payConfirm.text(inputEventPay.val())
  contentConfirm.text(inputEventConent.val())
  requireConfirm.text(inputEventRequire.val())
  reherseConfirmCount.text(inputRehearseCount.val())
  reherseConfirmPay.text(inputRehearsePay.val())
  reherseConfirmInfo.text(inputRehearseText.val())
} // eventConfirm

function reherseCheck(btn) {
  if(btn == "true") {
    reherseConfirmCount.css("display", "block")
    reherseConfirmPay.css("display", "block")
    reherseConfirmInfo.css("display", "block")
    reherseConfirmLine.css("display", "block")
    reherseConfirmHeader.css("display", "block")
  } else if (btn == "false") {
    reherseConfirmCount.css("display", "none")
    reherseConfirmPay.css("display", "none")
    reherseConfirmInfo.css("display", "none")
    reherseConfirmLine.css("display", "none")
    reherseConfirmHeader.css("display", "none")
  }
} // reherseCheck

