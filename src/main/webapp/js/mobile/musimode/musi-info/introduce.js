var themeSelectButton = $("#theme-select-button"),
    majorSelectButton = $("#major-select-button"),
    genreSelectButton = $("#genre-select-button"),
    locationSelectButton = $("#location-select-button"),
    themeSelectBox = $("#theme-select-box"),
    majorSelectBox = $("#major-select-box"),
    genreSelectBox = $("#genre-select-box"),
    themeSelectText = $("#theme-select-text"),
    majorSelectText = $("#major-select-text"),
    genreSelectText = $("#genre-select-text"),
    locationSelectText = $("#location-select-text"),
    backScreen = $("#introduce-backscreen"),
    themeCheckBtn = $("#theme-check-btn"),
    majorCheckBtn = $("#major-check-btn"),
    genreCheckBtn = $("#genre-check-btn"),
    themeSelcetHidden = $("#theme-select-hidden")
    majorSelcetHidden = $("#major-select-hidden")
    genreSelcetHidden = $("#genre-select-hidden")
    categoryThemeName ="",
    categoryMajorName ="",
    categoryGenreName ="",
    categoryThemeNo = "",
    categoryMajorNo = "",
    categoryGenreNo = ""
    
displayMusiInfoIntroduce()
getCategory()
getLocation()


themeSelectButton.on('click', function () {
  themeSelectBox.toggle()
  backScreen.toggle()
  $("#theme-check-btn").css("display","block")
})

majorSelectButton.on('click', function () {
  majorSelectBox.toggle()
  backScreen.toggle()
  $("#major-check-btn").css("display","block")
})

genreSelectButton.on('click', function () {
  genreSelectBox.toggle()
  backScreen.toggle()
  $("#genre-check-btn").css("display","block")
})

locationSelectButton.on('click', function() {
  $("#location-type-container").css('display', 'block')
  locationSelectText.html("")
})

function displayMusiInfoIntroduce() {
  $.getJSON('/musician/musiInfoMyIntroduce.json', function(result) {
    var data = result.data.getIntroduce
    for(var theme of data.themeList) {
      themeSelectText.append("<span class='selectSpan'>#" + theme + "</span>")
    }
    
    for(var major of data.majorList) {
      majorSelectText.append("<span class='selectSpan'>#" + major + "</span>")
    }
    
    for(var genre of data.genreList) {
      genreSelectText.append("<span class='selectSpan'>#" + genre + "</span>")
    }
    
    locationSelectText.append("<span class='selectSpan'>" + data.sido + "</span>")
    for(var location of data.locationList) {
      locationSelectText.append("<span class='selectSpan'>#" + location + "</span>")
    }
})
}

function getCategory() {
  $.getJSON('/category/listTheme.json', function(result) {
      var templateFn = Handlebars.compile($('#select-theme-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $('#theme-select-box')
      var html = container.html()
      container.html(html + generatedHTML)
      
      $("#theme-check-cancel").on('click', function() {
          themeSelectBox.toggle(0)
          backScreen.toggle(0)
          $("#theme-check-btn").toggle(0)
      })

      $("#theme-check-check").on('click', function() {
        themeSelectText.html("")
        $("input[name=theme]:checked").each(function() {
          categoryThemeNo += $(this).val() + "," 
          categoryThemeName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
          themeSelectText.append("<span class='selectSpan'>" + categoryThemeName + "</span>")
          });
        themeSelectBox.toggle(0)
        backScreen.toggle(0)
        $("#theme-check-btn").toggle(0)
      })
      
    }, function(err) {
      console.log(err)
  })

  $.getJSON('/category/listMajor.json', function(result) {
      var templateFn = Handlebars.compile($('#select-major-template').text())
      var generatedHTML = templateFn(result.data)
      var container = $('#major-select-box')
      var html = container.html()
      container.html(html + generatedHTML)
      
      $("#major-check-cancel").on('click', function() {
        backScreen.toggle(0)
        majorSelectBox.toggle(0)
        $("#major-check-btn").toggle(0)
      })

      $("#major-check-check").on('click', function() {
        majorSelectText.html("")
        $("input[name=major]:checked").each(function() {
          categoryMajorNo += $(this).val() + ","
          categoryMajorName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
          majorSelectText.append("<span class='selectSpan'>" + categoryMajorName + "</span>")
          });
        backScreen.toggle(0)
        majorSelectBox.toggle(0)
        $("#major-check-btn").toggle(0)
      })
      
    }, function(err) {
      console.log(err)
    })
    
    $.getJSON('/category/listGenre.json', function(result) {
    var templateFn = Handlebars.compile($('#select-genre-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#genre-select-box')
    var html = container.html()
    container.html(html + generatedHTML)
    
    $("#genre-check-cancel").on('click', function() {
      backScreen.toggle(0)
      genreSelectBox.toggle(0)
      $("#genre-check-btn").toggle(0)
    })
  
    $("#genre-check-check").on('click', function() {
      genreSelectText.html("")
      $("input[name=genre]:checked").each(function() {
        categoryGenreNo += $(this).val() + ","
        categoryGenreName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
        genreSelectText.append("<span class='selectSpan'>" + categoryGenreName + "</span>")
        });
      backScreen.toggle(0)
      genreSelectBox.toggle(0)
      $("#genre-check-btn").toggle(0)
    })
    
  }, function(err) {
    console.log(err)
  })
}

function getLocation() {
  $.getJSON('/category/listLocationType.json', function(result) {
    console.log(result)
    var templateFn = Handlebars.compile($('#location-type-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $("#location-type-container")
    container.html(generatedHTML)
})
}