var source = []

Handlebars.registerHelper('isIndex', function(key, options) {
  if (key == "Y") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

$("#portfolio-add-btn").on('click', function() {
  location.href = 'career.html?no=0'
})

displayMusiInfoPortfolio()
   
function displayMusiInfoPortfolio() {
  $.getJSON('/musician/musiInfoMyPortfolio.json', function(result) {
      console.log(result)
    if(result.data.getPortfolio.length == 0) {
      var templateFn = Handlebars.compile($('#musician-info0-portfolio-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $('.portfolio-container')
      var html = container.html()
      container.html(html + generatedHTML)
      $("#musician-portfolio-edit-btn").css("display", "none")
      return
    }
    
    var templateFn = Handlebars.compile($('#musician-info-portfolio-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('.portfolio-container')
    var html = container.html()
    container.html(html + generatedHTML)
    
    for(var j = 0; j < result.data.getPortfolio.length; j++){
      for(var i = 0; i < result.data.getPortfolio[j].list.length; i++) {
      if(result.data.getPortfolio[j].list[i].fileMap.key == "N") {
        source.push(result.data.getPortfolio[j].list[i].fileMap.value.substring(17,28))
      }
      }
    }
    
    for(sourceMovie of source) {
      $("#timeline-content").append("<img id='timeline-picture' src='https://img.youtube.com/vi/" + sourceMovie + "/0.jpg'>")
      $("#spec-desc").append("<iframe width='791' height='876' src='https://www.youtube.com/embed/" + sourceMovie + "?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>")
    }
    
    
    var timeLine = $('.timeline-line')
    
    $(".musician-portfolio-edit-btn").on('click', function() {
      location.href = 'career.html?no=' + $(this).attr('data-spno')
    })
      
    if($("div[id=timeline-container]").length <= 1) {
      timeLine.css("background", "radial-gradient(circle, black, black, white)")
    } else if ($("div[id=timeline-container]").length >= 2) {
      var length = $("div[id=timeline-container]").length
      timeLine[0].style.background = "linear-gradient(to top, black 60%, white)"
      timeLine[length - 1].style.background = "linear-gradient(to bottom, black 60%, white)"
  }
    
  $(".timeline-content").on('click', function(){
    $(".spec-detail").toggle(0)
    $("#spec-backscreen").css('display', 'block')
    $("#musician-header-info-img").css('display','block')
  })
  
  $("#spec-close").on('click', function() {
    $(".spec-detail").toggle(0)
    $("#spec-backscreen").css('display', 'none')
    $("#musician-header-info-img").css('display','none')
  })
  
        
        

        
        
        
  })
}

