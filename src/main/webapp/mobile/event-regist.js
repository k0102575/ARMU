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
    eventPage3Next = $("#event-page3-next")

$(document).ready(function() {
  headerBox.load("header-box.html");
  eventPage1.toggle();
  progress(10)
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
    progress(30)
    $("#calendar").datepicker({
      dayNames: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
      dayNamesMin: ["일"," 월"," 수"," 목"," 금"," 토"," 일"]
    });
  });
})

eventPage3Prev.on('click', function() {
  eventPage2.toggle(0 , function() {
    progress(30)
  });
  eventPage3.toggle(0);
})

eventPage3Next.on('click', function() {
  eventPage3.toggle(0);
  eventPage4.toggle(0 , function() {
    progress(50)
  });
})

function progress(per) {
  progressBar.progressbar({
    value: per,
    create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color':'#BEAED4'})}
  });
};