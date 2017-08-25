"use strict"

displayEndEventList()


function displayEndEventList() {
	$.getJSON('/event/listMusiPr.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
		console.log(result.data)
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
      title: "이 이벤트에 대한 참여 요청을 \n\n거절하시겠어요?",
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
      
      location.reload()
    }, 'json')
  })
}

