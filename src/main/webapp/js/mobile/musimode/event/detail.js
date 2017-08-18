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
    
    $("#event-detail-header-prev").on('click', function() {
      location.href = "/mobile/musimode/index.html"
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

