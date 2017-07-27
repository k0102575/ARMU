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
    categoryThemeNo = "",
    categoryThemeName ="",
    categoryMajorNo = "",
    categoryMajorName ="",
    categoryGenreNo = "",
    categoryGenreName =""

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
    inputEventPay =  $("#event-pay"),
    inputEventRequire =  $("#event-require")
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
    nameConfirm = $("#name-confirm"),
    cathgoryConfirm = $("#cathgory-confirm"),
    dateConfirm = $("#date-confirm"),
    locationConfirm = $("#location-confirm"),
    payConfirm = $("#pay-confirm"),
    requireConfirm = $("#require-confirm"),
    reherseConfirmCountText = $("#reherse-confirm-count-text"),
    reherseConfirmPayText = $("#reherse-confirm-pay-text"),
    reherseConfirmInfoText = $("#reherse-confirm-info-text"),
    reherseConfirmCount = $("#reherse-confirm-count"),
    reherseConfirmPay = $("#reherse-confirm-pay"),
    reherseConfirmInfo = $("#reherse-confirm-info")
    // 이벤트 7 페이지
    
var eventPage8 = $("#event-page8"),
    eventPage8Home = $("#event-page8-home")
    
    // 이벤트 8페이지 
    
$(document).ready(function() {
  eventPage1.toggle();
  progress(5)
})

pageCancelBtn.on('click', function() {
  pageCancelPageBackscreen.css('display', 'block');
  pageCancelPage.toggle(0);
})

pageCancelPageReturn.on('click', function() {
  pageCancelPage.toggle(0);
  pageCancelPageBackscreen.css('display', 'none');
})

pageCancelPageQuit.on('click', function() {
  location.href="/mobile/gmode/index.html"
})

eventPage1Cancel.on('click', function() {
  location.href="/mobile/gmode/index.html"
})

eventPage1Next.on('click', function() {
  
  $.getJSON('/event/listTheme.json', function(result) {
    var templateFn = Handlebars.compile($('#select-theme-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#theme-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#theme-check-cancel").on('click', function() {
        themeSelectBox.toggle(0)
        menuBackScreen.toggle(0)
    })

    $("#theme-check-check").on('click', function() {
    	cathgoryConfirm.append("<span class='selectSpan'>테마:  </span>")
      $("input[name=theme]:checked").each(function() {
        categoryThemeNo += $(this).val() + ","
        categoryThemeName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        themeSelectText.append("<span class='selectSpan'>" + categoryThemeName + "</span>")
        cathgoryConfirm.append("<span class='selectSpan'>" + categoryThemeName + "</span>")
        });
    	cathgoryConfirm.append('<br />')
      themeSelectBox.toggle(0)
      menuBackScreen.toggle(0)
    })
    
  }, function(err) {
    console.log(err)
})

  $.getJSON('/event/listMajor.json', function(result) {
    var templateFn = Handlebars.compile($('#select-major-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#major-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#major-check-cancel").on('click', function() {
      menuBackScreen.toggle(0)
      majorSelectBox.toggle(0)
    })

    $("#major-check-check").on('click', function() {
    	cathgoryConfirm.append("<span class='selectSpan'>전공:  </span>")
      $("input[name=major]:checked").each(function() {
        categoryMajorNo += $(this).val() + ","
        categoryMajorName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        majorSelectText.append("<span class='selectSpan'>" + categoryMajorName + "</span>")
        cathgoryConfirm.append("<span class='selectSpan'>" + categoryMajorName + "</span>")
        });
    	cathgoryConfirm.append('<br />')
      menuBackScreen.toggle(0)
      majorSelectBox.toggle(0)
    })
    
  }, function(err) {
    console.log(err)
  })
  
    $.getJSON('/event/listGenre.json', function(result) {
    var templateFn = Handlebars.compile($('#select-genre-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#genre-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#genre-check-cancel").on('click', function() {
      menuBackScreen.toggle(0)
      genreSelectBox.toggle(0)
    })

    $("#genre-check-check").on('click', function() {
    	cathgoryConfirm.append("<span class='selectSpan'>장르:  </span>")
      $("input[name=genre]:checked").each(function() {
        categoryGenreNo += $(this).val() + ","
        categoryGenreName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        genreSelectText.append("<span class='selectSpan'>" + categoryGenreName + "</span>")
        cathgoryConfirm.append("<span class='selectSpan'>" + categoryGenreName + "</span>")
        });
    	cathgoryConfirm.append('<br />')
      menuBackScreen.toggle(0)
      genreSelectBox.toggle(0)
    })
    
  }, function(err) {
    console.log(err)
  })
  
  eventPage1.toggle(0);
  eventPage2.toggle(0 , function() {
    progress(20)
  });
})

themeSelectButton.on('click', function() {
  themeSelectBox.toggle(0)
  menuBackScreen.toggle(0)
  themeSelectText.text("")
})

majorSelectButton.on('click', function() {
  majorSelectBox.toggle(0)
  menuBackScreen.toggle(0)
  majorSelectText.text("")
})

genreSelectButton.on('click', function() {
  genreSelectBox.toggle(0)
  menuBackScreen.toggle(0)
  genreSelectText.text("")
})

eventPage2Prev.on('click', function() {
  location.href="/mobile/gmode/event/regist.html"
})

