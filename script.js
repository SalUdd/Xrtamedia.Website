$(document).ready(function() {
  var timer;
  $("nav ul.menu > li > ul.submenu").hide(); // Only hide the top-level submenu on page load
  $("nav ul.menu > li").hover(function() {
    clearTimeout(timer);
    $(this).children("ul.submenu").stop(true, true).slideDown(300);
  }, function() {
    var that = $(this);
    timer = setTimeout(function() {
      that.children("ul.submenu").stop(true, true).slideUp(300);
    }, 100); // 0.15 second delay before the dropdown disappears
  });
});


window.onload = function() {
  var accordions = document.getElementsByClassName("accordion-header");

  for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};
