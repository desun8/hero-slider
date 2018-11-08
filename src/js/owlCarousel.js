import 'owl.carousel';
import $ from 'jquery';

$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    // autoplay: true,
  });

  $('.owl-next').click(() => {
    $('.owl-carousel').trigger('next.owl.carousel');
  });

  $('.owl-prev').click(() => {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });
});