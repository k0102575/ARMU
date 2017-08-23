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
matchRequest()

function displayMusiInfo() {
  $.getJSON('/portfolio/musiInfo.json',
      { 
    "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
        var data = result.data.musician
        musicianInfoNickName.text(data.nickName)
        musicianHeaderInfoImg.attr("src", data.photo + '_80.png')
        musicianBasicInfoImg.attr("src", data.photo + '_300.png')
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
          if(data.fav == 0) {
            $.post('/musician/favorAdd.json', {
              'no': location.href.split('?')[1].split('=')[1]
            }, function(result) {
              swal({
                title: "관심뮤지션 리스트에 \n\n뮤지션이 추가되었습니다!",
                type: "success",
                showCancelButton: false,
                confirmButtonColor: "#8069ef",
                confirmButtonText: "확인",
                customClass: "checkSwal"
              },function() {
                location.reload()
              });
            }, 'json')
          } else if (data.fav == 1) {
            $.post('/musician/favorRemove.json', {
              "no" : location.href.split('?')[1].split('=')[1]
            }, function(result) {
              swal({
                title: "관심뮤지션 리스트에서 \n\n뮤지션이 삭제되었습니다!",
                type: "success",
                showCancelButton: false,
                confirmButtonColor: "#8069ef",
                confirmButtonText: "확인",
                customClass: "checkSwal"
              },function() {
                location.reload()
              });
            }, 'json')

          }
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
    var html = container.html()
    container.html(html + generatedHTML)
    
    for(var i = 0; i < result.data.eventList.length; i++) {
      
      $(".request-button[data-no='"+ result.data.eventList[i].no +"']").attr("pr_count", result.data.eventList[i].pr_count)
      $(".request-button[data-no='"+ result.data.eventList[i].no +"']").attr("prStatus", result.data.eventList[i].prStatus)
      
      if(result.data.eventList[i].pr_count == 0) {
        $(".request-button[data-no='"+ result.data.eventList[i].no +"']").attr("prStatus", "null")
      }

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

        }) // swal
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
        $.post('/event/prEvent.json', {
          'muNo': location.href.split('?')[1].split('=')[1],
          'eNo': no,
          'prNo' : prCount,
          'prStatus' : prStatus
        }, function(result) {
          if(result.data == "success") {
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
        }, 'json')

      }) // swal
    })  // button
    
    $("#signup-cancel-btn").on('click', function() {
      requestToggle.toggle()
      requestBackScreen.css("display", "none")
    })

  }
  )}

requestBtn.on('click', function() {
  requestToggle.toggle()
  requestBackScreen.css("display", "block")
})

musicianInfoPrev.on('click', function() {
  location.href = "/mobile/gmode/index.html"
})

