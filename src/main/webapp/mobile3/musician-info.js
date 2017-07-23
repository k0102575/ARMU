var lastScroll = 0,
    musicianHeaderInfoImg = $("#musician-header-info-img"),
    moveTopBtn = $("#move_top_btn"),
    musicianInfoBtnContainer = $("#musician-info-btn-container"),
    musicianHeaderInfoImg = $("#musician-header-info-img")
    
    console.log($("div[name=timeline-container]").length)
    
    $(window).scroll(function(event){
    
    if($(document).scrollTop() > 545) {
      musicianInfoBtnContainer.css("position", "fixed")
      musicianHeaderInfoImg.css("top", "9%")
    } else if ($(document).scrollTop() < 545) {
      musicianInfoBtnContainer.css("position", "relative")
      musicianHeaderInfoImg.css("top", "18%")
    }
    
    var st = $(this).scrollTop();
    if (st > lastScroll){
      moveTopBtn.css("display", "block")
      musicianHeaderInfoImg.css("display", "block")

    } else {
      moveTopBtn.css("display", "none")
      musicianHeaderInfoImg.css("display", "none")
    }
    lastScroll = st;
});
  
moveTopBtn.on('click', function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
});