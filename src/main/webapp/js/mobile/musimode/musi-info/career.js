var spno = 0,
    replace = "",
    sourceMovie
var fiFilenames = "",
    fiMovienames = ""
  
count = 0;
try {
  spno = location.href.split('?')[1].split('=')[1]
} catch (err) {}


if (spno == 0) {
  $('.portfolio-container').append(Handlebars.compile($('#musician-add-portfolio-template').text()))
  
  $("#introduce-edit-btn").on('click', function() {
    $.post('/musician/addSpec.json', {
      'specDate': $("#spec-date").val(),
      'specDscp': $("#spec-desc").val(),
      'fiFilenames': fiFilenames,
      "fiMovienames" : fiMovienames
    }, function(result) {
      console.log(result)
    }, 'json')
  })
  
    $('#fi-photoupload').fileupload({
    url: '/musician/career.json',
    dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
    sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
    singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
    autoUpload: true,        // 파일을 추가할 때 자동 업로딩 설정.
    disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
      previewMaxWidth: 400,   // 미리보기 이미지 너비
      previewMaxHeight: 400,  // 미리보기 이미지 높이 
      previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
      submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
      }, 
      processalways: function(e, data) {
        var imagesDiv = $('.img-container');
        imagesDiv.append("<div class='profile-image" + count + " proimg'></div>")
        $(".profile-image" + count).attr('src', '')
        for (var i = 0; i < data.files.length; i++) {
          try {
            if (data.files[i].preview.toDataURL) {
              $(".profile-image" + count).css("background-image", 'url(' + data.files[i].preview.toDataURL() +')')
            }
          } catch (err) {}
        }
      },
      done: function (e, d) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
        var imlibsData = d.result;
        var file = imlibsData.data[0];
        $(".profile-image" + count).attr("data-path", file.filename)
        count++
        fiFilenames += "/image/profile/" + file.filename + ","
        
      }
    });  // file-upload
  
  
} else {
  
  $("#introduce-edit-btn").on('click', function() {
    $.post('/musician/updateSpec.json', {
      'spno': spno,
      'specDate': $("#spec-date").val(),
      'specDscp': $("#spec-desc").val(),
      'fiFilenames': fiFilenames,
      "fiMovienames" : fiMovienames
    }, function(result) {
      console.log(result)
    }, 'json')
  })
  
  Handlebars.registerHelper('isIndex', function(key, options) {
    if (key == "Y") {
      return options.fn(this);
    }
  }); // handelbars.helper
  
  $.getJSON('/musician/getSpec.json', 
      {"spno" : spno}, function(result) {
        console.log(result)
  var templateFn = Handlebars.compile($('#musician-info-portfolio-template').text())
  var generatedHTML = templateFn(result.data)
  var container = $('.portfolio-container')
  var html = container.html()
  container.html(html + generatedHTML)

  for(var i = 0; i < result.data.getSpec.list.length; i++) {
    if(result.data.getSpec.list[i].fileMap.key == "Y") {
      fiFilenames += result.data.getSpec.list[i].fileMap.value + ","
    }
  }
        
  for(var i = 0; i < result.data.getSpec.list.length; i++) {
    if(result.data.getSpec.list[i].fileMap.key == "N") {
      fiMovienames += result.data.getSpec.list[i].fileMap.value + ","
      sourceMovie = result.data.getSpec.list[i].fileMap.value.substring(17,28)
      $(".movie-container").append("<iframe width='791' height='876' data-value='"+ result.data.getSpec.list[i].fileMap.value + "' src='https://www.youtube.com/embed/" + sourceMovie + "?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>")
      $(".movie-container").append("<button type='button' class='movie-delete-btn' value='"+ result.data.getSpec.list[i].fileMap.value + "'>삭제</button>")
    }
  }
  
  $('#fi-photoupload').fileupload({
    url: '/musician/career.json',
    dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
    sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
    singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
    autoUpload: true,        // 파일을 추가할 때 자동 업로딩 설정.
    disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
      previewMaxWidth: 400,   // 미리보기 이미지 너비
      previewMaxHeight: 400,  // 미리보기 이미지 높이 
      previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
      submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
      }, 
      processalways: function(e, data) {
        var imagesDiv = $('.img-container');
        imagesDiv.append("<div class='profile-image" + count + " proimg'></div>")
        $(".profile-image" + count).attr('src', '')
        for (var i = 0; i < data.files.length; i++) {
          try {
            if (data.files[i].preview.toDataURL) {
              $(".profile-image" + count).css("background-image", 'url(' + data.files[i].preview.toDataURL() +')')
            }
          } catch (err) {}
        }
      },
      done: function (e, d) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
        var imlibsData = d.result;
        var file = imlibsData.data[0];
        $(".profile-image" + count).attr("data-path", file.filename)
        count++
        fiFilenames += "/image/profile/" + file.filename + ","
        
      }
    });  // file-upload
  
  })  // get json
  
} // if

$('body').on('click', ".movie-delete-btn", function() {
  $("iframe[data-value='"+ $(this).val() +"']").remove()
  var str = $(this).val() + ","
  fiMovienames = fiMovienames.replace(str, '')
  $(this).remove()
})

$('body').on('click', ".proimg", function() {
  $(this).remove();
  var str = $(this).attr('data-path') + ","
  fiFilenames = fiFilenames.replace(str, '')
})

$('body').on('click', "#movie-text-btn", function() {
  var findStr = "https://youtu.be/"
    if ($("#movie-text").val().indexOf(findStr) != -1) {
      fiMovienames += $("#movie-text").val() + ","
      $(".movie-container").append("<iframe width='791' height='876' data-value='"+ $("#movie-text").val() + "' src='https://www.youtube.com/embed/" + $("#movie-text").val().substring(17,28) + "?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>")
      $(".movie-container").append("<button type='button' class='movie-delete-btn' value='"+ $("#movie-text").val() + "'>삭제</button>")
      $("#movie-text").val('')
    } else {
    swal({
      title: "유튜브 주소를 \n\n" +
          "정확하게 입력하세요!",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#8069ef",
      confirmButtonText: "확인",
      customClass: "checkSwal"
    });
    return
  }
})

