"use strict"
HandlebarsIntl.registerWith(Handlebars);

var mtcno = 0,
    params = decodeURIComponent(location.href).split('?')[1].split('&'),
    eventNo = parseInt(params[0].split('=')[1]),
    openReview = params[1].split('=')[1];

displayEventDetail()

function displayEventDetail() {
  $.getJSON('/event/myEventDetail.json', 
      { 
    "eventNo" : eventNo
      }, 
      function(result) {
        mtcno = result.data.detail.mtcno
        var templateFn = Handlebars.compile($('#select-event-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#container')
        var html = container.html()
        container.html(generatedHTML + html).hide().fadeIn(700)

        rhsCheck(result.data.detail.haveRehearsal)

        $("#event-detail-header-prev").on('click', function() {
          location.href = "/mobile/gmode/event/list.html"
        })

        $("#event-list-btn").on('click', function() {
          location.href = "/mobile/gmode/event/list.html"
        })

        $.getJSON('/musician/myEventMatchMusician.json', 
            { 
          "eNo" : eventNo
            }, 
            function(result) {
              console.log(result.data)
              var starInteger = parseInt(result.data.matchMusician.score),
              starRealNumber = result.data.matchMusician.score - starInteger;
              starAdd(starInteger, starRealNumber, result.data.matchMusician)
              var templateFn = Handlebars.compile($('#event-match-template').text())
              var generatedHTML = templateFn(result.data)
              var container = $("#event-detail-mtc-container")
              var html = container.html()
              container.html(html + generatedHTML)
              
              var muno = result.data.matchMusician.no
              
              
              $(".ongoing-applicant-btn").on("click", function(e) {
                $("#event-appy-info").toggle()
                $("#event-appy-backscreen").css("display", "block")
                $("#container").css("position", "fixed")
              })
              
              $("#event-appy-cancel-btn").on('click', function() {
                $("#event-appy-info").toggle()
                $("#event-appy-backscreen").css("display", "none")
                $("#container").css("position", "relative")
              })
              
              $(".event-rev-btn").on('click', function() {
                if($("input[name=rating]:checked").val() == null) {
                  swal({
                    title: "\n점수를 체크해주세요!",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#8069ef",
                    confirmButtonText: "확인",
                    customClass: "checkSwal"
                  });
                  return;
                }
                
                if($("#event-rev-text").val().length == 0 ) {
                  swal({
                    title: "\n리뷰를 입력하세요!",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#8069ef",
                    confirmButtonText: "확인",
                    customClass: "checkSwal"
                  });
                  return;
                }
                
                swal({
                  title: "작성하신 리뷰는 수정 할수 없어요.\n" +
                      "작성하시겠습니까?",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#8069ef",
                  confirmButtonText: "네",
                  closeOnConfirm: true,
                  cancelButtonText: "아니요"
                },
                function(){
                  $.post('/event/updateReview.json', {
                    'score' : $("input[name=rating]:checked").val(),
                    'rev': $("#event-rev-text").val(),
                    'mtcno' : mtcno,
                    'musicianNo' : muno,
                    "no" : eventNo
                  }, function(result) {
                    if(result.data == "ok") {
                      location.reload()
                    }
                  }, 'json')
              });
              })
              
              if(result.data.matchMusician.rev != "null") {
                openReview = "false"
              }
              
              if(openReview == 'true') $('.ongoing-applicant-btn').trigger('click')
              
              if(result.data.matchMusician.rev == "null") {
                openReview = "false"
                $("#event-detail-rev").css('display', 'none')
                $("#event-detail-rev-container").css('display', 'none')
                return
                console.log(openReview)
              }
              
              $(".ongoing-applicant-btn").css("display", "none")
              $(".ongoing-applicant-img").addClass("haveReview")
              $("#event-detail-mtc-container").css('height', '150px')
              $("#event-detail-rev-container").html(result.data.matchMusician.rev)
              

            })
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

function starAdd(starInteger, starRealNumber, item) {
  item.score = "";

  for (var i = 1; i <= starInteger; i++) {
    item.score += "<i class='fa fa-star' aria-hidden='true'></i>"
  }

  if(starInteger >= 5) {
    return;
  }

  if(starRealNumber >= 0.8) {
    item.score += "<i class='fa fa-star' aria-hidden='true'></i>"
  } else if(starRealNumber <= 0.3) {
    item.score += "<i class='fa fa-star-o' aria-hidden='true'></i>"
  } else {
    item.score += "<i class='fa fa-star-half-o' aria-hidden='true'></i>"
  }

  if(starInteger < 4) {
    for (var i = 1; i <= 4 - starInteger; i++) {
      item.score += "<i class='fa fa-star-o' aria-hidden='true'></i>"
    }
  }

  return item;
}



