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
    
    favCheck(result.data.detail.isFavorite)
    rhsCheck(result.data.detail.haveRehearsal)
    
    $("#event-detail-header-prev").on('click', function() {
      location.href = "/mobile/musimode/index.html"
    })
    
  })
}


function favCheck(favorite) {
  if(favorite == true) {
    $("#event-detail-header-container").append("<i class='fa fa-heart' id='event-detail-fav-true' aria-hidden='true'></i>")
    return
  }
  if(favorite == false) {
    $("#event-detail-header-container").append("<i class='fa fa-heart-o' id='event-detail-fav-false' aria-hidden='true'></i>")
    return
  }
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

