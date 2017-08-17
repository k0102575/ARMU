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

