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
  $.getJSON('/musician/musiInfoReviewIntroduce.json',
      { 
        "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
    	  console.log(result)
        var templateFn = Handlebars.compile($('#musician-info-introduce-template').text())
        var generatedHTML = templateFn(result.data)
  		var container = $('.musician-info-container')
  		var html = container.html()
  		container.html(html + generatedHTML)
      })
}
