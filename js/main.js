$(document).on('ready', function() {
    
$(".small").slick({
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<div class="sliderBtn prevBtn"></div>',
        nextArrow:'<div class="sliderBtn nextBtn"></div>',
      });
    /*
$(".regular").slick({
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<i class="fas fa-arrow-left sliderBtn prevBtn"></i>',
        nextArrow:'<i class="fas fa-arrow-right sliderBtn nextBtn"></i>',
      });
    */
    
});