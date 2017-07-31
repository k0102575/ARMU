var headerMenuDetail = $("#header-menu-detail"),
    headerMenuMenu = $("#header-menu-menu"),
    headerMenuEmail = $("#header-menu-email"),
    headerMenuSearch = $("#header-menu-search"),
    moveTopBtn = $("#move_top_btn")

$(document).ready(function() {
  headerMenuDetail.load("/mobile/header-menu-detail.html");
})

$.getJSON('/musician/listFavor.json', function(result) {
  console.log(result)
  /*var templateFn = Handlebars.compile($('#musician-favor-template').text())
  var generatedHTML = templateFn(result)
  var container = $('#musician-favor-list')
  container.html(generatedHTML)*/
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
