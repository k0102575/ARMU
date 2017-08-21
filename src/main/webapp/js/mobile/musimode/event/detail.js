"use strict"
HandlebarsIntl.registerWith(Handlebars);
displayEventDetail()

function displayEventDetail() {
  $.getJSON('/event/detail.json', 
    { 
      "no" : location.href.split('?')[1].split('=')[1]
    },
    function(result) {
      console.log(result)
    var templateFn = Handlebars.compile($('#select-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#container')
    container.html(generatedHTML)
    
    rhsCheck(result.data.detail.haveRehearsal)
    var appy = result.data.detail.appy_check
    
    $("#event-detail-header-prev").on('click', function() {
      location.href = "/mobile/musimode/index.html"
    })
    
    if(appy == 1) {
    $("#portfolio-add-btn").html("지원<br>취소")
    $("#portfolio-add-btn").addClass("evet-detail-appy-cancel-btn")
    return
    }
    
    $("#portfolio-add-btn").on('click', function() {
      if(appy == 1) {
        return false;
      }
      
    	$.post('/event/requestEvent.json', {
          'eNo': $(this).attr("data-value")
        }, function(result) {
        	console.log(result)
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
    }) // portfolio-add-btn.click
    
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

function appyCheck(appy) {
  if(appy == 1) {
    $("#portfolio-add-btn").text("지원중")
    
    return
  }
  
  if(appy == 0) {
    $("#event-detail-rehearsal").css('display', 'block')
    $("#event-rehearsal-container").css('display', 'block')
    return
  }
}


