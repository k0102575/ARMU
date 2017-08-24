$(function() {
  var introduce = $(".introduce-introduce"),
  introduceMore = $("#introduce-more"),
  introduceHide = $("#introduce-hide")

  if(introduce.text().length >= 270) {
    introduceMore.css('display', 'block')
  }

  introduceMore.on("click", function() {
    introduce.css({"maxHeight":"none"})
    introduce.css("height", "auto")
    introduceMore.css("display", "none")
    introduceHide.css("display", "block")
  })

  introduceHide.on("click", function() {
    introduce.css({"maxHeight":"435px"})
    introduce.css("height", "none")
    introduceMore.css("display", "block")
    introduceHide.css("display", "none")
  })
})

displayMusiInfoIntroduce()

function displayMusiInfoIntroduce() {
  $.getJSON('/portfolio/musiInfoIntroduce.json',
      { 
    "no" : location.href.split('?')[1].split('=')[1]
      }, function(result) {
        var categoryList = result.data.getIntroduce.categoryList
        data = result.data.getIntroduce
        var templateFn = Handlebars.compile($('#musician-info-introduce-template').text())
        var generatedHTML = templateFn(data)
        var container = $('#musician-info-cathegory')
        var html = container.html()
        container.html(html + generatedHTML)
        if(data.homepage == "0") {
          $(".introduce-homepage").css("display", "none")
          $(".introduce-introduce").text(data.intro)
        } else {
          $(".introduce-homepage").append("<span> " + data.homepage + "</span>")
          $(".introduce-introduce").text(data.intro)
        }
        
        console.log(categoryList)

        for (var i = 0; i < categoryList.length; i++) {
          $("#musician-info-location-content").append("<div id='musician-info-location-content-box' loctno='"+ categoryList[i].loctno +"'><span>"+categoryList[i].loctname+"</span></div>")
          for( var j = 0; j < categoryList[i].list.length; j++) {
            $("#musician-info-location-content-box[loctno='"+ categoryList[i].list[j].key +"']").append("<span>"+ categoryList[i].list[j].value +"</span>")
          }
          
        }
        

      })
}
