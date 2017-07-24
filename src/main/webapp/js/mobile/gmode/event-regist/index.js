var progressBar = $("#event-progressbar"),
    pageCancelBtn = $("#event-cancelbtn"),
    pageCancelPage = $("#event-cancelpage"),
    pageCancelPageBackscreen = $("#event-cancelpage-backscreen"),
    pageCancelPageReturn = $("#event-cancelpage-return"),
    pageCancelPageQuit = $("#event-cancelpage-quit"),
    eventPage1 = $("#event-page1"),
    eventPage1Cancel = $("#event-page1-cancel"),
    eventPage1Next = $("#event-page1-next"),
    eventPage2 = $("#event-page2"),
    eventPage2Prev = $("#event-page2-prev"),
    eventPage2Next = $("#event-page2-next"),
    eventPage3 = $("#event-page3"),
    eventPage3Prev = $("#event-page3-prev"),
    eventPage3Next = $("#event-page3-next"),
    eventPage3Calendar = $("#calendar-page3"),
    eventPage4 = $("#event-page4"),
    eventPage4Prev = $("#event-page4-prev"),
    eventPage4Next = $("#event-page4-next"),
    eventPage5 = $("#event-page5"),
    eventPage5Prev = $("#event-page5-prev"),
    eventPage5Next = $("#event-page5-next"),
    eventPage6 = $("#event-page6"),
    eventPage6Prev = $("#event-page6-prev"),
    eventPage6Next = $("#event-page6-next"),
    inputRehearseText = $("#input-rehearse-text"),
    inputRehearseCount = $("#input-rehearse-count"),
    inputRehearsePay = $("#input-rehearse-pay"),
    eventPage7 = $("#event-page7"),
    eventPage7Prev = $("#event-page7-prev"),
    eventPage7Next = $("#event-page7-next"),
    eventPage8 = $("#event-page8"),
    eventPage8Home = $("#event-page8-home"),
    nameConfirm = $("#name-confirm"),
    cathgoryConfirm = $("#name-confirm"),
    dateConfirm = $("#name-confirm"),
    matchConfirm = $("#name-confirm"),
    locationConfirm = $("#name-confirm"),
    payConfirm = $("#name-confirm"),
    requireConfirm = $("#name-confirm")
    
var themeVal,majorVal,genreVal,eventDate,
    sido,city,street,detailLocation,
    eventName, eventPay, eventRequire,
    matchDate

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
    themeVal =  $("#theme-select-menu").val()
    majorVal =  $("#major-select-menu").val()
    genreVal =  $("#genre-select-menu").val()
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
    eventDate = $("#calendar-page3").val()
    progress(50)
  });
})

eventPage4Prev.on('click', function() {
  eventPage4.toggle(0);
  eventPage3.toggle(0 , function() {
    progress(50)
  });
})

eventPage4Next.on('click', function() {
  eventPage4.toggle(0);
  eventPage5.toggle(0 , function() {
    sido =  $("#sido-select-menu").val()
    city =  $("#city-select-menu").val()
    street =  $("#street-select-menu").val()
    detailLocation = $("#detail-location").val()
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
    eventName =  $("#event-name").val()
    eventPay =  $("#event-pay").val()
    eventRequire =  $("#event-require").val()
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