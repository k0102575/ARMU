"use strict"

displayEndEventList()


function displayEndEventList() {
  $.getJSON('/event/listMusiPr.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    console.log(result.data)
        
//    $.each(result.data.listPr, function(i, item) {
//      setPrBtnClass(item)
//    })

    var templateFn = Handlebars.compile($('#pr-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#pr-event-container')
    var html = container.html()
    container.html(html + generatedHTML)

    $('.event-box').on('click', function(e) {
      location.href = '../detail.html?no=' + $(this).attr('data-no')
    })

    setBtns()
  }, function(err) {
    console.log(err)
  })
}


function setBtns() {
  
  $('.pr-reject-btn').on('click', function(e) {
    var pressedBtn = $(this)
    swal({
      title: "\n참여 요청을 거절하시겠어요?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "lightSeaGreen",
      confirmButtonText: "네",
      closeOnConfirm: true,
      cancelButtonText: "아니요"
    },
    function(){//확인 버튼 누르면 실행
      $.post('/event/rejectPr.json', {
        'eventNo': pressedBtn.attr('data-no')
      }, function(result) {
        if(result.status != 'success') {
          console.log('json error')
        }

        if(result.data == 'canceled') {//이미 취소된 pr인 경우 실행
          swal({
            title: "이미 뮤지션이 취소하였습니다.",
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
          location.reload()
        }
      }, 'json')
    });//swal()
  })


  $('.pr-accept-btn').on('click', function(e) {
    var pressedBtn = $(this)

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
          title: "요청을 수락하였습니다.\n\n\n지원한 이벤트 목록에서 \n\n확인하세요!",
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
    }, 'json')
  })
  
  

}


//function setPrBtnClass(item) {
//  if(item.prStatus == 'N') {//거절했었다면
//    item.prStatusN = ''
//    item.prStatusY = 'pr-no-btn'
//    item.prStatusNull = 'pr-no-btn'
//  } else if(item.prStatus == 'Y') {//수락했었다면
//    item.prStatusY = ''
//    item.prStatusN = 'pr-no-btn'
//    item.prStatusNull = 'pr-no-btn'
//  } else {//처음 온 제안이라면
//    item.prStatusNull = ''
//    item.prStatusN = 'pr-no-btn'
//    item.prStatusY = 'pr-no-btn'
//  }
//}