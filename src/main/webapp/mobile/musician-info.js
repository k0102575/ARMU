var lastScroll = 0,
    musicianHeaderInfoImg = $("#musician-header-info-img"),
    moveTopBtn = $("#move_top_btn")

    
    
    $(window).scroll(function(event){
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