displayMusiInfoPortfolio()
    
function displayMusiInfoPortfolio() {
  $.getJSON('/musician/musiInfoReviewPortfolio.json',
      { 
        "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
  		  var templateFn = Handlebars.compile($('#musician-info-portfolio-template').text())
          var generatedHTML = templateFn(result.data)
		  var container = $('.portfolio-container')
		  var html = container.html()
		  container.html(html + generatedHTML)
		  
		  var timeLine = $('.timeline-line')
		  
		if($("div[id=timeline-container]").length <= 1) {
	    timeLine.css("background", "radial-gradient(circle, black, black, white)")
	  } else if ($("div[id=timeline-container]").length >= 2) {
	    var length = $("div[id=timeline-container]").length
	    timeLine[0].style.background = "linear-gradient(to top, black 60%, white)"
	    timeLine[length - 1].style.background = "linear-gradient(to bottom, black 60%, white)"
	}
    	  
      })
}

