var starInteger = parseInt($(".review-rating-grade").text()),
starRealNumber = $(".review-rating-grade").text() - starInteger,
reviewRating = $(".review-rating"),
reviewContent = $(".review-content"),
musicianInfoPrev = $("#musician-info-prev"),
reviewContentText = $(".review-content-text"),
reviewContentMore = $(".review-content-more"),
reviewContentHide = $(".review-content-hide"),
reviewBox = $(".review-box"),
reviewHeader = $(".review-header")

displayMusiInfoReview()
    
function displayMusiInfoReview() {
  $.getJSON('/musician/musiInfoReview.json',
      { 
        "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
    	  console.log(result)
        var data = result.data
        if (data.musicianReviewCount.count == 0){
            reviewHeader.text("리뷰 0개")
          } else {
            reviewHeader.text("리뷰:  " + data.musicianReviewCount.count + " 개")
          }
        
        var templateFn = Handlebars.compile($('#musician-info-review-template').text())
        var generatedHTML = templateFn(data)
		var container = $('.review-container')
		var html = container.html()
		container.html(html + generatedHTML)
  })
  
}
    

$(window).load(function(){
	reviewSetting()
	starAdd()
})

musicianInfoPrev.on('click', function() {
	location.href = "/mobile/gmode/index.html"
})

reviewContentMore.on('click', function() {
	$(this).parent().parent().css('height', 'auto')
	$(this).parent().children()[0].style.height = 'auto'
	$(this).parent().children()[1].style.display = 'none'
	$(this).parent().children()[2].style.display = 'block'
})

reviewContentHide.on('click', function() {
  $(this).parent().parent().css('height', '300px')
  $(this).parent().children()[0].style.height = '105px'
  $(this).parent().children()[1].style.display = 'block'
  $(this).parent().children()[2].style.display = 'none'
  $(this).parent().parent().css('height', '200px')
  $(this).parent().children()[0].style.height = '50px'
  $(this).parent().children()[1].style.display = 'block'
  $(this).parent().children()[2].style.display = 'none'
})

function starAdd() {
  
  
  for (var i = 1; i <= starInteger; i++) {
    reviewRating.append("<i class='fa fa-star' aria-hidden='true'></i>")
  }
  
  if(starRealNumber >= 0.8) {
    reviewRating.append("<i class='fa fa-star' aria-hidden='true'></i>")
  } else if(starRealNumber <= 0.3) {
    reviewRating.append("<i class='fa fa-star-o' aria-hidden='true'></i>")
  } else {
    reviewRating.append("<i class='fa fa-star-half-o' aria-hidden='true'></i>")
  }
  
  if(starInteger < 4) {
    for (var i = 1; i <= 4 - starInteger; i++) {
      reviewRating.append("<i class='fa fa-star-o' aria-hidden='true'></i>")
    }
  }
  
}

function reviewSetting() {
	for (var i = 0; i <= $("div[class=review-box]").length - 1 ; i++) {
		if ((reviewContentText[i].innerText.length) <= 28) {
			reviewBox[i].style.height = "200px"
				reviewContentText[i].style.height = "50px"
		}
		  
	    if ((reviewContentText[i].innerText.length) > 50) {
	      reviewContentMore[i].style.display = "block"
	      reviewBox[i].style.height = "300px"

		if ((reviewContentText[i].innerText.length) > 50) {
			reviewContentMore[i].style.display = "block"
		}
	}
}
}
