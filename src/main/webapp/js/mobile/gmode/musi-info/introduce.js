$(function() {
	var introduce = $(".introduce-introduce"),
	introduceMore = $("#introduce-more"),
	introduceHide = $("#introduce-hide")
	
	 if(introduce.text().length >= 270) {
			introduceMore.css('display', 'block')
	}
	 
	 introduceMore.on("click", function() {
			introduce.css({"maxHeight":"none"})
			introduce.css("height", "auto")
			introduceMore.css("display", "none")
			introduceHide.css("display", "block")
		})

		introduceHide.on("click", function() {
			introduce.css({"maxHeight":"435px"})
			introduce.css("height", "none")
			introduceMore.css("display", "block")
			introduceHide.css("display", "none")
		})
})

displayMusiInfoIntroduce()
    
function displayMusiInfoIntroduce() {
  $.getJSON('/musician/musiInfoIntroduce.json',
      { 
        "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
    	  data = result.data.getIntroduce
        var templateFn = Handlebars.compile($('#musician-info-introduce-template').text())
        var generatedHTML = templateFn(data)
  		var container = $('#musician-info-cathegory')
  		var html = container.html()
  		container.html(html + generatedHTML)
  		if(data.homepage == "0") {
  		  $(".introduce-homepage").css("display", "none")
  		  $(".introduce-introduce").text(data.intro)
  		} else {
		  $(".introduce-homepage").append("<span> " + data.homepage + "</span>")
		  $(".introduce-introduce").text(data.intro)
  		}
      })
}
