$(document).ready(function() {
  displaySurfMusiList()
  filterLocation()
  filterMajor()
  filterGenre()
})

function heartAdd(item) {
  if (item.isFavorite == true) {
    item.isFavorite = '<i class="fa fa-heart" aria-hidden="true"></i>'
  } else {
    item.isFavorite = '<i class="fa fa-heart-o" aria-hidden="true"></i>'
  }
}


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
      $.each(result.data.listSurf, function(i, item) {
        heartAdd(item)
      });
      
      var templateFn = Handlebars.compile($('#musician-list-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $('#musician-surf-list')
      container.html(generatedHTML)

    }
    
  })
}

var surfBackscreen = $("#surf-backscreen"),
    filterContainer = $("#filter-container"),
    filterCancel = $("#filter-cancel"),
    ageGroup = $("#age-group")

$(".filterBtn").on('click', function() {
//  console.log(loc,mjr,gen, checkVal,minAge,maxAge,indexL,indexM,indexG)
  surfBackscreen.css('display', 'block');
  ageGroup.val("20대 이하" + " - " + "50대 이상");
  filterContainer.toggle();
});




filterCancel.on('click', function() {
  filterContainer.toggle();
  surfBackscreen.css('display', 'none');
})

//var xScroll = new jindo.m.Scroll("filter-loc-tab", {
//    bUseHScroll: true,
//    bUseVScroll: false,
//    bUseMomentum: false,
//    nHeight: 100,
//    nWidth: 980
//});
//
//var yScroll = new jindo.m.Scroll("seoul", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});
////yScroll = new jindo.m.Scroll("busan", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});
//yScroll = new jindo.m.Scroll("kyeonggi", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});
//
//yScroll = new jindo.m.Scroll("incheon", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});
//yScroll = new jindo.m.Scroll("busan", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});
//yScroll = new jindo.m.Scroll("daegu", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});
//yScroll = new jindo.m.Scroll("gwangju", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});
//yScroll = new jindo.m.Scroll("daejun", {
//    bUseHScroll: false,
//    bUseVScroll: true,
//    bUseMomentum: false,
//    nHeight: 400
//});


$('#filter-loc').click(function() {
  $("#filter-loc-backscreen").css('display','block')
    $("#filter-loc-backscreen").on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $("#filter-loc-toggle").css('visibility', 'visible');
});

$("#filter-loc-backscreen").click(function() {
  $('#main-surf').off('scroll touchmove mousewheel')
    $("#filter-loc-toggle").css('visibility', 'hidden');
    $("#filter-loc-backscreen").css('display', 'none');
})

$('#filter-major').click(function() {
    $("#filter-mjr-backscreen").css('display', 'block');
    $("#main-surf").on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $("#filter-mjr-toggle").css('visibility', 'visible');
});

$("#filter-mjr-backscreen").click(function() {
    $('#main-surf').off('scroll touchmove mousewheel')
    $("#filter-mjr-toggle").css('visibility', 'hidden');
    $("#filter-mjr-backscreen").css('display', 'none');
})

$('#filter-genre').click(function() {
    $("#filter-gen-backscreen").css('display', 'block');
    $("#main-surf").on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    $("#filter-gen-toggle").css('visibility', 'visible');
//    $(".filter-gen-sub-con").css('display','none');
});

$("#filter-gen-backscreen").click(function() {
    $('#main-surf').off('scroll touchmove mousewheel')
    $("#filter-gen-toggle").css('visibility', 'hidden');
    $("#filter-gen-backscreen").css('display', 'none');
})


var minAge = 10,
	maxAge = 60;

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

var checkVal = 'G'
$("#filter-update").on('click', function() {
//  console.log(loc,mjr,gen, checkVal,minAge,maxAge,indexL,indexM,indexG)
  checkVal = $(":input:radio[name=gender]:checked").val()
  
  if(minAge == 0 && maxAge == 0) {
      $.post('/musician/searchMusician.json', 
      {
        'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,
        "gender" : checkVal,
        "minAge" : "10",
        "maxAge" : "60"
      },
      function(result) {
        handleList(result)
        filterContainer.toggle();
      },'json')
      return
    }
      $.post('/musician/searchMusician.json', 
      {
        'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,
        "gender" : checkVal,
        "minAge" : minAge,
        "maxAge" : maxAge
      },
      function(result) {
        handleList(result)
        filterContainer.toggle();
      },'json')
    })




