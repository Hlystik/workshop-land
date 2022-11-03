$(function () {
  $('.slider__items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slider-arrow slider-arrowleft"><img src="images/prev.svg"></button>',
      nextArrow: '<button type="button" class="slider-arrow slider-arrowright"><img src="images/next.svg"></button>',
    });

    //script accordion
  if ($(window).width() <= '767') {
    $('.programm__box-accord').on('click', function (e) {
      e.preventDefault();
      $(this).next('.programm__box-accordeon').slideToggle('.programm__box');
      $(this).toggleClass('programm__box-accordeon_active , programm__box-accord_active');
    });
  }
});