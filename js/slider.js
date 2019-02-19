var slideNow = 1;
var slideCount = $('.slider__area').children('li').length;
var slideProductCount = $('.slider__area').children('.product__item').length;
var slideReviewCount = $('.slider__area').children('.review__item').length;
var slideServicesCount = $('.slider__area').children('.card').length;
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

  $('.product__pointer--right').click(function() {
      nextProductSlide();
  });

  $('.product__pointer--left').click(function() {
      prevProductSlide();
  });

  $('.review__right').click(function() {
      nextReviewSlide();
  });

  $('.review__left').click(function() {
      prevReviewSlide();
  });

  $('.services__right').click(function() {
      nextServicesSlide();
  });

  $('.services__left').click(function() {
      prevServicesSlide();
  });
});

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('.slider__area--home').css('transform', 'translate(0, 0)');
      slideNow = 1;
  } else {
    translateWidth = -$('.slider__inner--home').width() * (slideNow);
    $('.slider__area--home').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$('.slider__inner--home').width() * (slideCount - 1);
      $('.slider__area--home').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
  } else {
      translateWidth = -$('.slider__inner--home').width() * (slideNow - 2);
      $('.slider__area--home').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
  }
}

function nextProductSlide() {
  if (slideNow == slideProductCount || slideNow <= 0 || slideNow > slideProductCount) {
      $('.slider__area--product').css('transform', 'translate(0, 0)');
      slideNow = 1;
  } else {
    translateWidth = -$('.slider__inner--product').width() * (slideNow);
    $('.slider__area--product').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevProductSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideProductCount) {
        translateWidth = -$('.slider__inner--product').width() * (slideProductCount - 1);
        $('.slider__area--product').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideProductCount;
    } else {
        translateWidth = -$('.slider__inner--product').width() * (slideNow - 2);
        $('.slider__area--product').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

function nextReviewSlide() {
  if (slideNow == slideReviewCount || slideNow <= 0 || slideNow > slideReviewCount) {
      $('.slider__area--review').css('transform', 'translate(0, 0)');
      slideNow = 1;
  } else {
    translateWidth = -$('.slider__inner--review').width() * (slideNow);
    $('.slider__area--review').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevReviewSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideReviewCount) {
        translateWidth = -$('.slider__inner--review').width() * (slideReviewCount - 1);
        $('.slider__area--review').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideReviewCount;
    } else {
        translateWidth = -$('.slider__inner--review').width() * (slideNow - 2);
        $('.slider__area--review').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

function nextServicesSlide() {
  if (slideNow == slideServicesCount || slideNow <= 0 || slideNow > slideServicesCount) {
      $('.slider__area--services').css('transform', 'translate(0, 0)');
      slideNow = 1;
  } else {
    translateWidth = -$('.slider__inner--services').width() * (slideNow);
    $('.slider__area--services').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}

function prevServicesSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideServicesCount) {
        translateWidth = -$('.slider__inner--services').width() * (slideServicesCount - 1);
        $('.slider__area--services').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideServicesCount;
    } else {
        translateWidth = -$('.slider__inner--services').width() * (slideNow - 2);
        $('.slider__area--services').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
