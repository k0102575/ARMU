var progressBar = $("#event-progressbar"),
    pageCancelBtn = $("#event-cancelbtn"),
    pageCancelPage = $("#event-cancelpage"),
    pageCancelPageBackscreen = $("#event-cancelpage-backscreen"),
    pageCancelPageReturn = $("#event-cancelpage-return"),
    pageCancelPageQuit = $("#event-cancelpage-quit")
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
    genreSelectBox = $("#genre-select-box")

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
    streetSelectMenu =  $("#street-select-menu"),
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
    console.log(result.data)
    var templateFn = Handlebars.compile($('#select-theme-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#theme-select-menu')
    container.html(generatedHTML)
    
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
})

majorSelectButton.on('click', function() {
  majorSelectBox.toggle(0)
})

genreSelectButton.on('click', function() {
  genreSelectBox.toggle(0)
})

eventPage2Prev.on('click', function() {
  location.href="/mobile/gmode/event/regist.html"
})

eventPage2Next.on('click', function() {
  
  /*themeSelectMenu.css("border", "1px solid black")
  majorSelectMenu.css("border", "1px solid black")
  genreSelectMenu.css("border", "1px solid black")
  
  if(themeSelectMenu.val() == "") {
    themeSelectMenu.css("border", "1px solid red")
    swal("테마를 선택하세요!")
    return
  } 
  
  if(majorSelectMenu.val() == "") {
    majorSelectMenu.css("border", "1px solid red")
    swal("전공을 선택하세요!")
    return
  } 
  
  if(genreSelectMenu.val() == "") {
    genreSelectMenu.css("border", "1px solid red")
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
  if(eventPage3Calendar.val() == "2017-07-25") {
    swal("오늘 날짜는 선택되지 않습니다")
    return
  } 
  
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
  sidoSelectMenu.css("border", "1px solid black")
  citySelectMenu.css("border", "1px solid black")
  streetSelectMenu.css("border", "1px solid black")
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
  
  if(streetSelectMenu.val() == "") {
    streetSelectMenu.css("border", "1px solid red")
    swal("동/면/읍을 선택하세요!")
    return
  } 
  
  if(DetailLocation.val() == "") {
    DetailLocation.css("border", "1px solid red")
    swal("상세주소를 입력하세요")
    return
  }
  
  
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
  var cathgory = themeSelectMenu.val() + " | " + majorSelectMenu.val() + " | " + genreSelectMenu.val(),
      location = sidoSelectMenu.val() + " | " + citySelectMenu.val() + " | " + streetSelectMenu.val() + " | " + DetailLocation.val()
  nameConfirm.text(inputEventName.val())
  cathgoryConfirm.text(cathgory)
  dateConfirm.text(eventPage3Calendar.val())
  locationConfirm.text(location)
  payConfirm.text(inputEventPay.val())
  requireConfirm.text(inputEventRequire.val())
  reherseConfirmCount.text(inputRehearseCount.val())
  reherseConfirmPay.text(inputRehearsePay.val())
  reherseConfirmInfo.text(inputRehearseText.val())
}