var progressBar = $("#event-progressbar"),
    pageCancelBtn = $("#event-cancelbtn"),
    pageCancelPage = $("#event-cancelpage"),
    pageCancelPageBackscreen = $("#event-cancelpage-backscreen"),
    pageCancelPageReturn = $("#event-cancelpage-return"),
    pageCancelPageQuit = $("#event-cancelpage-quit"),
    
    // 이벤트 프로그레스바 밑 취소페이지
    
    eventPage1 = $("#event-page1"),
    eventPage1Cancel = $("#event-page1-cancel"),
    eventPage1Next = $("#event-page1-next"),
    
    //  이벤트 1페이지
    
    eventPage2 = $("#event-page2"),
    eventPage2Prev = $("#event-page2-prev"),
    eventPage2Next = $("#event-page2-next"),
    themeSelectMenu = $("#theme-select-menu"),
    majorSelectMenu = $("#major-select-menu"),
    genereSelectMenu = $("#genre-select-menu"),
    themeSelectVal = 0,
    majorSelectVal = 0,
    genreSelectVal = 0,
    
    //  이벤트 2페이지
    
    eventPage3 = $("#event-page3"),
    eventPage3Prev = $("#event-page3-prev"),
    eventPage3Next = $("#event-page3-next"),
    eventPage3Calendar = $("#calendar-page3"),
    eventDate = 0,
    
    // 이벤트 3페이지
    
    eventPage4 = $("#event-page4"),
    eventPage4Prev = $("#event-page4-prev"),
    eventPage4Next = $("#event-page4-next"),
    sidoSelectMenu =  $("#sido-select-menu"),
    citySelectMenu =  $("#city-select-menu"),
    streetSelectMenu =  $("#street-select-menu"),
    DetailLocation = $("#detail-location"),
    sidoSelectVal = 0,
    citySelectVal = 0,
    streetSelectVal = 0,
    DetailLocationVal = 0,
    
    // 이벤트 4페이지
    
    
    eventPage5 = $("#event-page5"),
    eventPage5Prev = $("#event-page5-prev"),
    eventPage5Next = $("#event-page5-next"), 
    inputEventName =  $("#event-name"),
    inputEventPay =  $("#event-pay"),
    inputEventRequire =  $("#event-require"),
    EventNameVal = 0, 
    EventPayVal = 0, 
    EventRequireVal = 0,
    
    // 이벤트 5페이지
    
    eventPage6 = $("#event-page6"),
    eventPage6Prev = $("#event-page6-prev"),
    eventPage6Next = $("#event-page6-next"),
    eventRehearseText = $("#event-rehearse-text"),
    inputRehearseText = $("#input-rehearse-text"),
    inputRehearseCount = $("#input-rehearse-count"),
    inputRehearsePay = $("#input-rehearse-pay"),
    
    // 이벤트 6 페이지
    
    eventPage7 = $("#event-page7"),
    eventPage7Prev = $("#event-page7-prev"),
    eventPage7Next = $("#event-page7-next"),
    nameConfirm = $("#name-confirm"),
    cathgoryConfirm = $("#cathgory-confirm"),
    dateConfirm = $("#date-confirm"),
    locationConfirm = $("#location-confirm"),
    payConfirm = $("#pay-confirm"),
    requireConfirm = $("#require-confirm"),
    
    // 이벤트 7 페이지
    
    eventPage8 = $("#event-page8"),
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
  eventPage1.toggle(0);
  eventPage2.toggle(0 , function() {
    progress(20)
  });
})

eventPage2Prev.on('click', function() {
  location.href="/mobile/gmode/event-regist/index.html"
})

eventPage2Next.on('click', function() {
  eventPage2.toggle(0);
  eventPage3.toggle(0 , function() {
    themeSelectVal = themeSelectMenu.val()
    majorSelectVal = majorSelectMenu.val()
    genreSelectVal = genereSelectMenu.val()
    progress(35)
    eventPage3Calendar.datepicker({
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
  eventPage3.toggle(0);
  eventPage4.toggle(0 , function() {
    eventDate = eventPage3Calendar.val()
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
  eventPage4.toggle(0);
  eventPage5.toggle(0 , function() {
    sidoSelectVal = sidoSelectMenu.val()
    citySelectVal = citySelectMenu.val()
    streetSelectVal = streetSelectMenu.val()
    DetailLocationVal = DetailLocation.val()
    progress(65)
  });
})

eventPage5Prev.on('click', function() {
  eventPage5.toggle(0);
  eventPage4.toggle(0 , function() {
    progress(65)
  });
})

eventPage5Next.on('click', function() {
  eventPage5.toggle(0);
  eventPage6.toggle(0 , function() {
    
    EventNameVal = inputEventName.val(), 
    EventPayVal = inputEventPay.val(), 
    EventRequireVal = inputEventRequire.val(),
    progress(80)
  });
})

eventPage6Prev.on('click', function() {
  eventPage6.toggle(0);
  eventPage5.toggle(0 , function() {
    progress(80)
  });
})

eventPage6Next.on('click', function() {
  eventPage6.toggle(0);
  eventPage7.toggle(0 , function() {
    progress(95)
  });
})

$(".btn").on('click', function(event) {
  if(event.currentTarget.innerText == "네") {
    eventRehearseText.css("display", "block")
	  inputRehearseText.css("display", "block")
	  inputRehearseCount.css("display", "block")
	  inputRehearsePay.css("display", "block")
  } else if (event.currentTarget.innerText == "아니요") {
    eventRehearseText.css("display", "none")
	  inputRehearseText.css("display", "none")
	  inputRehearseCount.css("display", "none")
	  inputRehearsePay.css("display", "none")
  }
  
})

eventPage7Prev.on('click', function() {
  eventPage7.toggle(0);
  eventPage6.toggle(0 , function() {
    progress(80)
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
    create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color':'#525252'})}
  });
};

sidoSelectVal = 0,
citySelectVal = 0,
streetSelectVal = 0,
DetailLocationVal = 0,
themeSelectVal = 0,
majorSelectVal = 0,
genreSelectVal = 0,

function eventConfirm() {
  nameConfirm = EventNameVal
  cathgoryConfirm
  dateConfirm = eventDate
  locationConfirm
  payConfirm = EventPayVal
  requireConfirm = EventRequireVal
}