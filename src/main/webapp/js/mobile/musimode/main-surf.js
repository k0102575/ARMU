var eventSurfFavor = $(".event-surf-favor")

displaySurfEventList()
HandlebarsIntl.registerWith(Handlebars);

function displaySurfEventList() {
  $.getJSON('/event/listSurf.json', function(result) {
    console.log(result)
    var templateFn = Handlebars.compile($('#event-surf-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#event-surf-container')
    var html = container.html()
    container.html(html + generatedHTML)
    
    for(var i = 0; i < result.data.listSurf.length; i++) {
      if(result.data.listSurf[i].isFavorite == true) {
        eventSurfFavor.append("<i class='fa fa-heart' aria-hidden='true'></i>")
      }
    }
    
  })
}