var lastScroll = 0,
musicianHeaderInfoImg = $("#musician-header-info-img"),
moveTopBtn = $("#move_top_btn"),
musicianInfoBtnContainer = $("#musician-info-btn-container"),
musicianInfoPortfolioBtn = $('#musician-info-portfolio-btn'),
musicianInfoIntroduceBtn = $('#musician-info-introduce-btn'),
musicianInfoReviewBtn = $('#musician-info-review-btn'),
musicianInfoNickName = $("#musician-info-nickname"),
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

var musicianNo = parseInt(location.href.split('?')[1].split('=')[1])

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
              'no': musicianNo
            }, function(result) {
              heartCount++
              heartChange(heartCount)
            }, 'json')
          } else if (heartCount == 1) {
            $.post('/musician/favorRemove.json', {
              "no" : musicianNo
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
  } else if ($(document).scrollTop() < 327) {
    musicianInfoBtnContainer.css("position", "relative")
    musicianHeaderInfoImg.css("display", "none")
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
    "no" : musicianNo
  },
  function(result) {
    if(result.data.eventList.length == 0) {
      var templateFn = Handlebars.compile($('#select-no-event-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $('#musician-info-toggle')
      container.html(generatedHTML)
      container.prepend("<div id='event-header'><img id='signup-cancel-btn' src='/image/icon/access-black.png'>나의 이벤트 목록</div>")
      $("#signup-cancel-btn").on('click', function() {
        requestToggle.toggle()
        requestBackScreen.css("display", "none")
        $("#musician-info-deepscreen").css("display", "none" )
      })
      return
    }
    
    var templateFn = Handlebars.compile($('#select-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#musician-info-toggle')
    container.html(generatedHTML)
    container.prepend("<div id='event-header'><img id='signup-cancel-btn' src='/image/icon/access-black.png'>나의 이벤트 목록</div>")
    
    eventCheck(result.data)
    clickSetting()
    
   
  })
}


function eventCheck(result) {
  console.log(result)
  
  for(var i = 0; i < result.eventList.length; i++) {
    
    if(result.eventList[i].appyStatus == "N") { // 지원을 거절한 상태
      $(".btn[data-no=" + result.eventList[i].no + "]").html("요청")
      $(".btn[data-no=" + result.eventList[i].no + "]").addClass("appyStatusN")
      continue
    }
    
    if(result.eventList[i].prStatus == "N") { // 홍보를 거절 받은 상태
      $(".btn[data-no=" + result.eventList[i].no + "]").html("요청")
      $(".btn[data-no=" + result.eventList[i].no + "]").addClass("prStatusN")
      continue
    }
    
    if(result.eventList[i].appyActive == "Y") { // 지원 받은 상태
      $(".btn[data-no=" + result.eventList[i].no + "]").html("수락")
      $(".btn[data-no=" + result.eventList[i].no + "]").addClass("decideMatch")
      $(".rejectAppy[data-no=" + result.eventList[i].no + "]").css("display", "block")
      $(".event-detail-display[data-no=" + result.eventList[i].no + "]").css("display", "block")
      $(".event-detail-display[data-no=" + result.eventList[i].no + "]").append("<span class='event-display-hashtag'>지원받은 이벤트</span>")
      continue
    }
    
    
    // 아무것도 아닌 상태
    if(result.eventList[i].appyStatus == "Z" && result.eventList[i].prStatus == "Z" && result.eventList[i].appyActive == "Z" && result.eventList[i].prActive == "Z") {
      $(".btn[data-no=" + result.eventList[i].no + "]").html("요청")
      $(".btn[data-no=" + result.eventList[i].no + "]").addClass("acceptAppyAndPr")
    }
    
    // 재홍보 상태
    if(result.eventList[i].appyStatus == "Z" && result.eventList[i].prStatus == "Z" && result.eventList[i].appyActive == "Z" && result.eventList[i].prActive == "N") {
      $(".btn[data-no=" + result.eventList[i].no + "]").html("요청")
      $(".btn[data-no=" + result.eventList[i].no + "]").addClass("acceptAppyAndPr")
    }
    
    
    if(result.eventList[i].prActive == "Y") { // 홍보중인 상태
      $(".btn[data-no=" + result.eventList[i].no + "]").html("취소")
      $(".btn[data-no=" + result.eventList[i].no + "]").addClass("cancelPr")
      $(".event-detail-display[data-no=" + result.eventList[i].no + "]").css("display", "block")
      $(".event-detail-display[data-no=" + result.eventList[i].no + "]").append("<span class='event-display-hashtag'>홍보중인 이벤트</span>")
    }
    
    
  } // for
}


requestBtn.on('click', function() {
  requestToggle.toggle()
  requestBackScreen.css("display", "block")
  $("#musician-info-deepscreen").css("display", "block" )
})

musicianInfoPrev.on('click', function() {
  window.history.go(-1);
})


function clickSetting() {
  
  $("#signup-cancel-btn").on('click', function() {
    requestToggle.toggle()
    requestBackScreen.css("display", "none")
    $("#musician-info-deepscreen").css("display", "none" )
  })
  
  $(".appyStatusN").on('click', function() {
    var eventNo = parseInt($(this).attr("data-no"))
        swal({
      title: "\n지원을 거절했던 뮤지션입니다.",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    },function() {
      }, 'json') // swal
    }) // appy_reject
    
    $(".prStatusN").on('click', function() {
    var eventNo = parseInt($(this).attr("data-no"))
        swal({
      title: "\n홍보를 거절받았던 뮤지션입니다.",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    },function() {
      }, 'json') // swal
    }) // appy_reject
  
//4. 뮤지션이 이벤트에 지원(APPY)하기 && 3. 홍보(pr) 수락하기
  $(".acceptAppyAndPr").on('click', function () {
    var eventNo = parseInt($(this).attr("data-no"))
    swal({
      title: "\n매칭을 요청하시겠습니까?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "네",
      closeOnConfirm: false,
      cancelButtonText: "아니요"
    },function() {
      $.post('/event/acceptAppyAndPr.json', {
        'eventNo': eventNo,
        'musicianNo' : musicianNo
      }, function(result) {
        if(result.status != 'success') {
          console.log('json error')
        }

        if(result.data == 'canceled') {//이미 취소된 pr인 경우 실행
          swal({
            title: "요청을 취소하여 \n\n수락할 수 없는 상태입니다.",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        } else {//성공적으로 거절 완료한 경우 실행
          swal({
            title: "매칭을 요청했습니다.\n\n이벤트 목록에서 확인하세요!",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        }
        
      }, 'json') // 이벤트 지원 이벤트
    }) // 지원 묻는 swal
  }) // .acceptAppyAndPr
  
  $(".rejectAppy").on('click', function () {
    var eventNo = parseInt($(this).attr("data-no"))
    swal({
      title: "지원을 거절하시겠습니까?\n\n" +
          "거절후 에는 매칭할수 없습니다.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "네",
      closeOnConfirm: false,
      cancelButtonText: "아니요"
    },function() {
      $.post('/event/rejectAppy.json', {
        'eventNo': eventNo,
        'musicianNo' : musicianNo
      }, function(result) {
        if(result.status != 'success') {
          console.log('json error')
        }

        if(result.data == 'canceled') {//이미 취소된 pr인 경우 실행
          swal({
            title: "요청을 취소하여 \n\n수락할 수 없는 상태입니다.",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        } else {//성공적으로 거절 완료한 경우 실행
          swal({
            title: "매칭을 거절했습니다.",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        }
        
      }, 'json') // 이벤트 지원 이벤트
    }) // 지원 묻는 swal
  }) // .rejectAppy
  
  // 4. 매칭 확정하기
  $(".decideMatch").on('click', function () {
    var eventNo = parseInt($(this).attr("data-no"))
    swal({
      title: "매칭을 확정하시겠습니까?\n\n" +
      		"확정후 에는 취소할수없습니다.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "네",
      closeOnConfirm: false,
      cancelButtonText: "아니요"
    },function() {
      $.post('/event/acceptAppyAndPr.json', {
        'eventNo': eventNo,
        'musicianNo' : musicianNo
      }, function(result) {
        if(result.status != 'success') {
          console.log('json error')
        }

        if(result.data == 'canceled') {//이미 취소된 pr인 경우 실행
          swal({
            title: "요청을 취소하여 \n\n수락할 수 없는 상태입니다.",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        } else {//성공적으로 거절 완료한 경우 실행
          swal({
            title: "매칭을 확정했습니다.\n\n이벤트 목록에서 확인하세요!",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        }
        
      }, 'json') // 이벤트 지원 이벤트
    }) // 지원 묻는 swal
  }) // .decideMatch
  
  // 11. 일반인이 홍보(PR) 취소
  $(".cancelPr").on('click', function () {
    var eventNo = parseInt($(this).attr("data-no"))
    swal({
      title: "\n홍보를 취소하시겠습니까?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "네",
      closeOnConfirm: false,
      cancelButtonText: "아니요"
    },function() {
      $.post('/event/cancelPr.json', {
        'eventNo': eventNo,
        'musicianNo' : musicianNo
      }, function(result) {
        if(result.status != 'success') {
          console.log('json error')
        }

        if(result.data == 'canceled') {//이미 취소된 pr인 경우 실행
          swal({
            title: "요청을 취소하여 \n\n수락할 수 없는 상태입니다.",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        } else {//성공적으로 거절 완료한 경우 실행
          swal({
            title: "\n홍보를 취소했습니다.",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        }
        
      }, 'json') // 이벤트 지원 이벤트
    }) // 지원 묻는 swal
  }) // .cancelPr
  
  
}