eventPage2Next.on('click', function() {
  
  /*if(themeSelectText.text() == "") {
    swal("테마를 선택하세요!")
    return
  } 
  
  if(majorSelectText.text() == "") {
    swal("전공을 선택하세요!")
    return
  } 
  
  if(genreSelectText.text() == "") {
    swal("장르를 선택하세요!")
    return
  } */
  
  eventPage2.toggle(0);
  eventPage3.toggle(0 , function() {
    progress(35)
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
    progress(20)
  });
})

eventPage3Next.on('click', function() {
  if(eventPage3Calendar.val() == "2017-07-29") {
    swal("오늘 날짜는 선택되지 않습니다")
    return
  } 
  
 $.getJSON('/event/listLocationType.json', function(result) {
    var templateFn = Handlebars.compile($('#select-sido-template').text())
    var generatedHTML = templateFn(result.data)
    var container = sidoSelectMenu
    container.html(generatedHTML)
    
   sidoSelectMenu.change(function(){
	   var loctno = $(this).val()
	   var sidoText = $("#sido-select-menu option:selected").text()
	   optGroup = $('<optgroup>').attr('label', sidoText);
	   citySelectMenu.append(optGroup);

	   $.getJSON('/event/listLocation.json', {"loctno" : loctno},function(result) {
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
    progress(50)
  });
})

eventPage4Prev.on('click', function() {
  eventPage4.toggle(0);
  eventPage3.toggle(0 , function() {
    progress(35)
  });
})

eventPage4Next.on('click', function() {
	
	
	/*
  sidoSelectMenu.css("border", "1px solid black")
  citySelectMenu.css("border", "1px solid black")
  DetailLocation.css("boder", "1px solid black")
  
  if(sidoSelectMenu.val() == "") {
    sidoSelectMenu.css("border", "1px solid red")
    swal("시/도를 선택하세요!")
    return
  } 
  
  if(citySelectMenu.val() == "") {
    citySelectMenu.css("border", "1px solid red")
    swal("시/군/구를 선택하세요!")
    return
  } 
  
  if(DetailLocation.val() == "") {
    DetailLocation.css("border", "1px solid red")
    swal("상세주소를 입력하세요")
    return
  }*/
  
  
  eventPage4.toggle(0);
  eventPage5.toggle(0 , function() {
    progress(65)
  });
})

eventPage5Prev.on('click', function() {
  eventPage5.toggle(0);
  eventPage4.toggle(0 , function() {
    progress(50)
  });
})

eventPage5Next.on('click', function() {
  
  inputEventName.css("border", "1px solid black")
  inputEventPay.css("boder", "1px solid black")
  
  if(inputEventName.val() == "") {
    inputEventName.css("border", "1px solid red")
    swal("이벤트명을 입력하세요!")
    return
  } 
  
  if(inputEventPay.val() == "") {
    inputEventPay.css("border", "1px solid red")
    swal("금액을 입력하세요!")
    return
  } 
  
  eventPage5.toggle(0);
  eventPage6.toggle(0 , function() {
    progress(80)
  });
})

eventPage6Prev.on('click', function() {
  eventPage6.toggle(0);
  eventPage5.toggle(0 , function() {
    progress(65)
  });
})

eventPage6Next.on('click', function() {
  eventPage6.toggle(0);
  eventPage7.toggle(0 , function() {
    progress(95)
    eventConfirm()
  });
})

$(".btn").on('click', function(event) {
  if(event.currentTarget.innerText == "네") {
	  inputRehearseText.css("display", "block")
	  inputRehearseCount.css("display", "block")
	  inputRehearsePay.css("display", "block")
	  reherseConfirmCountText.css("display", "block")
	  reherseConfirmPayText.css("display", "block")
	  reherseConfirmInfoText.css("display", "block")
	  reherseConfirmCount.css("display", "block")
    reherseConfirmPay.css("display", "block")
    reherseConfirmInfo.css("display", "block")
  } else if (event.currentTarget.innerText == "아니요") {
	  inputRehearseText.css("display", "none")
	  inputRehearseCount.css("display", "none")
	  inputRehearsePay.css("display", "none")
	  reherseConfirmCountText.css("display", "none")
    reherseConfirmPayText.css("display", "none")
    reherseConfirmInfoText.css("display", "none")
    reherseConfirmCount.css("display", "none")
    reherseConfirmPay.css("display", "none")
    reherseConfirmInfo.css("display", "none")
  }
  
})

eventPage7Prev.on('click', function() {
  eventPage7.toggle(0);
  eventPage6.toggle(0 , function() {
    progress(95)
  });
})

eventPage7Next.on('click', function() {
  eventPage7.toggle(0);
  eventPage8.toggle(0 , function() {
    progress(100)
  });
})

eventPage8Home.on('click', function() {
  location.href="/mobile/gmode/index.html"
})

function progress(per) {
  progressBar.progressbar({
    value: per,
    create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color': 'rgb(203, 203, 203)'})}
  });
};

function eventConfirm() {
  var locationInfo = sidoSelectMenu.val() + " | " + citySelectMenu.val() + " | " + DetailLocation.val()
  nameConfirm.text(inputEventName.val())
  dateConfirm.text(eventPage3Calendar.val())
  locationConfirm.text(locationInfo)
  payConfirm.text(inputEventPay.val())
  requireConfirm.text(inputEventRequire.val())
  reherseConfirmCount.text(inputRehearseCount.val())
  reherseConfirmPay.text(inputRehearsePay.val())
  reherseConfirmInfo.text(inputRehearseText.val())
}