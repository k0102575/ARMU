var starInteger = parseInt($(".review-rating-grade").text()),
    starRealNumber = $(".review-rating-grade").text() - starInteger,
    reviewRating = $(".review-rating")
    
$(window).load(function(){
  starAdd()
})
  
function starAdd() {
  for (var i = 1; i <= starInteger; i++) {
    reviewRating.append("<i class='fa fa-star' aria-hidden='true'></i>")
  }
  
  if(starRealNumber >= 0.7) {
    reviewRating.append("<i class='fa fa-star' aria-hidden='true'></i>")
  } else if(starRealNumber <= 0.3) {
    reviewRating.append("<i class='fa fa-star-o' aria-hidden='true'></i>")
  } else {
    reviewRating.append("<i class='fa fa-star-half-o' aria-hidden='true'></i>")
  }
}