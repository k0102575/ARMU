var surfBackscreen = $("#surf-backscreen"),
    container = $("#container"),
    filterContainer = $("#filter-container"),
    musicianSurfSort = $("#musician-surf-sort")


displaySurfEventList()
HandlebarsIntl.registerWith(Handlebars);
getLocation()


function displaySurfEventList() {
  $.getJSON('/event/listSurf.json', function(result) {
    $.each(result.data.listSurf, function(i, item) {
      heartAdd(item)//관심정보 처리
    });

    var templateFn = Handlebars.compile($('#event-surf-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#event-surf-container')
    var html = container.html()
    container.html(html + generatedHTML)

  })
}

function heartAdd(item) {
  if (item.isFavorite == true) {
    item.isFavorite = '<i class="fa fa-heart" aria-hidden="true"></i>'
  } else {
    item.isFavorite = '<i class="fa fa-heart-o" aria-hidden="true"></i>'
  }
}

$('body').on('click', ".event-surf", function() {
  /*location.href = '/mobile/musimode/event-info/index.html?no=' + */
  console.log($(this).attr('data-no') )
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
  filter()
})

$('#filter-thm-backscreen').click(function() {
  $('#main-surf').off('scroll touchmove mousewheel')
  $('#filter-thm-backscreen').css('display','none')
  $('#filter-thm-toggle').css('display','none')
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

        $('.filter-thm-sub-tab').click(function() {
          $('.filter-thm-sub-tab').removeClass('on')
          $(this).addClass('on')
          var find = $('.filter-thm-sub-con').attr('data-no')
          find = $(this).attr('data-no')
          $(".filter-thm-sub-con").css('display','none')
          $(".filter-thm-sub-con[data-no="+find+"]").css('display','block')
        })
      })
    }
  })
}
