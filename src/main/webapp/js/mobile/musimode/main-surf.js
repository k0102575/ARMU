var surfBackscreen = $("#surf-backscreen"),
    container = $("#container"),
    filterContainer = $("#filter-container"),
    musicianSurfSort = $("#musician-surf-sort")

displaySurfEventList()
HandlebarsIntl.registerWith(Handlebars);
getLocation()
filter()
filterMajor()
filterGenre()

function displaySurfEventList() {
  $.getJSON('/event/listSurf.json', function(result) {
    var templateFn = Handlebars.compile($('#event-surf-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#event-surf-container')
    var html = container.html()
    container.html(html + generatedHTML)
  })
}

$('body').on('click', ".event-surf", function() {
  location.href = '/mobile/musimode/event/detail.html?no=' + $(this).attr('data-no')
})

$('body').on('click', ".filterBtn", function() {
  surfBackscreen.css('display', 'block')
  container.css('position', 'fixed')
  filterContainer.toggle(0)
  $("#location-check-btn").toggle(0)
})

$('body').on('click', "#location-check-cancel", function() {
  surfBackscreen.css('display', 'none')
  container.css('position', 'relative')
  filterContainer.toggle(0)
  $("#location-check-btn").toggle(0)
})

$('body').on('click', "#location-check-check", function() {
  $("#filter-select-text").html("")
  $("input[name=location]:checked").each(function() {
    locationName = $("label[for='"+$(this).attr('id') +"']").text()
    $("#filter-select-text").append("<span class='selectSpan'>" + locationName + "</span>")
  });

  surfBackscreen.css('display', 'none')
  container.css('position', 'relative')
  filterContainer.toggle(0)
  $("#location-check-btn").toggle(0)
})


$('#filter-theme').click(function() {
  $('#main-surf').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
 });
  $('#filter-thm-backscreen').css('display','block')
  $('#filter-thm-toggle').css('display','block')
})

$('#filter-thm-backscreen').click(function() {
  $('#main-surf').off('scroll touchmove mousewheel')
  $('#filter-thm-backscreen').css('display','none')
  $('#filter-thm-toggle').css('display','none')
})

$('#filter-major').click(function() {
  $('#main-surf').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
 });
  $('#filter-mjr-backscreen').css('display','block')
  $('#filter-mjr-toggle').css('display','block')
})

$('#filter-mjr-backscreen').click(function() {
  $('#main-surf').off('scroll touchmove mousewheel')
  $('#filter-mjr-backscreen').css('display','none')
  $('#filter-mjr-toggle').css('display','none')
})

$('#filter-genre').click(function() {
  $('#main-surf').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
 });
  $('#filter-gen-backscreen').css('display','block')
  $('#filter-gen-toggle').css('display','block')
})

$('#filter-gen-backscreen').click(function() {
  $('#main-surf').off('scroll touchmove mousewheel')
  $('#filter-gen-backscreen').css('display','none')
  $('#filter-gen-toggle').css('display','none')
})

