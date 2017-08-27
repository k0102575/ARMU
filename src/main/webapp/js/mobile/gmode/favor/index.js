var headerMenuDetail = $("#header-menu-detail"),
headerMenuMenu = $("#header-menu-menu"),
headerMenuEmail = $("#header-menu-email"),
headerMenuSearch = $("#header-menu-search"),
moveTopBtn = $("#move_top_btn"),
musicianFavorPrev = $("#musician-favor-prev")

$(document).ready(function() {
  listFavor()
  $('#dialog').dialog({
    autoOpen: false,
    resizable: false,
  });
})

function listFavor() {
$.getJSON('/musician/listFavor.json', function(result) {
 if(result.data.listFavor.length == 0) {
	 $("#musician-favor-count-text").text("관심 뮤지션 : 0명")
	  var templateFn = Handlebars.compile($('#musician-favor-zero-template').text())
	  var generatedHTML = templateFn(result.data)
	  var container = $('#musician-favor-list')
	  container.html("")
	  container.html(generatedHTML)
	  return
 }
	
  var templateFn = Handlebars.compile($('#musician-favor-template').text())
  var generatedHTML = templateFn(result.data)
  var container = $('#musician-favor-list')
  container.html("")
  container.html(generatedHTML)

  $("#musician-favor-count-text").text("관심 뮤지션 : " + result.data.listFavor.length + "명")

  $(".musician-favor-delbtn").on('click', function (event) {
    var no = $(this).parent().children()[1].value
    $.post('/musician/favorRemove.json', {
      'no': no
    }, function(result) {
      listFavor()
    }, 'json')
  }) // .musician-favor-delbtn click

})
}


$(document.body).on('click', '.musician-favor-preview', function(event) {
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $(this).attr("no") 
})

$(document.body).on('click', '.musician-favor-picture', function(event) {
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $(this).attr("no")
})

var lastScroll = 0;
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  if (st > lastScroll){
    /*       headerMenuMenu.css("display", "none")
      headerMenuEmail.css("display", "none")
      headerMenuSearch.css("display", "none") */
    moveTopBtn.css("display", "block")
  } else {
    /*       headerMenuMenu.css("display", "block")
      headerMenuEmail.css("display", "block")
      headerMenuSearch.css("display", "block") */
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

musicianFavorPrev.on('click', function() {
  location.href = "/mobile/gmode/index.html"
})
