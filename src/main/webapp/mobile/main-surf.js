//$(".autoDiv").on('click', function() {
//  $("#musician-surf-list").append(
//      "<div id='musician-surf'><img class='musician-surf-picture' src='../ARMU-Image/Mobile/19_eventpage/e_2.jpg'>\
//      <div id='musician-surf-preview'>\
//      <span id='musician-surf-intro'>#전공#전공#장르#프리뷰#전공#장르#프리뷰#전공#전공#장르#프리뷰#전공#장르#프리뷰</span>\
//      <span id='musician-surf-name'>이름</span><br>\
//      <span id='musician-surf-location'>지역</span><br>\
//      <img id='musician-surf-like' src='../ARMU-Image/ARMU_icon/mobile_icon/heart.png'>\
//      </div>")
//})

var surfBackscreen = $("#surf-backscreen"),
    filterContainer = $("#filter-container" )

$(".filterBtn").on('click', function() {
  surfBackscreen.css('display', 'block');
  filterContainer.toggle();
});

var xScroll = new jindo.m.Scroll("filter-loc-tab", {
  bUseHScroll: true,
  bUseVScroll: false,
  bUseMomentum: false,
  nHeight: 100,
  nWidth: 980
});

var yScroll = new jindo.m.Scroll("seoul", {
  bUseHScroll: false,
  bUseVScroll: true,
  bUseMomentum: false,
  nHeight: 340
});

$('#filter-loc').click(function() {
  $("#filter-loc-backscreen").css('display', 'block');
  $("#filter-loc-toggle").css('display', 'none');
  $("#filter-loc-toggle").css('bottom', '0%');
  $("#filter-loc-toggle").toggle("slide", {direction: "down"});
});

$("#filter-loc-backscreen").click(function() {
  $("#filter-loc-toggle").toggle("slide", {direction: "down"});
  $("#filter-loc-toggle").css('bottom', '-26%');
  $("#filter-loc-backscreen").css('display', 'none');
})


var filterLocTab = $('.filter-loc-sub-tab')

filterLocTab.click(function () {
    filterLocTab.removeClass('on')
    $(this).addClass('on')
})

var seoul = $('.seoul')
seoul.click(function () {
    $('.fa-check').remove()
    seoul.removeClass('on2')
    $(this).html('<i class="fa fa-check" aria-hidden="true"></i>'+ $(this).text())
    $(this).addClass('on2')
})