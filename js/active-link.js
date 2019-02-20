jQuery(window).scroll(function(){
  var $sections = $('section');
	$sections.each(function(_i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
  	if( scroll > top && scroll < bottom){
      $('a.active-link').removeClass('active-link');
		  $('a[href="#'+id+'"]').addClass('active-link');
    }
  })
 });

$(".main-nav__list--desktop").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});
