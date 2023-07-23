$(document).ready(function() {
  $("nav ul.menu > li, nav ul.submenu > li").hover(function() {
    $(this).children("ul.submenu").stop().slideToggle(300);
  });
});
