"use strict"
var domain = "http://192.168.0.22:8888";

displayOngoingEventList()


function displayOngoingEventList() {
  $.getJSON('/event/listOngoing.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    
    console.log(result.data)

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
    
    $('.event-box').on('click', function(e) {
      location.href = 'detail.html?no=' + $(this).attr('data-no')
    })
    setMusicianClickEvents()
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

function heartChange(isFavorite, pressedBtn) {
  if (isFavorite == '<i class="fa fa-heart" aria-hidden="true"></i>') {
    isFavorite = '<i class="fa fa-heart-o" aria-hidden="true"></i>'
      $.post('/musician/favorRemove.json', {
        'no': pressedBtn.attr('data-no')
        }, function(result) {
          if(result.status == 'error') {
            
          }
        }, 'json')
  } else {
    isFavorite = '<i class="fa fa-heart" aria-hidden="true"></i>'
    $.post('/musician/favorAdd.json', {
      'no': pressedBtn.attr('data-no')
      }, function(result) {}, 'json')
  }
  return isFavorite;
}

function setMusicianClickEvents() {
  $('.musician-click').on('click', function() {
    location.href = '../musi-info/index.html?no=' + $(this).attr('data-no')
  })
  
  $('.favor-click').on('click', function() {
    var pressedBtn = $(this);
    var isFavorite = heartChange(pressedBtn.html(), pressedBtn)
    pressedBtn.html(isFavorite)
  })
  
  $('.ongoing-applicant-btn').on('click', function() {
    location.href = domain + '/mobile/chat/chat-msg.html' 
                    + '?receiverNo=' + $(this).attr('data-receiver')
                    + '&nickname=' + $(this).attr('data-nick')
                    + '&senderNo=' + $(this).attr('data-sender')
                    + '&mode=gmode'
  })
}