var locno=3000,mjrno=3000,gnrno=3000
var indexL=1, 
indexM=1, indexG =1;
//$('.loc').click(function () {
//  if(!checkVal)
//    checkVal='G'
//  if(mjrno ==3000)
//    mjrno=2000
//  if(gnrno ==3000)
//    gnrno=2000
//  locno=$(this).attr('data-no')
////  console.log('seoul',locno,mjrno,gnrno, checkVal,minAge,maxAge,indexL,indexM,indexG)
//    $.post('/musician/searchMusician.json',
//      {'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,"gender" : checkVal, "minAge" : minAge, "maxAge" : maxAge}, function(result) {
//        handleList(result)
//        
//        var surfLike = $(".surfLike")
//        for(var i = 0; i <= result.data.listSurf.length -1; i++){
//            
//          if(result.data.listSurf[i].isFavorite == true){
//            surfLike[i].style.color = "#ba3d3d"
//          }
//      }
//  },'json')
//  
//  $('.check1').remove()
//  seoul.removeClass('on2')
//  $(this).html('<img class="check-img check1" src="/image/icon/tick.png">'+ $(this).text())
//  $(this).addClass('on2')
//  return locno;
//})




//$(function ($) {
//    let index =null;
//    // let $filterwrap = $('.filter-loc-toggle')
//    let $fcon1 = $('.filter-loc-sub-tab')
//    let $fcon2 = $('.filter-loc-sub-con')
//
//    tabMenu($fcon1, $fcon2)
//    function tabMenu(els, con) {
//      els.on('click', function () {
//        indexL = $(this).index()+1;
//          els.removeClass('on')
//          $(this).addClass('on')
//          index = $(this).index()
//
//          con.css("visibility","hidden")
//          con.css("height","0")
//          con.eq(index).css("visibility","visible")
//          con.eq(index).css("height","400px")
//      })
//    }
//})
function filterLocation() {
  $.getJSON('/category/listEventLocation.json', function(result) {
    var templateFn = Handlebars.compile($('#location-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#filter-loc-tab')
    var html = container.html()
    container.html(html + generatedHTML)
        var xScroll = new jindo.m.Scroll("filter-loc-tab", {
          bUseHScroll: true,
          bUseVScroll: false,
          bUseMomentum: false,
          nHeight: 104,
          nWidth: 980
        });
    subcon()
    function subcon() {
//      $('#filter-mjr-tab:first-child').find(">:first-child").addClass('on')
      $.getJSON('/category/listEventLocation.json', function(result) {
        var templateFn = Handlebars.compile($('#location-sub-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#filter-loc-content')
        var html = container.html()
        container.html(html + generatedHTML)
        $('.filter-loc-sub-con[data-no=1]').attr('id','seoul')
        $('.filter-loc-sub-con[data-no=2]').attr('id','busan')
        var yScroll = new jindo.m.Scroll("seoul", {
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
//        $(".filter-loc-sub-con").css('display','none')
//        $('.mjr').first().addClass('on2').html('<img class="check-img check1" src="/image/icon/tick.png">&nbsp;'+ $('.mjr').first().text())
        
        $('.filter-loc-sub-tab').click(function() {
          $('.filter-loc-sub-tab').removeClass('on')
          $(this).addClass('on')
          var find = $('.filter-loc-sub-con').attr('data-no')
          find = $(this).attr('data-no')
//          $(".filter-loc-sub-con").css('display','none')
//          $(".filter-loc-sub-con[data-no="+find+"]").css('display','table')
          $(".filter-loc-sub-con").css('display','none')
//          console.log($(".filter-loc-sub-con[data-no="+find+"]"))
          $(".filter-loc-sub-con[data-no="+find+"]").css('display','table')
          indexL= find
        })
        
        $('#resetL').click(function() {
          if(mjrno ==3000)
            mjrno=2000
          if(gnrno ==3000)
            gnrno=2000
          locno = $(this).attr('data-no')
//          console.log('location',locno,mjrno,gnrno, checkVal,minAge,maxAge,indexL,indexM,indexG)
          $.post('/musician/searchMusician.json',
              {'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,"gender" : checkVal, "minAge" : minAge, "maxAge" : maxAge}, function(result) {
                  handleList(result)
                  for(var i = 0; i <= result.data.listSurf.length -1; i++){
                    
                    if(result.data.listSurf[i].isFavorite == true){
                      surfLike[i].style.color = "#ba3d3d"
                    }
                  }
              },'json')
        })
        $('.loc').click(function() {
          if(mjrno ==3000)
            mjrno=2000
          if(gnrno ==3000)
            gnrno=2000
          locno = $(this).attr('data-no')
//          console.log('location',locno,mjrno,gnrno, checkVal,minAge,maxAge,indexL,indexM,indexG)
          $.post('/musician/searchMusician.json',
              {'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,"gender" : checkVal, "minAge" : minAge, "maxAge" : maxAge}, function(result) {
                  handleList(result)
                  for(var i = 0; i <= result.data.listSurf.length -1; i++){
                    
                    if(result.data.listSurf[i].isFavorite == true){
                      surfLike[i].style.color = "#ba3d3d"
                    }
                  }
              },'json')
              
          $('.check3').remove()
          $('.loc').removeClass('on2')
          $(this).html('<img class="check-img check3" src="/image/icon/tick.png">'+ $(this).text())
          $(this).addClass('on2')
        })
      })
    }


  })
}


function filterMajor() {
  $.getJSON('/category/listEventMajor.json', function(result) {
    var templateFn = Handlebars.compile($('#major-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#filter-mjr-tab')
    var html = container.html()
    container.html(html + generatedHTML)
    var xScroll = new jindo.m.Scroll("filter-mjr-tab", {
          bUseHScroll: true,
          bUseVScroll: false,
          bUseMomentum: false,
          nHeight: 104,
          nWidth: 980
        });
    subcon()

    function subcon() {
//      $('#filter-mjr-tab:first-child').find(">:first-child").addClass('on')
      $.getJSON('/category/listEventMajor.json', function(result) {
        var templateFn = Handlebars.compile($('#major-sub-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#filter-mjr-content')
        var html = container.html()
        container.html(html + generatedHTML)
//        $(".filter-mjr-sub-con").css('display','none')
//        $('.mjr').first().addClass('on2').html('<img class="check-img check1" src="/image/icon/tick.png">&nbsp;'+ $('.mjr').first().text())
        
        $('.filter-mjr-sub-tab').click(function() {
          $('.filter-mjr-sub-tab').removeClass('on')
          $(this).addClass('on')
          var find = $('.filter-mjr-sub-con').attr('data-no')
          find = $(this).attr('data-no')
          $(".filter-mjr-sub-con").css('display','none')
          $(".filter-mjr-sub-con[data-no="+find+"]").css('display','table')
          indexM= find
        })
        
        $('#resetM').click(function() {
          if(locno ==3000)
            locno=2000
          if(gnrno ==3000)
            gnrno=2000
          mjrno = $(this).attr('data-no')
//          console.log('major',locno,mjrno,gnrno, checkVal,minAge,maxAge,indexL,indexM,indexG)
          $.post('/musician/searchMusician.json',
              {'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,"gender" : checkVal, "minAge" : minAge, "maxAge" : maxAge}, function(result) {
                  handleList(result)
                  for(var i = 0; i <= result.data.listSurf.length -1; i++){
                    
                    if(result.data.listSurf[i].isFavorite == true){
                      surfLike[i].style.color = "#ba3d3d"
                    }
                  }
              },'json')
        })
        $('.mjr').click(function() {
          if(locno ==3000)
            locno=2000
          if(gnrno ==3000)
            gnrno=2000
          mjrno = $(this).attr('data-no')
//          console.log('major',locno,mjrno,gnrno, checkVal,minAge,maxAge,indexL,indexM,indexG)
          $.post('/musician/searchMusician.json',
              {'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,"gender" : checkVal, "minAge" : minAge, "maxAge" : maxAge}, function(result) {
                  handleList(result)
                  for(var i = 0; i <= result.data.listSurf.length -1; i++){
                    
                    if(result.data.listSurf[i].isFavorite == true){
                      surfLike[i].style.color = "#ba3d3d"
                    }
                  }
              },'json')
              
          $('.check1').remove()
          $('.mjr').removeClass('on2')
          $(this).html('<img class="check-img check1" src="/image/icon/tick.png">'+ $(this).text())
          $(this).addClass('on2')
        })
      })
    }
  })
}



function filterGenre() {
  $.getJSON('/category/listEventGenre.json', function(result) {
    var templateFn = Handlebars.compile($('#genre-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#filter-gen-tab')
    var html = container.html()
    container.html(html + generatedHTML)
    $(".filter-gen-sub-tab[data-no=4]").text('재즈')
    
    var xScroll = new jindo.m.Scroll("filter-gen-tab", {
          bUseHScroll: true,
          bUseVScroll: false,
          bUseMomentum: false,
          nHeight: 104,
          nWidth: 980
        });
    subcon()

    function subcon() {
//      $('#filter-gen-tab:first-child').find(">:first-child").addClass('on')
      $.getJSON('/category/listEventGenre.json', function(result) {
        var templateFn = Handlebars.compile($('#genre-sub-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#filter-gen-content')
        var html = container.html()
        container.html(html + generatedHTML)
        $(".filter-gen-sub-con").css('display','none')
//        $('.gen').first().addClass('on2').html('<img class="check-img check2" src="/image/icon/tick.png">&nbsp;'+ $('.gen').first().text())
        
        $('.filter-gen-sub-tab').click(function() {
          $('.filter-gen-sub-tab').removeClass('on')
          $(this).addClass('on')
          var find = $('.filter-gen-sub-con').attr('data-no')
          find = $(this).attr('data-no')
          $(".filter-gen-sub-con").css('display','none')
          $(".filter-gen-sub-con[data-no="+find+"]").css('display','table')
          indexG = find
        })
        
        $('#resetG').click(function() {
          if(locno ==3000)
            locno=2000
          if(mjrno ==3000)
            mjrno=2000
          gnrno = $(this).attr('data-no')
//          console.log('genre',locno,mjrno,gnrno, checkVal,minAge,maxAge,indexL,indexM,indexG)
          $.post('/musician/searchMusician.json',
              {'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,"gender" : checkVal, "minAge" : minAge, "maxAge" : maxAge}, function(result) {
                handleList(result)
                for(var i = 0; i <= result.data.listSurf.length -1; i++){
                  
                  if(result.data.listSurf[i].isFavorite == true){
                    surfLike[i].style.color = "#ba3d3d"
                  }
                }
              },'json')
        })
        $('.gen').click(function() {
          if(locno ==3000)
            locno=2000
          if(mjrno ==3000)
            mjrno=2000
          gnrno = $(this).attr('data-no')
//          console.log('genre',locno,mjrno,gnrno, checkVal,minAge,maxAge,indexL,indexM,indexG)
          $.post('/musician/searchMusician.json',
              {'locno':locno, 'mjrno':mjrno, 'gnrno':gnrno, 'indexL':indexL, 'indexM':indexM, 'indexG':indexG,"gender" : checkVal, "minAge" : minAge, "maxAge" : maxAge}, function(result) {
                handleList(result)
                for(var i = 0; i <= result.data.listSurf.length -1; i++){
                  
                  if(result.data.listSurf[i].isFavorite == true){
                    surfLike[i].style.color = "#ba3d3d"
                  }
                }
              },'json')
          gnrno = $(this).attr('data-no')
          $('.check2').remove()
          $('.gen').removeClass('on2')
          $(this).html('<img class="check-img check2" src="/image/icon/tick.png">'+ $(this).text())
          $(this).addClass('on2')
        })
      })
    }
  })
}

