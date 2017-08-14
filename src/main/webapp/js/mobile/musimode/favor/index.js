var moveTopBtn = $("#move_top_btn"),
    eventFavorPrev = $("#event-favor-prev")

$.getJSON('/event/listFavor.json', function(result) {
  var templateFn = Handlebars.compile($('#event-favor-template').text())
  var generatedHTML = templateFn(result.data)
  var container = $('#event-favor-list')
  container.html(generatedHTML)
  
  if(result.data.listFavor.length == 0) {
    $("#event-favor-count-text").text("관심 이벤트 :  0  명")
  } else {
    $("#event-favor-count-text").text("관심 이벤트 : " + result.data.listFavor[0].count + "명")
  }
  
  var eventFavorDelbtn = $(".event-favor-delbtn")
  eventFavorDelbtn.on('click', function (event) {
    var no = $(this).parent().children()[1].value
$.post('/event/favorRemove.json', {
  'no': no
}, function(result) {
  swal({
    title: "관심이벤트 리스트에서 \n\n뮤지션이 삭제되었습니다!",
    type: "success",
    showCancelButton: false,
    confirmButtonColor: "#8069ef",
    confirmButtonText: "확인",
    customClass: "checkSwal"
  },function() {
    location.reload()
  });
}, 'json')
  
})
  
})


$(document.body).on('click', '#event-favor-preview', function(event) {
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $("#hidden-no").val() 
})

$(document.body).on('click', '#event-favor-picture', function(event) {
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $("#hidden-no").val() 
})
  
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
