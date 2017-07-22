var timeLine = $('.timeline-line')

$(window).load(function () {
  if($("div[id=timeline-container]").length <= 1) {
    timeLine.css("background", "radial-gradient(circle, black, black, white)")
  } else if ($("div[id=timeline-container]").length >= 2) {
    var length = $("div[id=timeline-container]").length
    timeLine[0].style.background = "linear-gradient(to top, black , white)"
    timeLine[length - 1].style.background = "linear-gradient(to bottom, black , white)"
  }
})
