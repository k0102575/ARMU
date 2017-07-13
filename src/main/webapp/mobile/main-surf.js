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
    surfToggle = $("#surf-toggle" )

$(".filterBtn").on('click', function() {
  surfBackscreen.css('display', 'block');
  surfToggle.toggle();
});

surfBackscreen.on('click', function() {
  surfToggle.toggle();
  surfBackscreen.css('display', 'none');
})