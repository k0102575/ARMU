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
    filterContainer = $("#filter-container" ),
    filterCancel = $("#filter-cancel"),
    ageGroup = $("#age-group")

$(".filterBtn").on('click', function() {
  surfBackscreen.css('display', 'block');
  ageGroup.val("20대 이하" + " - " + "50대 이상");  
  filterContainer.toggle();
});

filterCancel.on('click', function() {
  filterContainer.toggle();
  surfBackscreen.css('display', 'none');
})

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

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 50,
      step: 10,
      values: [ 10, 50 ],
      slide: function( event, ui ) {
        
        if (ui.values[0] == 10 && ui.values[1] == 50) {
          ageGroup.val("20대 이하" + " - " + "50대 이상");
          ageGroup.css("left", "52%").css("width", "41%");
        } else if (ui.values[1] == 50) {
          ageGroup.val(ui.values[0] + "대" +  " - " + "50대 이상");
          ageGroup.css("left", "57%").css("width", "36%");
        } else if (ui.values[0] == 10) {
          ageGroup.val("20대 이하" + " - " + ui.values[ 1 ] + "대");
          ageGroup.css("left", "57%").css("width", "36%");
        } else {
          ageGroup.val(ui.values[ 0 ] + "대" + " - " + ui.values[ 1 ] + "대");
          ageGroup.css("left", "60%").css("width", "36%");
        } // if
          
        }
    });
    ageGroup.val($( "#slider-range" ).slider( "values", 0 ) + "대" + 
      " - " + $( "#slider-range" ).slider( "values", 1 )  + "대");
  });

function showValues(ui) {
  console.log(ui);
  
}


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