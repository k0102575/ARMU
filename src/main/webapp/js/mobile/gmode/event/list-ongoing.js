"use strict"

displayOngoingEventList()


function displayOngoingEventList() {
  $.getJSON('/event/listOngoing.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }

    $.each(result.data.listOngoing, function(i, item) {
      var starInteger = parseInt(item.matchMusician.score),
      starRealNumber = item.matchMusician.score - starInteger;
      starAdd(starInteger, starRealNumber, item.matchMusician)
      heartAdd(item.matchMusician)
    });

    var templateFn = Handlebars.compile($('#ongoing-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#ongoing-event-container')
    var html = container.html()
    container.html(html + generatedHTML)
  }, function(err) {
    console.log(err)
  })
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

