"use strict"

displayEndEventList()


function displayEndEventList() {
	$.getJSON('/event/listMusiPr.json', function(result) {
		if(result.status != 'success') {
			console.error("getJSON() 실패: ", result.status)
			return;
		}
		console.log(result.data)
		var templateFn = Handlebars.compile($('#pr-event-template').text())
		var generatedHTML = templateFn(result.data)
		var container = $('#pr-event-container')
		var html = container.html()
		container.html(html + generatedHTML)
	
		
  $('.event-box').on('click', function(e) {
    location.href = '../detail.html?no=' + $(this).attr('data-no')
  })
	}, function(err) {
		console.log(err)
	})
}




