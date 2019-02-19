$(document).ready(function(){
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".page-header").addClass("active");
    } else {
       $(".page-header").removeClass("active");
    }
  });
});
