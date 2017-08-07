$(document).ready(function() {
  displaySurfMusiList()
})

$("#filter-update").on('click', function() {
  var checkVal = $(":input:radio[name=gender]:checked").val()
  
  if(minAge == 0 && maxAge == 0) {
		  $.getJSON('/musician/listSurfFilter.json', 
			{
		    "gender" : checkVal,
			  "minAge" : "10",
			  "maxAge" : "60"
			},
			function(result) {
				handleList(result)
				filterContainer.toggle();
		  })
		  return
	  } 
		  $.getJSON('/musician/listSurfFilter.json', 
			{
		    "gender" : checkVal,
			  "minAge" : minAge,
			  "maxAge" : maxAge
			},
			function(result) {
				handleList(result)
				filterContainer.toggle();
		  })
	  })

function handleList(result) {
	var templateFn = Handlebars.compile($('#musician-list-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#musician-surf-list')
    container.html(generatedHTML)
    surfBackscreen.css('display', 'none');
}

$(document.body).on('click', '.detail-link', function(event) {
  event.preventDefault()
  location.href = '/mobile/gmode/musi-info/index.html?no=' + $(this).attr('data-no') 
})

function displaySurfMusiList() {
  $.getJSON('/musician/listSurf.json', function(result) {
    if(result.data == "browse") {
      $("#musician-surf-list").css("height", "1280px")
      $(".filterBtn").css("display", "none")
      $("#filter-btn-icon").css("display", "none")
      $("#filter-body").css("top", "100%")
      return;
    }
    
    if(result.status == "success") {
      var templateFn = Handlebars.compile($('#musician-list-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $('#musician-surf-list')
      container.html(generatedHTML)
      var surfLike = $(".surfLike")
      for(var i = 0; i <= result.data.listSurf.length -1; i++){
          
        if(result.data.listSurf[i].isFavorite == true){
          surfLike[i].style.color = "#ba3d3d"
        }
    }

    }
    
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
  $("#filter-loc-backscreen").css('display','block')
    $("#filter-loc-backscreen").on('touchmove', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $('#musician-surf-list').css('overflow','hidden').css('position','absolute')
    $("#filter-loc-toggle").css('display', 'block');
    $(".filter-loc-sub-con").css('display','block');
    $("#filter-loc-toggle").css('visibility', 'visible');
    $(".filter-loc-sub-con").css('visibility','visible');
});

$("#filter-loc-backscreen").click(function() {
    $('#musician-surf-list').css('overflow','').css('position','absolute')
    $("#filter-loc-toggle").css('display', 'none');
    $(".filter-loc-sub-con").css('display','none');
    $("#filter-loc-backscreen").css('display', 'none');
})

$('#filter-major').click(function() {
    $("#filter-mjr-backscreen").css('display', 'block');
    $("#filter-mjr-backscreen").on('touchmove', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $('#musician-surf-list').css('overflow','hidden').css('position','fixed')
    $("#filter-mjr-toggle").css('display', 'block');
    $(".filter-mjr-sub-con").css('display','block');
    $("#filter-mjr-toggle").css('visibility', 'visible');
    $(".filter-mjr-sub-con").css('visibility','visible');
});

$("#filter-mjr-backscreen").click(function() {
    $('#musician-surf-list').css('overflow','').css('position','absolute')
    $("#filter-mjr-toggle").css('display', 'none');
    $(".filter-mjr-sub-con").css('display','none');
    $("#filter-mjr-backscreen").css('display', 'none');
})

$('#filter-genre').click(function() {
    $("#filter-gen-backscreen").css('display', 'block');
    $("#filter-gen-backscreen").on('touchmove', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $('#musician-surf-list').css('overflow','hidden').css('position','fixed')
    $("#filter-gen-toggle").css('display', 'block');
    $(".filter-gen-sub-con").css('display','block');
    $("#filter-gen-toggle").css('visibility', 'visible');
    $(".filter-gen-sub-con").css('visibility','visible');
});

$("#filter-gen-backscreen").click(function() {
    $('#musician-surf-list').css('overflow','').css('position','absolute')
    $("#filter-gen-toggle").css('display', 'none');
    $(".filter-gen-sub-con").css('display','none');
    $("#filter-gen-backscreen").css('display', 'none');
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
          ageGroup.css("left", "55%").css("width", "41%");
        } else if (ui.values[1] == 50) {
          ageGroup.val(ui.values[0] + "대" +  " - " + "50대 이상");
          ageGroup.css("left", "62%").css("width", "36%");
        } else if (ui.values[0] == 10) {
          ageGroup.val("20대 이하" + " - " + ui.values[ 1 ] + "대");
          ageGroup.css("left", "62%").css("width", "36%");
        } else {
          ageGroup.val(ui.values[ 0 ] + "대" + " - " + ui.values[ 1 ] + "대");
          ageGroup.css("left", "67%").css("width", "31%");
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

var seoul = $('.loc')
var major = $('.mjr')
var genre = $('.gen')
var loc,mjr,gen;
var indexL, indexM, indexG;
seoul.click(function () {
  console.log(indexL,indexM,indexG)
  if(mjr==undefined)
    mjr='선택안됨'
  if(gen==undefined)
    gen='선택안됨'
  loc = $(this).text()
  console.log(loc,mjr,gen)
    $.post('/musician/searchMusician.json',
      {'location':loc, 'major':mjr, 'genre':gen}, function(result) {
        handleList(result)
        
        var surfLike = $(".surfLike")
        for(var i = 0; i <= result.data.listSurf.length -1; i++){
            
          if(result.data.listSurf[i].isFavorite == true){
            surfLike[i].style.color = "#ba3d3d"
          }
      }
  },'json')
  
//  $('.fa-check').remove()
//  seoul.removeClass('on2')
  $(this).html('<i class="fa fa-check" aria-hidden="true"></i>'+ $(this).text())
  $(this).addClass('on2')
  return loc;
})

major.click(function () {
  console.log(indexL,indexM,indexG)
  if(loc==undefined)
    loc='선택안됨'
  if(gen==undefined)
    gen='선택안됨'
  mjr = $(this).text()
  console.log(loc,mjr,gen)
    $.post('/musician/searchMusician.json',
      {'location':loc, 'major':mjr, 'genre':gen}, function(result) {
        handleList(result)
        
        var surfLike = $(".surfLike")
        for(var i = 0; i <= result.data.listSurf.length -1; i++){
            
          if(result.data.listSurf[i].isFavorite == true){
            surfLike[i].style.color = "#ba3d3d"
          }
      }
  },'json')
  
  $('.fa-check').remove()
  major.removeClass('on2')
  $(this).html('<i class="fa fa-check" aria-hidden="true"></i>'+ $(this).text())
  $(this).addClass('on2')
  return mjr;
})

genre.click(function () {
  console.log(indexL,indexM,indexG)
  if(loc==undefined)
    loc='선택안됨'
  if(mjr==undefined)
    mjr='선택안됨'
  gen = $(this).text()
  console.log(loc,mjr,gen)
    $.post('/musician/searchMusician.json',
      {'location':loc, 'major':mjr, 'genre':gen}, function(result) {
        handleList(result)
        
        var surfLike = $(".surfLike")
        for(var i = 0; i <= result.data.listSurf.length -1; i++){
            
          if(result.data.listSurf[i].isFavorite == true){
            surfLike[i].style.color = "#ba3d3d"
          }
      }
  },'json')
  
  $('.fa-check').remove()
  genre.removeClass('on2')
  $(this).html('<i class="fa fa-check" aria-hidden="true"></i>'+ $(this).text())
  $(this).addClass('on2')
  return gen;
})

$(function ($) {
    let index =null;
    // let $filterwrap = $('.filter-loc-toggle')
    let $fcon1 = $('.filter-loc-sub-tab')
    let $fcon2 = $('.filter-loc-sub-con')

    tabMenu($fcon1, $fcon2)
    function tabMenu(els, con) {
      els.on('click', function () {
        indexL = $(this).index()+1;
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

var filterMjrTab = $('.filter-mjr-sub-tab')

filterMjrTab.click(function () {
    filterMjrTab.removeClass('on')
    $(this).addClass('on')
})

$(function ($) {
    let index =null;
    // let $filterwrap = $('.filter-loc-toggle')
    let $fcon1 = $('.filter-mjr-sub-tab')
    let $fcon2 = $('.filter-mjr-sub-con')

    tabMenu($fcon1, $fcon2)
    function tabMenu(els, con) {
      els.on('click', function () {
          indexM = $(this).index()+1;
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

var filterGenTab = $('.filter-gen-sub-tab')

filterGenTab.click(function () {
    filterGenTab.removeClass('on')
    $(this).addClass('on')
})

$(function ($) {
    let index =null;
    // let $filterwrap = $('.filter-loc-toggle')
    let $fcon1 = $('.filter-gen-sub-tab')
    let $fcon2 = $('.filter-gen-sub-con')
    tabMenu($fcon1, $fcon2)
    function tabMenu(els, con) {
      els.on('click', function () {
          indexG = $(this).index()+1;
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
