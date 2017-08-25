"use strict"
HandlebarsIntl.registerWith(Handlebars);
displayEventDetail()
var eventNo = 0

function displayEventDetail() {
  $.getJSON('/event/detail.json', 
      { 
    "no" : location.href.split('?')[1].split('=')[1]
      },
      function(result) {
        console.log(data)
        var data = result.data.detail
        eventNo = data.no
        var templateFn = Handlebars.compile($('#select-event-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#container')
        container.html(generatedHTML)

        rhsCheck(data.haveRehearsal)
        eventCheck(data)
        clickSetting()

      })
}

function rhsCheck(rhs) {
  if(rhs == false) {
    $("#event-detail-rehearsal").css('display', 'none')
    $("#event-rehearsal-container").css('display', 'none')
    return
  }

  if(rhs == true) {
    $("#event-detail-rehearsal").css('display', 'block')
    $("#event-rehearsal-container").css('display', 'block')
    return
  }
}

function eventCheck(event) {
  var prStatus = event.prStatus,
  prActive = event.prActive,
  appyStatus = event.appyStatus,
  appyActive = event.appyActive,
  btn = $(".btn"),
  eventDetail = $("#event-detail-display")

  if(appyStatus == "N" && prStatus == "N" && appyActive == "N" && prActive == "N") {
    btn.addClass("acceptPrAndAppy")
    return;
  }

  if(appyStatus == "Y") {
    btn.css("display","none")
    eventDetail.css("display", "block")
    eventDetail.append("<span class='event-display-hashtag'>매칭된 이벤트</span>")
    return
  }

  if(appyStatus == "N") {
    $(".btn").addClass("appyReject-btn")
    return
  }

  if(prStatus == "N") {
    $(".btn").addClass("prReject-btn")
    return
  }

  if(prStatus == "Y" || appyActive == "Y") {
    btn.html("지원<br>취소")
    btn.addClass("cancelAppy-btn")
    eventDetail.css("display", "block")
    eventDetail.append("<span class='event-display-hashtag'>지원한 이벤트</span>")
  }

  if(prActive == "Y") { // 수락 거절 버튼 2개 뛰워야한다.
    
  }
}

function clickSetting() {

  $(".acceptPrAndAppy").on('click', function () {
    swal({
      title: "이벤트에 지원하시겠습니까?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "lightseagreen",
      confirmButtonText: "네",
      closeOnConfirm: true,
      cancelButtonText: "아니요"
    },function() {
      $.post('/event/acceptPrAndAppy.json', {
        'eventNo': pressedBtn.attr('data-no')
      }, function(result) {
        if(result.status != 'success') {
          console.log('json error')
        }

        if(result.data == 'canceled') {//이미 취소된 pr인 경우 실행
          swal({
            title: "요청을 취소하여 \n\n수락할 수 없는 상태입니다.",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "lightseagreen",
            confirmButtonText: "확인",
            customClass: "checkSwal"
          },
          function(){
            location.reload()
          })//swal()
        } else {//성공적으로 거절 완료한 경우 실행
          swal({
            title: "요청을 수락하였습니다.\n\n\n지원한 이벤트 목록에서 확인하세요!",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "lightseagreen",
            confirmButtonText: "확인",
            customClass: "acceptCheckSwal"
          },
          function(){
            location.reload()
          })//swal()
        }
      }, 'json') // 이벤트 지원 이벤트
    }) // 지원 묻는 swal
  }) // .acceptPrAndAppy

  $(".appyReject-btn").on('click', function() {
    swal({
      title: "지원요청을 거절받은 \n\n" +
      "이벤트입니다.",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "lightseagreen",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    })
  }) // .appyReject-btn
  
  $(".prReject-btn").on('click', function() {
    swal({
      title: "매칭요청을 거절했던 \n\n" +
      "이벤트입니다.",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "lightseagreen",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    })
  }) // .appyReject-btn
  
  $(".cancelAppy-btn").on('click', function () {
    
  })


}

/*$("#event-detail-header-prev").on('click', function() {
  location.href = "/mobile/musimode/index.html"
})

$(".portfolio-add-btn").on('click', function() {

  if(appy != 0 && appyActiveCheck == "Y") {
    $.post('/event/cancelAppy.json', {
      'eventNo': $(this).attr("data-value")
    }, function(result) {
      if(result.data == "success") {
        swal({
          title: "지원취소가 성공했습니다!",
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
    return
  }

  $.post('/event/acceptPrAndAppy.json', {
    'eventNo': $(this).attr("data-value")
  }, function(result) {
    if(result.data == "success") {
      swal({
        title: "이벤트 지원이 성공했습니다!",
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

}) */

//portfolio-add-btn.click

