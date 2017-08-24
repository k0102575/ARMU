HandlebarsIntl.registerWith(Handlebars)
displayMusiInfoReview()

function displayMusiInfoReview() {
	$.getJSON('/portfolio/musiInfoReview.json',
			{ 
		"no" : location.href.split('?')[1].split('=')[1]
			}, function(result) {
				console.log(result)
				$(".review-header").text("진행/완료된 이벤트  "+ result.data.musicianReview.length +"개")
				if(result.data.musicianReview.length != 0) {
					var templateFn = Handlebars.compile($('#musician-info-review-template').text())
					var generatedHTML = templateFn(result.data)
					var container = $('.review-container')
					var html = container.html()
					container.html(html + generatedHTML)
					textSetting()
					scoreSetting(result)
					starAdd()
				}
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

function starAdd() {

	var starInteger = parseInt($(".review-rating-grade").text()),
	starRealNumber = $(".review-rating-grade").text() - starInteger,
	reviewRating = $(".review-rating")

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

function scoreSetting(result) {
	var reviewScore = $(".review-score"),
	count = 0,
	totalScore = ""

		for(var i = 0; i < result.data.musicianReview.length; i++) {
			if(reviewScore[i].innerText != 0) {
				totalScore += reviewScore[i].innerText
				count++
			}
		}
	$(".review-rating-grade").text(parseInt(totalScore) / count)
}


