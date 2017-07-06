$(function(){
  $('.nav').mobilemenu({
    menuOpenIcon: '<span class="mobilemenu--open-icon mobilemenu-theme"><span class="slicknav_icon"><span class="slicknav_icon-bar slicknav_icon-bar--first"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></span>',
    onInit: function(menu, options){
      menu.find('ul').removeClass('nav nav-pills pull-right');
    }
  });
  
var menu = $.mobilemenu({
	  menuOpenIcon: $('.mobilemenu--open-icon'),
	  body: '<p>메뉴메뉴메뉴메뉴</p>'
	  
	});
});

