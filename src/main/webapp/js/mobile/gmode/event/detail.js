"use strict"
HandlebarsIntl.registerWith(Handlebars);
displayEventDetail()

function displayEventDetail() {
  $.getJSON('/event/myEventDetail.json', 
      { 
    "no" : location.href.split('?')[1].split('=')[1]
      }, 
      function(result) {
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

        $("#event-edit-btn").on('click', function() {
          swal({
            title: "이벤트를 편집하시면 \n" +
            "해당 이벤트에 대한 \n" + 
            "뮤지션의 지원 및 홍보가 취소됩니다.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            closeOnConfirm: false,
            cancelButtonText: "취소"
          },
          function(){
            location.href= "/mobile/gmode/event/edit.html?no=" + location.href.split('?')[1].split('=')[1]
          });
        })

        $("#event-delete-btn").on('click', function() {
          swal({
            title: "이벤트를 삭제하시면 \n" +
            "해당 이벤트에 대한 \n" + 
            "뮤지션의 지원 및 홍보가 취소됩니다.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8069ef",
            confirmButtonText: "확인",
            closeOnConfirm: false,
            cancelButtonText: "취소"
          },
          function(){
            $.getJSON('/event/delete.json', 
                { 
              "eno" : location.href.split('?')[1].split('=')[1]
                },
                function(result) {
                  if(result.data == "ok") {
                    swal({
                      title: "삭제에 성공했습니다!!",
                      type: "success",
                      showCancelButton: false,
                      confirmButtonColor: "#8069ef",
                      confirmButtonText: "확인",
                      customClass: "checkSwal"
                    },
                    function(){
                      location.href= "/mobile/gmode/index.html"
                    });
                  }
                })
          });

        })

        $("#event-detail-appy-container").on('click', function () {
          $("#event-appy-info").toggle()
          $("#event-appy-backscreen").css("display", "block")
          $("#container").css("position", "fixed")
        })

        $("#event-detail-pr-container").on('click', function () {
          $("#event-pr-info").toggle()
          $("#event-pr-backscreen").css("display", "block")
          $("#container").css("position", "fixed")
        })

        if(result.data.detail.mtc_info == 1) {
          $("#event-detail-appy").css("display", "none")
          $("#event-detail-appy-container").css("display", "none")
          $("#event-detail-pr").css("display", "none")
          $("#event-detail-pr-container").css("display", "none")
          $("#event-edit-btn").css("display", "none")
          $("#event-list-btn").css("display", "block")
          $("#event-delete-btn").css("display", "none")

          $.getJSON('/musician/myEventMatchMusician.json', 
              { 
            "eNo" : location.href.split('?')[1].split('=')[1]
              }, 
              function(result) {
                console.log(result)
                var starInteger = parseInt(result.data.matchMusician.score),
                starRealNumber = result.data.matchMusician.score - starInteger;
                starAdd(starInteger, starRealNumber, result.data.matchMusician)
                heartAdd(result.data.matchMusician)
                var templateFn = Handlebars.compile($('#event-match-template').text())
                var generatedHTML = templateFn(result.data)
                var container = $("#event-detail-mtc-container")
                var html = container.html()
                container.html(html + generatedHTML)
                
                
              })
              return

        }

        setMusicianList()

      })
}

function setMusicianList() {
  $.getJSON('/musician/listAppy.json',
      {'eventNo': location.href.split('?')[1].split('=')[1]},
      function(result) {
        if(result.status != 'success') {
          console.error("getJSON() 실패: ", result.status)
          return;
        }

        if(result.data.listAppy.length == 0) {
          $("#event-detail-appy").css("display", "none")
          $("#event-detail-appy-container").css("display", "none")
          return
        }

        $.each(result.data.listAppy, function(i, item) {
          var starInteger = parseInt(item.score),
          starRealNumber = item.score - starInteger;
          starAdd(starInteger, starRealNumber, item)
          heartAdd(item)
        });

        var templateFn = Handlebars.compile($('#event-appy-toggle-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $("#event-appy-info")
        var html = container.html()
        container.html(html + generatedHTML)

        var templateFn = Handlebars.compile($('#event-appy-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#event-detail-appy-container')
        var html = container.html()
        container.html(html + generatedHTML)

        $("#event-appy-cancel-btn").on('click', function() {
          $("#event-appy-info").toggle()
          $("#event-appy-backscreen").css("display", "none")
          $("#container").css("position", "relative")
        })

      }, function(err) {
        console.log(err)
      })//getJson()

      $.getJSON('/musician/listPr.json',
          {'eventNo': location.href.split('?')[1].split('=')[1]},
          function(result) {
            if(result.status != 'success') {
              console.error("getJSON() 실패: ", result.status)
              return;
            }

            if(result.data.listPr.length == 0) {
              $("#event-detail-pr").css("display", "none")
              $("#event-detail-pr-container").css("display", "none")
              return
            }

            $.each(result.data.listPr, function(i, item) {
              var starInteger = parseInt(item.score),
              starRealNumber = item.score - starInteger;
              starAdd(starInteger, starRealNumber, item)
              heartAdd(item)
            });

            var templateFn = Handlebars.compile($('#event-pr-toggle-template').text())
            var generatedHTML = templateFn(result.data)
            var container = $("#event-pr-info")
            var html = container.html()
            container.html(html + generatedHTML)

            var templateFn = Handlebars.compile($('#event-pr-template').text())
            var generatedHTML = templateFn(result.data)
            var container = $('#event-detail-pr-container')
            var html = container.html()
            container.html(html + generatedHTML)

            $("#event-pr-cancel-btn").on('click', function() {
              $("#event-pr-info").toggle()
              $("#event-pr-backscreen").css("display", "none")
              $("#container").css("position", "relative")
            })

          }, function(err) {
            console.log(err)
          })//getJson()
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



function heartAdd(item) {
  if (item.isFavorite == 1) {
    item.isFavorite = '<i class="fa fa-heart" aria-hidden="true"></i>'
  } else {
    item.isFavorite = '<i class="fa fa-heart-o" aria-hidden="true"></i>'
  }
}