/** First Slider  */
$(".single-item")
.not(".slick-initialized")
.slick({
    autoplay: true,
    autplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider slider-btn .prev .slick-prev",
    nextArrow: ".site-slider slider-btn .next .slick-next"
});

/** Second Slider **/
$(".single-item")
.not(".slick-initialized")
.slick({
    autoplay: true,
    autplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider slider-btn .prev .slick-prev",
    nextArrow: ".site-slider slider-btn .next .slick-next"
});

/** My Slider **/
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });