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
//
$("document").ready(function(){
  displaySurfMusiList()
})

$('#abca').on('click',function(e) {
  e.preventDefault()
  displaySurfMusiList2()
})

$("#filter-update").on('click', function() {
  var checkVal = $(":input:radio[name=gender]:checked").val()
  
  if(minAge == 0 && maxAge == 0) {
	  if(checkVal == "G") {
		  $.getJSON('/musician/listSurfFilter.json', 
			{
			  "minAge" : "10",
			  "maxAge" : "60"
			},
			function(result) {
				handleList(result)
		  })
	  } else {
		  $.getJSON('/musician/listSurfGenderFilter.json', 
		    {
		    "gender" : checkVal,
	  	    "minAge" : 10,
		    "maxAge" : 60
		    },
	  	  function(result) {
		    	handleList(result)
	      })
	  }
	  
  } else {
	  if(checkVal == "G") {
		  $.getJSON('/musician/listSurfFilter.json', 
			{
			  "minAge" : minAge,
			  "maxAge" : maxAge
			},
			function(result) {
				handleList(result)
		  })
	  } else {
		  $.getJSON('/musician/listSurfGenderFilter.json', 
		    {
		    "gender" : checkVal,
	  	    "minAge" : minAge,
		    "maxAge" : maxAge
		    },
	  	  function(result) {
		    	handleList(result)
	      })
	  }
}
  
})

function handleList(result) {
	var templateFn = Handlebars.compile($('#musician-list-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#musician-surf-list')
    container.html(generatedHTML)
    surfBackscreen.css('display', 'none');
	filterContainer.toggle();
}

$(document.body).on('click', '.detail-link', function(event) {
  event.preventDefault()
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $(this).attr('data-no') 
})

function displaySurfMusiList() {
  $.getJSON('/musician/listSurf.json', function(result) {
    console.log(result)
    var templateFn = Handlebars.compile($('#musician-list-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#musician-surf-list')
    container.html(generatedHTML)
  })
//  $('#musician-surf-list').html('');
}


function displaySurfMusiList2() {
  $('#musician-surf-list').html('');
  $.getJSON('/musician/listLocation.json', function(result) {
    var templateFn = Handlebars.compile($('#musician-list-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#musician-surf-list')
    container.html(generatedHTML)
  })
}


var surfBackscreen = $("#surf-backscreen"),
    filterContainer = $("#filter-container"),
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
    nHeight: 400
});

yScroll = new jindo.m.Scroll("kyeonggi", {
    bUseHScroll: false,
    bUseVScroll: true,
    bUseMomentum: false,
    nHeight: 400
});
yScroll = new jindo.m.Scroll("local", {
    bUseHScroll: false,
    bUseVScroll: true,
    bUseMomentum: false,
    nHeight: 400
});
yScroll = new jindo.m.Scroll("incheon", {
    bUseHScroll: false,
    bUseVScroll: true,
    bUseMomentum: false,
    nHeight: 400
});
yScroll = new jindo.m.Scroll("busan", {
    bUseHScroll: false,
    bUseVScroll: true,
    bUseMomentum: false,
    nHeight: 400
});
yScroll = new jindo.m.Scroll("daegu", {
    bUseHScroll: false,
    bUseVScroll: true,
    bUseMomentum: false,
    nHeight: 400
});
yScroll = new jindo.m.Scroll("gwangju", {
    bUseHScroll: false,
    bUseVScroll: true,
    bUseMomentum: false,
    nHeight: 400
});
yScroll = new jindo.m.Scroll("daejun", {
    bUseHScroll: false,
    bUseVScroll: true,
    bUseMomentum: false,
    nHeight: 400
});


$('#filter-loc').click(function() {
    $("#filter-loc-backscreen").css('display', 'block');
    $('#musician-surf-list').css('overflow','hidden').css('position','fixed')
    $("#filter-loc-toggle").css('display', 'block');
    $(".filter-loc-sub-con").css('display','block');
    $("#filter-loc-toggle").css('visibility', 'visible');
    $(".filter-loc-sub-con").css('visibility','visible');
    // $("#filter-loc-toggle").toggle("slide", {direction: "down"});
});

$("#filter-loc-backscreen").click(function() {
    // $("#filter-loc-toggle").toggle("slide", {direction: "down"});
    $('#musician-surf-list').css('overflow','').css('position','absolute')
    $("#filter-loc-toggle").css('display', 'none');
    $(".filter-loc-sub-con").css('display','none');
    $("#filter-loc-backscreen").css('display', 'none');
})

var minAge = 0,
	maxAge = 0;

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 50,
      step: 10,
      values: [ 10, 50 ],
      slide: function( event, ui ) {
    	  minAge = ui.values[0]
    	  maxAge = ui.values[1]

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


$(function ($) {
    let index =null;
    // let $filterwrap = $('.filter-loc-toggle')
    let $fcon1 = $('.filter-loc-sub-tab')
    let $fcon2 = $('.filter-loc-sub-con')


    tabMenu($fcon1, $fcon2)
    function tabMenu(els, con) {
      els.on('click', function () {
          els.removeClass('on')
          $(this).addClass('on')
          index = $(this).index()

          con.css("visibility","hidden")
          con.css("height","0")
          con.eq(index).css("visibility","visible")
          con.eq(index).css("height","400px")
      })
    }
})
