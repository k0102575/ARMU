
displaySurfEventList()
HandlebarsIntl.registerWith(Handlebars);

function displaySurfEventList() {
  $.getJSON('/event/listSurf.json', function(result) {
	  $.each(result.data.listSurf, function(i, item) {
		  heartAdd(item)//관심정보 처리
	  });
	  
    console.log(result)
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