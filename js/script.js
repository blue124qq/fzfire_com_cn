$(function($) {
  $('.goto-top').click(function(){
    jQuery('html,body').animate({
      scrollTop:0
    },1000);
    return false;
  });
});

$(window).scroll(function () {
  var header = $('#header');
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    header.removeClass('header--close').addClass('header--stick');
  } else {
    header.removeClass('header--stick').addClass('header--close');
  }
});

if ($('.sidebar').length > 0) {
  var sideMenu = '<ul class="nav">' + $('.sidebar>ul').html() + '</ul>';
  $('.main-menu .m3').append(sideMenu);
}

var logo = '<div class="logo">' + $('.logo').html() + '</div>';
var mainMenu = $('.main-menu').html();
var langMenu = '<ul class="lang_s">' + $('.top-lang .dropdown-menu').html() + '</ul>';

$('.offcanvas-right').append(logo).append(mainMenu).append(langMenu);
//$('.offcanvas-right .m3>.dropdown-menu').remove;

$('.offcanvas-right > ul a').removeAttr('data-toggle').removeClass('dropdown-toggle').addClass('sb-toggle-submenu');
$('.offcanvas-right .m3 ul').addClass('sb-submenu');
$('.offcanvas-right .m3 .nav > li > a').removeAttr("href");
$('.offcanvas-right > ul > li > ul.dropdown-menu').removeClass('dropdown-menu').addClass('sb-submenu');
//$('.offcanvas-right .m3 > a').removeAttr("href");

$(".offcanvas-right").hiraku({
  btn:"#offcanvas-btn-right",
  fixedHeader:"#header",
  direction:"right",
/*   breakpoint: 1023, */
  breakpoint: 1200,
 
});

$('.sb-toggle-submenu').off('click').on('click', function() {
  $submenu = $(this).parent().children('.sb-submenu');
  $(this).add($submenu).toggleClass('sb-submenu-active'); // Toggle active class.

        //remove other sb-submenu;
        $submenu2 = $('.sb-menu > li > ul.sb-submenu-active');
        $submenu2.slideUp(200);
        //remove other sb-submenu;

  if ($submenu.hasClass('sb-submenu-active')) {
    $submenu.slideDown(200);
  } else {
    $submenu.slideUp(200);
  }
});

$('.r_d>ul>li').on('click', function(){
  $(this).addClass('active').siblings('.active').removeClass('active');
});

/*語系對應*/
$(document).ready(function(){
  
  var $lang_root = '/';
  $.JTranslator({
      $root: $lang_root,
      $defaultOption: "en",
      $langSwitchNode: "a",
      $langVar: {
        tw: window.location.host+$lang_root+"tw/",
        cn: window.location.host+$lang_root+"cn/",
        jp: window.location.host+$lang_root+"jp/",
        en: window.location.host+$lang_root
        
      }
  })

});





// $.JTranslator({
//   $root: window.location.host+"/",  //根目錄上線後路徑要改
//   $defaultOption: "en",	
//   $langSwitchNode: "a",   //語言選單種類
//   $langVar: {
//       en: "/",
//       tw: "/tw/",
//       cn: "/cn/",
//       jp: "/jp/"
//     }
// }); 
// $customPage: {      //非命名規則的頁面導向
//   index:{
//	en:'index.html',
//    tw:'index-tw.html',
//    cn:'index-cn.html',
//	jp:'index-jp.html',
//   },
// }
//});


