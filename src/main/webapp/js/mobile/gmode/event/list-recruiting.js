"use strict"
HandlebarsIntl.registerWith(Handlebars);
var isRecommandEvent = true;

var noEventView = $('.recruiting-no-event'),
yesEventView = $('.recruiting-yes-event');

if(isRecommandEvent) {
	noEventView.css('display', 'none')
	yesEventView.css('display', '')
	
	displayRecruitingEventList()

	
	
} else {
	yesEventView.css('display', 'none')
	noEventView.css('display', '')
}

function displayRecruitingEventList() {
  $.getJSON('/event/listRecruiting.json', function(result) {
    if(result.status != 'success') {
      console.error("getJSON() 실패: ", result.status)
      return;
    }
    
    console.log(result.data)
    var templateFn = Handlebars.compile($('#recruiting-event-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#recruiting-event-container')
    var html = container.html()
    container.html(html + generatedHTML)
    controlBtns()
  }, function(err) {
    console.log(err)
  })
}


function controlBtns() {
	var applicantBtn = $('.recruiting-applicant-open-btn'),
		calleeBtn = $('.recruiting-callee-btn'),
		eventBox = $('.event-box');
	
applicantBtn.on('click', function(e) {
	var pressedBtn = $(this);
  
	if(pressedBtn.attr('data-fill') == "false") {
	  pressedBtn.attr('data-fill', true)
	  $.getJSON('/musician/listPr.json',
	    {'eventNo': 4},
		function(result) {
	    if(result.status != 'success') {
	      console.error("getJSON() 실패: ", result.status)
	      return;
	    }
	    
	    console.log(result.data)
	    
	    $.each(result.data.listPr, function(i, item) {
	      //var starInteger = parseInt(item.score),
	      //starRealNumber = item.score - starInteger;
	      //starAdd(starInteger, starRealNumber, item)
	      heartAdd(item)
	    });
	    
	    var templateFn = Handlebars.compile($('#recruiting-applicant-open-template').text())
	    var generatedHTML = templateFn(result.data)
	    var container = $('#recruiting-applicant-open-container')
	    var html = container.html()
	    container.html(html + generatedHTML)
	    
	    if(pressedBtn.attr('data-open') == "true") {
	    	pressedBtn.html('펼치기 <i class="fa fa-angle-down" aria-hidden="true"></i>')
	          .attr('data-open', false)
	    } else {
	    	pressedBtn.html('접기 <i class="fa fa-angle-up" aria-hidden="true"></i>')
	            .attr('data-open', true)
	    }
	    pressedBtn.siblings('.recruiting-applicant-box').toggle( "fold", 500 );
	    e.preventDefault()
	
	  }, function(err) {
	    console.log(err)
	  })//getJson('musician/listPr.json')
	} else {//if(pressedBtn.attr('data-fill') == "false")
		if(pressedBtn.attr('data-open') == "true") {
	    	pressedBtn.html('펼치기 <i class="fa fa-angle-down" aria-hidden="true"></i>')
	          .attr('data-open', false)
	    } else {
	    	pressedBtn.html('접기 <i class="fa fa-angle-up" aria-hidden="true"></i>')
	            .attr('data-open', true)
	    }
	    pressedBtn.siblings('.recruiting-applicant-box').toggle( "fold", 500 );
	    e.preventDefault()
	}//else
})//applicantBtn.on('click')


calleeBtn.on('click', function(e) {
	if($(this).attr('data-open') == "true") {
		$(this).html('펼치기 <i class="fa fa-angle-down" aria-hidden="true"></i>')
					.attr('data-open', false)
	} else {
		$(this).html('접기 <i class="fa fa-angle-up" aria-hidden="true"></i>')
					.attr('data-open', true)
	}
	$(this).siblings('.recruiting-callee-box').toggle( "fold", 500 );
	e.preventDefault()
})

eventBox.on('click', function(e) {
	location.href = 'detail.html'
})


//$.each(result.data.listRecruiting, function(i, item) {
//  $.getJSON('/musician/listPr.json', 
//      { 'eventNo' : item.no }, 
//      function(result2) {
//        console.log(result2.data)
//        
//      }, function(err) {
//        console.log(err)
//  })
//})



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