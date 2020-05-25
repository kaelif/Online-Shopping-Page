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