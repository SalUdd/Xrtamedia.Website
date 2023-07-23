$(document).ready(function() {
  var timer;
  $("nav ul.menu > li").hover(function() {
    clearTimeout(timer);
    $(this).children("ul.submenu").stop(true, true).slideDown(300);
  }, function() {
    var that = $(this);
    timer = setTimeout(function() {
      that.children("ul.submenu").stop(true, true).slideUp(300);
    }, 150); // 0.15 second delay before the dropdown disappears
  });
});
