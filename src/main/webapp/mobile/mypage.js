'use strict'
  $('#profile-img, #ccc').on('click', function() {
    $('#profile-toggle').toggle("slide", {
      direction: "down"
    }, 300);
    $('#profile-backscreen').css('display', 'block');
    // container.css('position', '').css('overflow', '');
  })

  $('#profile-backscreen, #cancel').on('click', function() {
    $('#profile-toggle').toggle("slide", {
      direction: "down"
    }, 300);
    $('#profile-backscreen').css('display', 'none');
    // container.css('position', '').css('overflow', '');
  })

  $('#cp').on('click', function() {
    $('#cp-backscreen').css('display', 'block');
    $('#change-password').css('display', 'block')
  })
  $('#cp-backscreen, #cp-cancel').on('click', function() {
    $('#change-password').css('display','none')
    $('#cp-backscreen').css('display', 'none');
  })
  var a= $('#pwd01'),
      b= $('#pwd02')
  $('#cp-change').on('click',function() {
    if(a.val() != b.val())
    alert('비밀번호가 맞지 않읍니다.')
  })
