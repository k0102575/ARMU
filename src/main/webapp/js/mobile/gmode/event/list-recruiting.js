"use strict"

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-up',
    outClass: 'fade-out-down',
    inDuration: 500,
    outDuration: 700,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});


displayRecruitingEventList()

	
function displayRecruitingEventList() {
  $.getJSON('/event/listRecruiting.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    
    $('.loader-box').hide();
    var templateFn = Handlebars.compile($('#recruiting-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#recruiting-event-container')
    var html = container.html()
    container.html(html + generatedHTML).hide().fadeIn(700);
    
    readyBtns()
  }, function(err) {
    console.log(err)
  })
}


function readyBtns() {
	var applicantBtn = $('.recruiting-applicant-open-btn'),
		calleeBtn = $('.recruiting-callee-open-btn'),
		eventBox = $('.event-box');
	
applicantBtn.on('click', function(e) {
	postAppy($(this))
})

calleeBtn.on('click', function(e) {
  postPr($(this))
})

eventBox.on('click', function(e) {
	location.href = 'detail.html'
})

$('.event-box').on('click', function(e) {
  location.href = 'detail.html?no=' + $(this).attr('data-no')
})


function postAppy(pressedBtn) {
  var eventNo = pressedBtn.parent('.recruiting-musibox').attr('data-eventno')
  
  if(pressedBtn.attr('data-fill') == "false") {
    pressedBtn.attr('data-fill', true)
   
    $.getJSON('/musician/listAppy.json',
      {'eventNo': eventNo},
    function(result) {
      if(result.status != 'success') {
        console.error("getJSON() 실패: ", result.status)
        return;
      }

      $.each(result.data.listAppy, function(i, item) {
        var starInteger = parseInt(item.score),
        starRealNumber = item.score - starInteger;
        starAdd(starInteger, starRealNumber, item)
        heartAdd(item)
      });
      
      var templateFn = Handlebars.compile($('#recruiting-appy-open-template').text())
      var generatedHTML = templateFn(result.data)
      var container = pressedBtn.next().children('.recruiting-appy-open-container')
      var html = container.html()
      container.html(html + generatedHTML)
      
      setRejectBtns(eventNo)
      setMatchBtns(eventNo)
      setFoldBtns(pressedBtn)
    }, function(err) {
      console.log(err)
    })//getJson()
  } else {//if()
    setFoldBtns(pressedBtn)
  }//else()
}//postAppy()


function postPr(pressedBtn) {
  if(pressedBtn.attr('data-fill') == "false") {
    pressedBtn.attr('data-fill', true)
   
    $.getJSON('/musician/listPr.json',
      {'eventNo': pressedBtn.parent('.recruiting-musibox').attr('data-eventno')},
    function(result) {
      if(result.status != 'success') {
        console.error("getJSON() 실패: ", result.status)
        return;
      }
      
      $.each(result.data.listPr, function(i, item) {
        var starInteger = parseInt(item.score),
        starRealNumber = item.score - starInteger;
        starAdd(starInteger, starRealNumber, item)
        heartAdd(item)
      });
      
      var templateFn = Handlebars.compile($('#recruiting-pr-open-template').text())
      var generatedHTML = templateFn(result.data)
      var container = pressedBtn.next().children('.recruiting-pr-open-container')
      var html = container.html()
      container.html(html + generatedHTML)
      
      setFoldBtns(pressedBtn)
    }, function(err) {
      console.log(err)
    })//getJson()
  } else {//if()
    setFoldBtns(pressedBtn)
  }//else()
}//postPr()


function setRejectBtns(eventNo) {
  $('.reject-btn').on('click', function() {
    var musicianNo = $(this).attr('data-no')
    console.log(eventNo)
    $.post('/event/rejectAppy.json', {
      'musicianNo' : musicianNo,
      'eventNo' : eventNo
    }, function(result) {
      console.log('reject post succeed')
      alert('거절했음')
    }, 'json')

  })
}

function setMatchBtns(eventNo) {
  $('.decide-btn').on('click', function() {
    var musicianNo = $(this).attr('data-no')

    $.post('/event/decideMatch.json', {
      'musicianNo' : musicianNo,
      'eventNo' : eventNo
    }, function(result) {
      console.log('match post succeed')
      alert('매칭됐음')
    }, 'json')

  })
}

function setFoldBtns(pressedBtn) {
  if(pressedBtn.attr('data-open') == "true") {
    pressedBtn.html('펼치기 <i class="fa fa-angle-down" aria-hidden="true"></i>')
        .attr('data-open', false)
  } else {
    pressedBtn.html('접기 <i class="fa fa-angle-up" aria-hidden="true"></i>')
          .attr('data-open', true)
  }
  pressedBtn.siblings('.recruiting-musibox-open-container').toggle( "fold", 500 );
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


}