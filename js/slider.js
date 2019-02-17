var slideNow = 1;
var slideCount = $('.slider__area').children().length);
var translateWidth = 0;
var slideInterval = 2000;

$(document).ready(function () {
    setInterval(nextSlide, slideInterval);

    $('.slider__arrow--right').click(function() {
        nextSlide();
    });
});

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('.slider__area').css('transform', 'translate(0, 0)');
      slideNow = 1;
  } else {
    translateWidth = -$('.slider__inner').width() * (slideNow);
    $('.slider__area').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}
