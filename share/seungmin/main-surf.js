
displaySurfEventList()
HandlebarsIntl.registerWith(Handlebars);

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
  $("#surf-backscreen").css('display', 'block')
  $("#container").css('position', 'fixed')
  $("#filter-container").toggle(0)
  getLocation()
})

function getLocation() {
  $.getJSON('/category/listLocationType.json', function(result) {
    var templateFn = Handlebars.compile($('#location-type-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $("#location-type-container")
    container.html(generatedHTML)
    var locationId = [],
    locationTypeId = [],
    loctno = "",
    loctname = ""
    
    $(".location-type-button").on('click', function() {
      loctno = $(this).val()
      loctname = $(this).text()
      $.getJSON('/category/listLocation.json', {"loctno" : loctno}, function(result) {
        console.log(result)
      var templateFn = Handlebars.compile($('#location-button-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $("#location-button-box")
      container.html("")
      var html = container.html()
      container.html(html + generatedHTML)
      container.prepend("<div id='location-button-box-header'> "+ loctname +" </div>")
      
      $('input:checkbox[name="location"]').each(function() {
        for(checkloc of locationId) {
          if(this.value == checkloc){
            this.checked = true; 
            }
        }
      })
      
      for(var i = 0; i < result.data.listLocation.length; i++) {
        var index = locationId.indexOf("" + result.data.listLocation[i].locno);
        if (index > -1) {
          locationId.splice(index, 1);
      }
      }
      
      $("#location-button-box").toggle(0)
      $("#filter-backscreen").toggle(0)
      $("#location-check-btn").toggle(0)
      })
    })
    
    $("#location-check-check").on('click', function() {
      for(locationType of locationTypeId) {
        if(loctno == locationType) {
          $(".loct[data-no='"+ loctno +"']").remove()
            $(".loc[data-loctno='"+ loctno +"']").remove()
          }
        }
      locationTypeId.push(loctno)
      if($("input[name=location]:checked").length == 0) {
        $("#location-button-box").toggle(0)
        $("#filter-backscreen").toggle(0)
        $("#location-check-btn").toggle(0)
        return
      }
      
      $("#filter-select-box").append("<span class='loct' data-no='" + loctno + "'>"+ loctname +"</span>")
      $("input[name=location]:checked").each(function() {
        locationId.push($(this).val())
        locationName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        $("#filter-select-box").append("<span class='loc' data-loctno='" + loctno + "' data-no='" + $(this).val() + "'>"+ locationName +"</span>")
      })
      $("#filter-select-box").append("<br class='loct' data-no ='" + loctno + "'/>")
      $("#location-button-box").toggle(0)
      $("#filter-backscreen").toggle(0)
      $("#location-check-btn").toggle(0)
    })
    
    $("#location-check-cancel").on('click', function() {
      $("#location-button-box").toggle(0)
      $("#filter-backscreen").toggle(0)
      $("#location-check-btn").toggle(0)
    })
    
})
}

