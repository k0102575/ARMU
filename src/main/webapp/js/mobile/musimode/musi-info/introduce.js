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
    categoryThemeName ="",
    categoryMajorName ="",
    categoryGenreName ="",
    categoryThemeNo = "",
    categoryMajorNo = "",
    categoryGenreNo = "",
    locationTextBox = $("#location-text-box"),
    locationSelcetHidden = $("#location-select-hidden"),
    locationName ="",
    locationNo = ""
    
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

$("#introduce-edit-btn").on('click', function() {
  
  if(themeSelectText.text() == "") {
    swal({
      title: "테마를 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
  return
} 

  if(majorSelectText.text() == "") {
    swal({
      title: "전공을 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  } 
  
  if(genreSelectText.text() == "") {
    swal({
      title: "장르를 선택 하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  }
  
  if(locationTextBox.text().length == 6) {
    swal({
      title: "지역을 선택하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
  return
  }
  
  if($("#intro-text").val().length == 0) {
    swal({
      title: "자기소개를 입력하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
  return
  }
  
  $.post('/musician/updateInfo.json', {
    "musicianTheme" : categoryThemeNo,
    "musicianMajor" : categoryMajorNo,
    "musicianGenre" : categoryGenreNo,
    "musicianLocation" : locationNo,
    "homepage" : $("#intro-homepage").val(),
    "intro" : $("#intro-text").val()
  }, function(result) {
    if(result.data == "ok")  {
      swal({
        title: "변경에 성공하셨습니다!",
        type: "success",
        showCancelButton: false,
        confirmButtonColor: "#8069ef",
        confirmButtonText: "확인",
        customClass: "checkSwal"
      },function() {
        location.reload()
      });
    }
  }, 'json')
  
})

function displayMusiInfoIntroduce() {
  $.getJSON('/musician/musiInfoMyIntroduce.json', function(result) {
    var data = result.data.getIntroduce
    for(var theme of data.themeList) {
      themeSelectText.append("<span class='selectSpan'>#" + theme + "</span>")
    }
    
    for (var i = 0; i < data.themeNoList.length; i++) {
      categoryThemeNo += data.themeNoList[i] + ","
    }
    
    for(var major of data.majorList) {
      majorSelectText.append("<span class='selectSpan'>#" + major + "</span>")
    }
    
    for (var i = 0; i < data.majorNoList.length; i++) {
      categoryMajorNo += data.majorNoList[i] + ","
    }
    
    for(var genre of data.genreList) {
      genreSelectText.append("<span class='selectSpan'>#" + genre + "</span>")
    }
    
    for (var i = 0; i < data.genreNoList.length; i++) {
      categoryGenreNo += data.genreNoList[i] + ","
    }
    
    locationSelectText.append("<span class='selectSpan'>" + data.sido + "</span>")
    for(var location of data.locationList) {
      locationSelectText.append("<span class='selectSpan'>#" + location + "</span>")
    }
    
    for (var i = 0; i < data.locationNoList.length; i++) {
      locationNo += data.locationNoList[i] + ","
    }
    
    $("#intro-homepage").val(data.homepage)
    $("#intro-text").val(data.intro)
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
        categoryThemeNo = ""
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
        categoryMajorNo = ""
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
      categoryGenreNo = ""
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
    var templateFn = Handlebars.compile($('#location-type-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $("#location-type-container")
    container.html(generatedHTML)
    
    $("#location-check-cancel").on('click', function() {
    $("#location-button-box").toggle(0)
    backScreen.toggle(0)
    $("#location-check-btn").toggle(0)
    })
    
    $("#location-check-check").on('click', function() {
      $("#location-select-text").append("<span class='selectSpan'>" + $("#location-button-box-header").text() + "</span>")
      locationNo = ""
      $("input[name=location]:checked").each(function() {
        locationNo += $(this).val() + ","
        locationName = "#" + $("label[for='"+$(this).attr('id') +"']").text()
      $("#location-select-text").append("<span class='selectSpan'>" + locationName + "</span>")
      });
      $("#location-select-text").append("<br/>\r\n")
      
      $("#location-button-box").toggle(0)
      backScreen.toggle(0)
      $("#location-check-btn").toggle(0)
    })
    
    $(".location-type-button").on('click', function() {
       var loctno = $(this).val(),
           loctname = $(this).text()
       $(this).css("background", "rgba(255,255,255, 0.5)")
       $.getJSON('/category/listLocation.json', {"loctno" : loctno}, function(result) {
       var templateFn = Handlebars.compile($('#location-button-template').text())
       var generatedHTML = templateFn(result.data)
       var container = $("#location-button-box")
       container.html("")
       container.append("<div id='location-button-box-header'> "+ loctname +" </div>")
       var html = container.html()
       container.html(html + generatedHTML)
       
       $("#location-button-box").toggle(0)
       backScreen.toggle(0)
       $("#location-check-btn").toggle(0)
    })
    
})
})
}