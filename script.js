$(document).ready(function() {
    $("nav ul.menu > li").hover(function() {
      $(this).find("ul.submenu").stop().slideToggle(300);
    });
  });
  