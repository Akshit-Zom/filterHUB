$(document).ready(function() {
    var lastScrollTop = 0;
    var header = $('header');
  
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > lastScrollTop){
        // scroll down
        header.fadeOut();
      } else {
        // scroll up
        header.fadeIn(800);
      }
      lastScrollTop = scrollTop;
    });
  });
  