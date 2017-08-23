"use strict"
var appy = 0,
appyActiveCheck = 0

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
        appy = result.data.detail.appy_check,
        appyActiveCheck = result.data.detail.appy_activeCheck

        $("#event-detail-header-prev").on('click', function() {
          location.href = "/mobile/musimode/index.html"
        })

        $(".portfolio-add-btn").on('click', function() {
          
          if(appy != 0 && appyActiveCheck == "Y") {
            $.post('/event/requestEventCancel.json', {
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
          
            $.post('/event/appyEvent.json', {
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

        }) // portfolio-add-btn.click

        prDisplay(result.data.detail.pr_count)
        if(result.data.detail.pr_count == 0 && appyActiveCheck == null) {
          $("#event-detail-display").css("display", "none")
        } else if (result.data.detail.pr_count == 0 && appyActiveCheck == 'N') {
          $("#event-detail-display").css("display", "none")
          return
        }

        if (appy != 0 && appyActiveCheck == 'Y')  {
          $(".portfolio-add-btn").html("지원<br>취소")
          $(".portfolio-add-btn").addClass("evet-detail-appy-cancel-btn")
          $("#event-detail-display").append("<span class='event-display-hashtag'>지원한 이벤트</span>")
          return
        }
        

      })
}

function prDisplay(prCheck) {
  if(prCheck == 1) {
    $("#event-detail-display").append("<span class='event-display-hashtag'>제안받은 이벤트</span>")
    return
  }
  return
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
    $(".portfolio-add-btn").text("지원중")
    return
  }

  if(appy == 0) {
    $("#event-detail-rehearsal").css('display', 'block')
    $("#event-rehearsal-container").css('display', 'block')
    return
  }
}


