var lastScroll = 0,
    musicianHeaderInfoImg = $("#musician-header-info-img"),
    moveTopBtn = $("#move_top_btn"),
    musicianInfoBtnContainer = $("#musician-info-btn-container"),
    musicianHeaderInfoImg = $("#musician-header-info-img"),
    musicianInfoPortfolioBtn = $('#musician-info-portfolio-btn'),
    musicianInfoIntroduceBtn = $('#musician-info-introduce-btn'),
    musicianInfoReviewBtn = $('#musician-info-review-btn'),
    musicianInfoNickName = $("#musician-info-nickname"),
    musicianHeaderInfoImg = $("#musician-header-info-img"),
    musicianBasicInfoImg = $("#musician-basic-info-img"),
    musicianBasicInfoName = $("#musician-basic-info-name"),
    musicianInfoPrev = $("#musician-info-prev")
    
    infoPortfolio = $("#info-portfolio"),
    infoIntroduce = $("#info-introduce"),
    infoReview = $("#info-review")
    
    infoPortfolio.load('portfolio.html');
    infoIntroduce.load('introduce.html')
    infoReview.load('review.html'); 
    
    infoPortfolio.css('display', 'block')
    infoIntroduce.css('display', 'none')
    infoReview.css('display', 'none')

displayMusiInfo()
    
function displayMusiInfo() {
  $.getJSON('/musician/musiInfo.json',
      { 
        "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
      var data = result.data.musician
      musicianInfoNickName.text(data.nickName)
      musicianHeaderInfoImg.attr("src", data.photo)
      musicianBasicInfoImg.attr("src", data.photo)
      if(data.isTeam == "Y") {
        musicianBasicInfoName.text(data.nickName + "  (팀)")
      } else {
        if(data.gender == "F") {
          musicianBasicInfoName.text(data.name + "    " + data.age + "    여성")
        } else if(data.gender == "M") {
          musicianBasicInfoName.text(data.name + "    " + data.age + "    남성")
        }
      }
      
      $("#musician-basic-info-favor").on("click", function() {
        $.post('/musician/favorAdd.json', {
          'no': location.href.split('?')[1].split('=')[1]
        }, function(result) {
          alert("뮤지션이 관심 목록에 추가되었습니다.")
          location.reload();
        }, 'json')
      })
      
      if(data.fav == 1) {
        $("#musician-basic-info-favor").css("color", "#ba3d3d")
      } else if (data.fav == 0) {
        $("#musician-basic-info-favor").css("color", "black")
      }
      
  })
}
    

    

$(window).scroll(function(event){
  

 if($(document).scrollTop() > 327) {
  musicianInfoBtnContainer.css("position", "fixed")
  musicianHeaderInfoImg.css("display", "block")
  musicianHeaderInfoImg.css("top", "9%")
   } else if ($(document).scrollTop() < 327) {
  musicianInfoBtnContainer.css("position", "relative")
  musicianHeaderInfoImg.css("display", "none")
  musicianHeaderInfoImg.css("top", "18%")
}

var st = $(this).scrollTop();
  if (st > lastScroll){
   moveTopBtn.css("display", "block")
  } else {
   moveTopBtn.css("display", "none")
  }
  lastScroll = st;
});

moveTopBtn.on('click', function() {
  $('html, body').animate({
    scrollTop : 0
  }, 400);
  return false;
});

musicianInfoPortfolioBtn.on('click', function() {
  musicianInfoPortfolioBtn.css('border-bottom', '2.5px solid black')
  musicianInfoIntroduceBtn.css('border-bottom', '1px solid black')
  musicianInfoReviewBtn.css('border-bottom', '1px solid black')
  infoPortfolio.css('display', 'block')
  infoIntroduce.css('display', 'none')
  infoReview.css('display', 'none')
})

musicianInfoIntroduceBtn.on('click', function() {
  musicianInfoPortfolioBtn.css('border-bottom', '1px solid black')
  musicianInfoIntroduceBtn.css('border-bottom', '2.5px solid black')
  musicianInfoReviewBtn.css('border-bottom', '1px solid black')
  infoPortfolio.css('display', 'none')
  infoIntroduce.css('display', 'block')
  infoReview.css('display', 'none')
})

musicianInfoReviewBtn.on('click', function() {
  musicianInfoPortfolioBtn.css('border-bottom', '1px solid black')
  musicianInfoIntroduceBtn.css('border-bottom', '1px solid black')
  musicianInfoReviewBtn.css('border-bottom', '2.5px solid black')
  infoPortfolio.css('display', 'none')
  infoIntroduce.css('display', 'none')
  infoReview.css('display', 'block')
})

musicianInfoPrev.on('click', function() {
  location.href = "/mobile/gmode/index.html"
})