function getLocation() {
  $.getJSON('/category/listLocationType.json', function(result) {
    console.log(result)
    var templateFn = Handlebars.compile($('#location-type-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $("#filter-container")
    var html = container.html()
    container.html(html + generatedHTML)
})
}


var theme = $('.thm'), major= $('.mjr'), genre= $('.gen')
var thmno=3000, mjrno=3000,gnrno=3000;
var indexT=1, 
indexM=1, indexG =1;
function filter() {
  $.getJSON('/category/listEventTheme.json', function(result) {
    var templateFn = Handlebars.compile($('#theme-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#filter-thm-tab')
    var html = container.html()
    container.html(html + generatedHTML)
    subcon()

    function subcon() {
      $('#filter-thm-tab:first-child').find(">:first-child").addClass('on')
      $.getJSON('/category/listEventTheme.json', function(result) {
        var templateFn = Handlebars.compile($('#theme-sub-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#filter-thm-content')
        var html = container.html()
        container.html(html + generatedHTML)
        
        $('.thm').first().addClass('on2').html('<i class="fa fa-check check3" aria-hidden="true"></i>'+ $('.thm').first().text())
        $('.filter-thm-sub-tab').click(function() {
          $('.filter-thm-sub-tab').removeClass('on')
          $(this).addClass('on')
          var find = $('.filter-thm-sub-con').attr('data-no')
          find = $(this).attr('data-no')
          $(".filter-thm-sub-con").css('display','none')
          $(".filter-thm-sub-con[data-no="+find+"]").css('display','block')
        })
        
        $('.thm').click(function() {
          if(mjrno ==3000)
            mjrno=2000
          if(gnrno ==3000)
            gnrno=2000
          thmno = $(this).attr('data-no')
          console.log('thmno=',thmno,'mjrno=',mjrno,'gnrno=',gnrno,indexT,indexM,indexG)
          $.post('/event/searchEvent.json',
              {'thmno':thmno, 
                'mjrno':mjrno, 
                'gnrno':gnrno, 
                'indexT':indexT, 
                'indexM':indexM, 
                'indexG':indexG}, function(result) {
                  $.each(result.data.listSurf, function(i, item) {
                    heartAdd(item)//관심정보 처리
                  });
                  console.log(result.data)
                  var templateFn = Handlebars.compile($('#event-surf-template').text())
                  var generatedHTML = templateFn(result.data)
                  var container = $('#event-surf-container')
                  var html = container.html()
                  container.html(generatedHTML)
//                handleList(result)
//                var surfLike = $(".surfLike")
//                for(var i = 0; i <= result.data.listSurf.length -1; i++){
//                  if(result.data.listSurf[i].isFavorite == true){
//                    surfLike[i].style.color = "#ba3d3d"
                  console.log('abc')
              },'json')

          $('.check3').remove()
          $('.thm').removeClass('on2')
          $(this).html('<i class="fa fa-check check3" aria-hidden="true"></i>'+ $(this).text())
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
    subcon()

    function subcon() {
      $('#filter-mjr-tab:first-child').find(">:first-child").addClass('on')
      $.getJSON('/category/listEventMajor.json', function(result) {
        var templateFn = Handlebars.compile($('#major-sub-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#filter-mjr-content')
        var html = container.html()
        container.html(html + generatedHTML)
        $('.mjr').first().addClass('on2').html('<i class="fa fa-check check1" aria-hidden="true"></i>'+ $('.mjr').first().text())
        
        $('.filter-mjr-sub-tab').click(function() {
          $('.filter-mjr-sub-tab').removeClass('on')
          $(this).addClass('on')
          var find = $('.filter-mjr-sub-con').attr('data-no')
          find = $(this).attr('data-no')
          $(".filter-mjr-sub-con").css('display','none')
          $(".filter-mjr-sub-con[data-no="+find+"]").css('display','block')
        })
        $('.mjr').click(function() {
          mjrno = $(this).attr('data-no')
          $('.check1').remove()
          $('.mjr').removeClass('on2')
          $(this).html('<i class="fa fa-check check1" aria-hidden="true"></i>'+ $(this).text())
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
    subcon()

    function subcon() {
      $('#filter-gen-tab:first-child').find(">:first-child").addClass('on')
      $.getJSON('/category/listEventGenre.json', function(result) {
        var templateFn = Handlebars.compile($('#genre-sub-template').text())
        var generatedHTML = templateFn(result.data)
        var container = $('#filter-gen-content')
        var html = container.html()
        container.html(html + generatedHTML)
        $('.gen').first().addClass('on2').html('<i class="fa fa-check check2" aria-hidden="true"></i>'+ $('.gen').first().text())
        
        $('.filter-gen-sub-tab').click(function() {
          $('.filter-gen-sub-tab').removeClass('on')
          $(this).addClass('on')
          var find = $('.filter-gen-sub-con').attr('data-no')
          find = $(this).attr('data-no')
          $(".filter-gen-sub-con").css('display','none')
          $(".filter-gen-sub-con[data-no="+find+"]").css('display','block')
        })
        
        $('.gen').click(function() {
          gnrno = $(this).attr('data-no')
          $('.check2').remove()
          $('.gen').removeClass('on2')
          $(this).html('<i class="fa fa-check check2" aria-hidden="true"></i>'+ $(this).text())
          $(this).addClass('on2')
        })
      })
    }
  })
}
