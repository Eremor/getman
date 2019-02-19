$(document).ready(function(){
  $('body').on('click', '.main-nav__descktop .main-nav__item',
  function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
    event.preventDefault();
  });

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".page-header").addClass("active");
    } else {
       $(".page-header").removeClass("active");
    }
});
});
