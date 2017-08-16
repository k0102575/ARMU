Handlebars.registerHelper('isIndex', function(key, options) {
  if (key == "Y") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
var source = []


displayMusiInfoPortfolio()
    
function displayMusiInfoPortfolio() {
  $.getJSON('/portfolio/musiInfoPortfolio.json',
      { 
        "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
  		  var templateFn = Handlebars.compile($('#musician-info-portfolio-template').text())
        var generatedHTML = templateFn(result.data)
		  var container = $('.portfolio-container')
		  var html = container.html()
		  container.html(html + generatedHTML)
		  
	    for(var j = 0; j < result.data.getPortfolio.length; j++){
	      var spno = result.data.getPortfolio[j].spno
	      for(var i = 0; i < result.data.getPortfolio[j].list.length; i++) {
	        if(result.data.getPortfolio[j].list[i].fileMap.key == "N") {
	          $(".timeline-movie[data-spno=" + spno + "]").append("<img id='timeline-picture' src='https://img.youtube.com/vi/" + result.data.getPortfolio[j].list[i].fileMap.value.substring(17,28) + "/0.jpg'>")
	          $(".spec-movie[data-spno=" + spno + "]").append("<iframe width='791' height='876' src='https://www.youtube.com/embed/" + result.data.getPortfolio[j].list[i].fileMap.value.substring(17,28) + "?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>")
	        }
	      }
	    }
		
		  var timeLine = $('.timeline-line')
		  
		if($("div[id=timeline-container]").length <= 1) {
	    timeLine.css("background", "radial-gradient(circle, black, black, white)")
	  } else if ($("div[id=timeline-container]").length >= 2) {
	    var length = $("div[id=timeline-container]").length
	    timeLine[0].style.background = "linear-gradient(to top, black 60%, white)"
	    timeLine[length - 1].style.background = "linear-gradient(to bottom, black 60%, white)"
	}
		  
		  $(".timeline-content").on('click', function(){
		    var no = $(this).attr("data-no")
		    $(".spec-detail[data-no=" + no + "]").toggle('slide', {direction:'down'}, 400)
		    $("#spec-backscreen").css('display', 'block')
		    $("#container").css('position', 'fixed')
		  })
		  
		  $(".spec-close").on('click', function() {
		    var no = $(this).attr("data-no")
		    $(".spec-detail[data-no=" + no + "]").toggle('slide', {direction:'down'}, 400)
		    $("#spec-backscreen").css('display', 'none')
		    $("#container").css('position', 'relative')
		  })
        
        /*var source = $("#timeline-movie").text().substring(20, 31)
        $("#timeline-movie").html("")
        $("#timeline-movie").append("<img id='timeline-picture' src='https://img.youtube.com/vi/" + source + "/0.jpg'>")
        
        var sourceMovie = $("#spec-movie").text().substring(20, 31)
        $("#spec-movie").html("")
        $("#spec-movie").append("<iframe width='791' height='876' src='https://www.youtube.com/embed/" + source + "?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>")
        */
        
      })
}
