var moveTopBtn = $("#move_top_btn"),
    eventFavorPrev = $("#event-favor-prev")
    
displayFavorEventList()
HandlebarsIntl.registerWith(Handlebars);
    
function  displayFavorEventList(){
$.getJSON('/event/listFavor.json', function(result) {
  var templateFn = Handlebars.compile($('#event-favor-template').text())
  var generatedHTML = templateFn(result.data)
  var container = $('#event-favor-list')
  container.html(generatedHTML)
  
  if(result.data.listFavor.length == 0) {
    $("#event-favor-count-text").text("관심 이벤트 :  0  명")
  } else {
    $("#event-favor-count-text").text("관심 이벤트 : " + result.data.listFavor.length + "명")
  }
  
})

}
  
var lastScroll = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScroll){
      moveTopBtn.css("display", "block")
    } else {
      moveTopBtn.css("display", "none")
    }
    lastScroll = st;
});
  
moveTopBtn.on('click', function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
});

eventFavorPrev.on('click', function() {
  location.href = "/mobile/musimode/index.html"
})

$('body').on('click', ".event-favor-delete-button", function() {
  $.post('/event/favorRemove.json', {
    'no': $(this).val()
  }, function(result) {
	  console.log(result)
    if(result.status == "success") {
      swal({
        title: "삭제에 성공했습니다",
        type: "success",
        showCancelButton: false,
        confirmButtonColor: "#8069ef",
        confirmButtonText: "확인",
        customClass: "checkSwal"
      }, function() {
        location.reload()
      });
    }
  }, 'json')
})

$('body').on('click', ".event-favor-writerbox", function() {
	console.log($(this).parent().attr('data-no'))
	  /*location.href = '/mobile/musimode/event-info/index.html?no=' + */
})

$('body').on('click', ".event-favor-title", function() {
	console.log($(this).parent().attr('data-no'))
	  /*location.href = '/mobile/musimode/event-info/index.html?no=' + */
})

$('body').on('click', ".event-favor-dscpbox", function() {
	console.log($(this).parent().attr('data-no'))
	  /*location.href = '/mobile/musimode/event-info/index.html?no=' + */
})
