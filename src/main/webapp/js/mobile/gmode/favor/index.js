var headerMenuDetail = $("#header-menu-detail"),
    headerMenuMenu = $("#header-menu-menu"),
    headerMenuEmail = $("#header-menu-email"),
    headerMenuSearch = $("#header-menu-search"),
    moveTopBtn = $("#move_top_btn")

$(document).ready(function() {
  headerMenuDetail.load("/mobile/header-menu-detail.html");
})

$.getJSON('/musician/listFavor.json', function(result) {
  var templateFn = Handlebars.compile($('#musician-favor-template').text())
  var generatedHTML = templateFn(result.data)
  var container = $('#musician-favor-list')
  container.html(generatedHTML)
  
  if(result.data.listFavor.length == 0) {
    $("#musician-favor-count-text").text("관심 뮤지션 :  0  명")
  } else {
    $("#musician-favor-count-text").text("관심 뮤지션 : " + result.data.listFavor[0].count + "명")
  }
  
  var musicianFavorDelbtn = $(".musician-favor-delbtn")
  musicianFavorDelbtn.on('click', function (event) {
    var no = $(this).parent().children()[1].value
$.post('/musician/favorRemove.json', {
  'no': no
}, function(result) {
  alert("뮤지션이 관심 목록에서 삭제되었습니다.")
  location.reload();
}, 'json')
  
})
  
})


$(document.body).on('click', '#musician-favor-preview', function(event) {
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $("#hidden-no").val() 
})

$(document.body).on('click', '#musician-favor-picture', function(event) {
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $("#hidden-no").val() 
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
