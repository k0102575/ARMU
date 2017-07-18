var headerBox = $("#header-box"),
    progressBar = $("#event-progressbar"),
    eventPage1 = $("#event-page1"),
    eventPage1Cancel = $("#event-page1-cancel"),
    eventPage1Next = $("#event-page1-next"),
    eventPage2 = $("#event-page2"),
    eventPage2Prev = $("#event-page2-prev"),
    eventPage2Next = $("#event-page2-next"),
    eventPage3 = $("#event-page3"),
    eventPage3Prev = $("#event-page3-prev"),
    eventPage3Next = $("#event-page3-next"),
    eventPage4 = $("#event-page4"),
    eventPage4Prev = $("#event-page4-prev"),
    eventPage4Next = $("#event-page4-next"),
    eventPage5 = $("#event-page5"),
    eventPage5Prev = $("#event-page5-prev"),
    eventPage5Next = $("#event-page5-next"),
    eventPage6 = $("#event-page6"),
    eventPage6Prev = $("#event-page6-prev"),
    eventPage6Next = $("#event-page6-next"),
    eventPage7 = $("#event-page7"),
    eventPage7Prev = $("#event-page7-prev"),
    eventPage7Next = $("#event-page7-next"),
    eventPage8 = $("#event-page8"),
    eventPage8Home = $("#event-page8-home")
    
var themeVal,majorVal,genreVal,eventDate,
    sido,city,street,detailLocation,
    eventName, eventPay, eventRequire,
    matchDate

$(document).ready(function() {
  headerBox.load("header-box.html");
  eventPage1.toggle();
  progress(5)
})

eventPage1Cancel.on('click', function() {
  location.href="index.html"
})

eventPage1Next.on('click', function() {
  eventPage1.toggle(0);
  eventPage2.toggle(0 , function() {
    progress(20)
  });
})

eventPage2Prev.on('click', function() {
  location.href="event-regist.html"
})

eventPage2Next.on('click', function() {
  eventPage2.toggle(0);
  eventPage3.toggle(0 , function() {
    themeVal =  $("#theme-select-menu").val()
    majorVal =  $("#major-select-menu").val()
    genreVal =  $("#genre-select-menu").val()
    progress(35)
    $("#calendar-page3").datepicker({
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
    $("#calendar-page6").datepicker({
      dayNames: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
      dayNamesMin: ["일"," 월"," 수"," 목"," 금"," 토"," 일"]
    });
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
    matchDate = $("#calendar-page3").val()
    progress(95)
    $("#name-confirm").val(eventName)
    $("#cathgory-confirm").val(themeVal + "  |  " + majorVal + "  |  " + genreVal)
    $("#date-confirm").val(eventDate)
    $("#match-confirm").val(matchDate)
    $("#location-confirm").val(sido + " " + city + " " + street + " " + detailLocation)
    $("#pay-confirm").val(eventPay)
    $("#require-confirm").val(eventRequire)
  });
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
  location.href="index.html"
})



function progress(per) {
  progressBar.progressbar({
    value: per,
    create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color':'#525252'})}
  });
};