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
musicianInfoPrev = $("#musician-info-prev"),
requestBtn = $("#musician-basic-info-request-btn"),
requestToggle = $("#musician-info-toggle"),
requestBackScreen = $("#musician-info-backscreen"),
eventCheckBtn = $("#event-check-btn")

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

var heartCount = 0,
    musiPhoto = ""
function displayMusiInfo() {
  $.getJSON('/portfolio/musiInfo.json',
      { 
    "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
        var data = result.data.musician
        musiPhoto = data.photo
        musicianInfoNickName.text(data.nickName)
        musicianHeaderInfoImg.attr("src", data.photo + '_80.png')
        musicianBasicInfoImg.attr("src", data.photo + '_300.png')
        
        $("#musician-info-backscreen").css("background", "url('"+ musiPhoto +"')")
        $("#musician-info-backscreen").css("background-size", "cover")
        $("#musician-info-backscreen").css("background-position", "center")
        
        if(data.isTeam == "Y") {
          musicianBasicInfoName.text(data.nickName + "  (팀)")
        } else {
          if(data.gender == "F") {
            musicianBasicInfoName.text(data.name + "    " + data.age + "    여성")
          } else if(data.gender == "M") {
            musicianBasicInfoName.text(data.name + "    " + data.age + "    남성")
          }
        }

        heartChange(data.fav)
        heartCount = data.fav

        $("#musician-basic-info-favor").on("click", function() {
          if(heartCount == 0) {
            $.post('/musician/favorAdd.json', {
              'no': location.href.split('?')[1].split('=')[1]
            }, function(result) {
              heartCount++
              heartChange(heartCount)
            }, 'json')
          } else if (heartCount == 1) {
            $.post('/musician/favorRemove.json', {
              "no" : location.href.split('?')[1].split('=')[1]
            }, function(result) {
              heartCount--
              heartChange(heartCount)
            }, 'json')

          }
        })

      })
      
      matchRequest()
}

function heartChange(fav) {
  if(fav == 1) {
    $("#musician-basic-info-favor").removeClass("fa fa-heart-o")
    $("#musician-basic-info-favor").addClass("fa fa-heart")
  } else if (fav == 0) {
    $("#musician-basic-info-favor").removeClass("fa fa-heart")
    $("#musician-basic-info-favor").addClass("fa fa-heart-o")
  }
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
  musicianInfoPortfolioBtn.css('border-bottom', '2.5px solid #8069ef')
  musicianInfoIntroduceBtn.css('border-bottom', '1px solid black')
  musicianInfoReviewBtn.css('border-bottom', '1px solid black')
  infoPortfolio.css('display', 'block')
  infoIntroduce.css('display', 'none')
  infoReview.css('display', 'none')
})

musicianInfoIntroduceBtn.on('click', function() {
  musicianInfoPortfolioBtn.css('border-bottom', '1px solid black')
  musicianInfoIntroduceBtn.css('border-bottom', '2.5px solid #8069ef')
  musicianInfoReviewBtn.css('border-bottom', '1px solid black')
  infoPortfolio.css('display', 'none')
  infoIntroduce.css('display', 'block')
  infoReview.css('display', 'none')
})

musicianInfoReviewBtn.on('click', function() {
  musicianInfoPortfolioBtn.css('border-bottom', '1px solid black')
  musicianInfoIntroduceBtn.css('border-bottom', '1px solid black')
  musicianInfoReviewBtn.css('border-bottom', '2.5px solid #8069ef')
  infoPortfolio.css('display', 'none')
  infoIntroduce.css('display', 'none')
  infoReview.css('display', 'block')
})

function matchRequest() {
  $.getJSON('/event/prCheckEvent.json', {
    "no" : location.href.split('?')[1].split('=')[1]
  },
  function(result) {
    if(result.data.eventList.length == 0) {
      var templateFn = Handlebars.compile($('#select-no-event-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $('#musician-info-toggle')
      var html = container.html()
      container.html(html + generatedHTML)
    }

    var templateFn = Handlebars.compile($('#select-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#musician-info-toggle')
    container.html(generatedHTML)
    container.prepend("<div id='event-header'><img id='signup-cancel-btn' src='/image/icon/access-black.png'>나의 이벤트 목록</div>")
    
    for(var i = 0; i < result.data.eventList.length; i++) {
      if(result.data.eventList[i].pr_count != 0 && result.data.eventList[i].prStatus == "Y") {
        $(".request-button[data-no='"+ result.data.eventList[i].no +"']").html("요청<br>취소")
        $(".request-button[data-no='"+ result.data.eventList[i].no +"']").addClass("prIng")
      }
    } // for

    $(".request-button").on('click', function(e) {
      var prCount = $(this).attr('pr_count')
      var prStatus = $(this).attr('prStatus')
      var no = $(this).attr('data-no')

      if(prCount != 0 && prStatus== "Y") {
        swal({
          title: "매칭 요청 중입니다.\n\n" + 
          "취소하시겠습니까?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#8069ef",
          confirmButtonText: "네",
          closeOnConfirm: false,
          cancelButtonText: "아니요"
        },
        function(){
          $.post('/event/cancelPr.json', {
            'musicianNo': location.href.split('?')[1].split('=')[1],
            'eventNo': no
          }, function(result) {
            swal({
              title: "매칭 취소가 성공했습니다!",
              type: "success",
              showCancelButton: false,
              confirmButtonColor: "#8069ef",
              confirmButtonText: "확인",
              customClass: "checkSwal"
            },function(){
              location.reload()
            })
          }, 'json')

        }) // 매칭 취소 swal
        return
      }

      swal({
        title: "이 이벤트에 대해 \n\n" +
        "매칭 요청을 하시겠어요?" ,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#8069ef",
        confirmButtonText: "네",
        closeOnConfirm: false,
        cancelButtonText: "아니요"
      },
      function(){
        $.post('/event/acceptAppyAndPr.json', {
          'musicianNo': location.href.split('?')[1].split('=')[1],
          'eventNo': no
        }, function(result) {
          acceptAppyAndPrResult(result.data)
        }, 'json')
      }) // 매칭 요청 swal
      
    })  // button

    $("#signup-cancel-btn").on('click', function() {
      requestToggle.toggle()
      requestBackScreen.css("display", "none")
      $("#musician-info-deepscreen").css("display", "none" )
    })

  })
}


requestBtn.on('click', function() {
  requestToggle.toggle()
  requestBackScreen.css("display", "block")
  $("#musician-info-deepscreen").css("display", "block" )
})

musicianInfoPrev.on('click', function() {
  location.href = "/mobile/gmode/index.html"
})

function acceptAppyAndPrResult(result) {
  if(result == "decideMatch") {
    swal({
      title: "매칭이 확정되었습니다.",
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    },function(){
      location.reload()
    })
  }

  if(result == "success") {
    swal({
      title: "매칭요청이 성공했습니다!",
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    },function(){
      location.reload()
    })
  }
}
