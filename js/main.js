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
$(".slider-two")
.not(".slick-initialized")
.slick({
    autoplay: true,
    autplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider.two .prev",
    nextArrow: ".site-slider.two .next",
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000
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
  slidesToScroll: 3,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});