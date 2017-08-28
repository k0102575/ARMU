HandlebarsIntl.registerWith(Handlebars)
displayMusiInfoReview()

function displayMusiInfoReview() {
	$.getJSON('/portfolio/musiInfoReview.json',
			{ 
		"no" : location.href.split('?')[1].split('=')[1]
			}, function(result) {
			  console.log(result.data)
				$(".review-header").text("진행/완료된 이벤트  "+ result.data.musicianReview.length +"개")
				if(result.data.musicianReview.length != 0) {
					var templateFn = Handlebars.compile($('#musician-info-review-template').text())
					var generatedHTML = templateFn(result.data)
					var container = $('.review-container')
					var html = container.html()
					container.html(html + generatedHTML)
					textSetting()
				}
				starAdd(result)
			})
}

function textSetting () {
	var reviewContentText = $(".review-content-text")
	reviewBox = $(".review-box")
	reviewContentMore = $(".review-content-more"),
	reviewContentHide = $(".review-content-hide"),
	reviewRatingGrade = $(".review-rating-grade")

	for (var i = 0; i <= reviewContentText.length - 1; i++) {
		if(reviewContentText[i].innerText.length <= 7) {
			reviewContentText[i].innerText = "아직 완료되지 않은 이벤트 입니다."
		}
		if(reviewContentText[i].innerText.length <= 44) {
			reviewContentText[i].style.height = "100px" 
				reviewBox[i].style.height = "230px"
		}
		if(reviewContentText[i].innerText.length >= 116) {
			reviewContentMore[i].style.display = "block"
		}
	}

	reviewContentMore.on('click', function() {
		$(this).parent().parent().css('height', 'auto')
		$(this).parent().children()[0].style.height = 'auto'
			$(this).parent().children()[1].style.display = 'none'
				$(this).parent().children()[2].style.display = 'block'
	})

	reviewContentHide.on('click', function() {
		$(this).parent().children()[0].style.height = '150px'
			$(this).parent().children()[1].style.display = 'block'
				$(this).parent().children()[2].style.display = 'none'
					$(this).parent().parent().css('height', '350px')
	})
}

function starAdd(result) {
  var reviewRating = $(".review-rating"),
  count = 0,
  totalScore = 0,
  resultScore = 0

  for(var i = 0; i < result.data.musicianReview.length; i++) {
      totalScore += parseInt(result.data.musicianReview[i].score)
      if(result.data.musicianReview[i].score != 0) {
      count++
    }
  }
  
  if(totalScore != 0 && count != 0) {
	  resultScore = parseInt(totalScore) / count
  }
  
  $(".review-rating-grade").text(resultScore)
  
  if(resultScore == 0) {
    for (var i = 1; i <= 5; i++) {
      reviewRating.append("<i class='fa fa-star-o' aria-hidden='true'></i>")
    }
    return
  }
  
  var starInteger = parseInt(resultScore),
  starRealNumber = resultScore - starInteger
  
  for (var i = 1; i <= starInteger; i++) {
    reviewRating.append("<i class='fa fa-star' aria-hidden='true'></i>")
  }

  if(starInteger == 5) {
    return;
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

