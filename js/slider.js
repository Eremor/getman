var slideNow = 1;
var slideCount = 3 //number of slides
var translateWidth = 0;
var slideInterval = 10000;

$(document).ready(function () {
  setInterval(nextSlide, slideInterval);

  $('.slider__arrow--right').click(function() {
      nextSlide();
  });

  $('.slider__arrow--left').click(function() {
      prevSlide();
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

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.slider__inner').width() * (slideCount - 1);
        $('.slider__area').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.slider__inner').width() * (slideNow - 2);
        $('.slider__area').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
