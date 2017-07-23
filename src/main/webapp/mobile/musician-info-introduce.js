var introduce = $(".introduce-introduce"),
	introduceMore = $("#introduce-more"),
	introduceHide = $("#introduce-hide")

$(window).load(function(){
  if(introduce.text().length >= 270) {
	introduceMore.css('display', 'block')
  }
})

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

