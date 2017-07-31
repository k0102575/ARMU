var reviewContent = $(".review-content"),
	musicianInfoPrev = $("#musician-info-prev"),
	reviewContentText = $(".review-content-text"),
	reviewBox = $(".review-box"),
	count = 0,
	score = 0

displayMusiInfoReview()

function displayMusiInfoReview() {
  $.getJSON('/musician/musiInfoReview.json',
      { 
        "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
        if (result.data == "0"){
        	$(".review-header").text("진행/완료 이벤트: 0개")
        	$(".review-rating-container").css("display", "none")
        } else {
        	score += result.data.musicianReview.score
        
        if(result.data.musicianReview.score == "0") {
    	  var templateFn = Handlebars.compile($('#musician-info-review0-template').text())
          var generatedHTML = templateFn(result.data)
		  var container = $('.review-container')
		  var html = container.html()
		  container.html(html + generatedHTML)
        } else {
            var templateFn = Handlebars.compile($('#musician-info-review-template').text())
            var generatedHTML = templateFn(result.data)
    		var container = $('.review-container')
    		var html = container.html()
    		container.html(html + generatedHTML)
        }
        

		
		var reviewContentMore = $(".review-content-more"),
		reviewContentHide = $(".review-content-hide"),
		reviewRatingGrade = $(".review-rating-grade")
		
		
		reviewContentMore.on('click', function() {
			$(this).parent().parent().css('height', 'auto')
			$(this).parent().children()[0].style.height = 'auto'
			$(this).parent().children()[1].style.display = 'none'
			$(this).parent().children()[2].style.display = 'block'
		})

		reviewContentHide.on('click', function() {
		  $(this).parent().children()[0].style.height = '160px'
		  $(this).parent().children()[1].style.display = 'block'
		  $(this).parent().children()[2].style.display = 'none'
		  $(this).parent().parent().css('height', '380px')
		})
		
          $.getJSON('/musician/musiInfoReviewCount.json',
	        { 
	          "no" : location.href.split('?')[1].split('=')[1]
	        }, function(result) {
	        	count = result.data.musicianReviewCount.count
	        	$(".review-header").text("진행/완료 이벤트:  " + count + " 개")
	        })
        }
  })
}

$(window).load(function(){
	starAdd()
	reviewSetting()
})

musicianInfoPrev.on('click', function() {
	location.href = "/mobile/gmode/index.html"
})

function starAdd() {
	
  $(".review-rating-grade").text(score / count)
  
  var starInteger = parseInt($(".review-rating-grade").text()),
      starRealNumber = $(".review-rating-grade").text() - starInteger,
  	  reviewRating = $(".review-rating")
  
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
	
	for (var i = 0; i <= $("div[class=review-box]").length; i++) {
		if ($(".review-content-text").text().length <= 28) {
			$("#review-box").css("height", "260px")
			$(".review-content-text").css("height", "50px")
		}
		  
	    if ($(".review-content-text").text().length > 50) {
	      $(".review-content-more").css("display", "block")
	      $("#review-box").css("height", "380px")
	    }
		if ($(".review-content-text").text().length > 50) {
			$(".review-content-more").css("display", "block")
		}
	}
}

