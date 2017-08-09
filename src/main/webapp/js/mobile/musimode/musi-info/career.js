var count = 0;

Handlebars.registerHelper('isIndex', function(key, options) {
  if (key == "Y") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
  
displayMusiInfoPortfolio()

$(window).load(function() {
  $(".timeline-content").on('click', function(){
    $("#spec-date").val($(this).children('.timeline-date').text())
    $("#spec-desc").val($(this).children('.timeline-desc').text())
    $("#spec-detail").toggle(0)
    $(".spec-backscreen").css('display', 'block')
  })
  
  $("#spec-close").on('click', function() {
    $("#spec-detail").toggle(0)
    $(".spec-backscreen").css('display', 'none')
  })
  

  var fiFilenames = $('#fi-filenames');
  $('#fi-photoupload').fileupload({
    url: '/musician/career.json',
    dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
    sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
    singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
    autoUpload: true,        // 파일을 추가할 때 자동 업로딩 설정.
    disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
      previewMaxWidth: 800,   // 미리보기 이미지 너비
      previewMaxHeight: 400,  // 미리보기 이미지 높이 
      previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
      submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
      }, 
      processalways: function(e, data) {
        var imagesDiv = $('#profile-img');
        imagesDiv.attr('src', '');
        for (var i = 0; i < data.files.length; i++) {
          try {
            if (data.files[i].preview.toDataURL) {
              imagesDiv.css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');
              imagesDiv.css("height", "400px");
            }
          } catch (err) {}
        }
      },
      done: function (e, d) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
        var imlibsData = d.result;
        var file = imlibsData.data[0];
        fiFilenames.val(file.filename)
        console.log(fiFilenames.val())
        
      }
  });
  
}) // window.load()

$(".musician-info-nickname").on('click', function() {
  console.log($(".timeline-content"))
  $(".portfolio-container").append($('#musician-info0-portfolio-template').text())
  
    $(".timeline-content").on('click', function(){
    $("#spec-date").val($(this).children('.timeline-date').text())
    $("#spec-desc").val($(this).children('.timeline-desc').text())
    $("#spec-detail").toggle(0)
    $(".spec-backscreen").css('display', 'block')
  })
})
  
function displayMusiInfoPortfolio() {
  $.getJSON('/musician/musiInfoMyPortfolio.json', function(result) {
      
  if(result.data.getPortfolio.length == 0) {
    var templateFn = Handlebars.compile($('#musician-info0-portfolio-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('.portfolio-container')
    var html = container.html()
    container.html(html + generatedHTML)
    $(".musician-portfolio-edit-btn").css("display", "none")
    return
  }
    
  var templateFn = Handlebars.compile($('#musician-info-portfolio-template').text())
  var generatedHTML = templateFn(result.data)
  var container = $('.portfolio-container')
  var html = container.html()
  container.html(html + generatedHTML)
    
  var timeLine = $('.timeline-line')
  
  $(".musician-portfolio-edit-btn").on('click', function() {
    location.href= "/mobile/musimode/musi-info/career.html"
  })
  
    
  var source = $(".timeline-movie").text().substring(20, 31)
  $(".timeline-movie").html("")
  $(".timeline-movie").append("<img id='timeline-picture' src='https://img.youtube.com/vi/" + source + "/0.jpg'>")
  
  var sourceMovie = $(".spec-movie").text().substring(20, 31)
  $(".spec-movie").html("")
  $(".spec-movie").append("<iframe width='791' height='876' src='https://www.youtube.com/embed/" + source + "?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>")
        
        
  })
}

