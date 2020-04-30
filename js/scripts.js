$(function(){
  $('.search-btn').on('click', function(){
    $('#header-search-form.search-block').slideToggle();
  });
});

$( document ).ready(function( $ ) {
  $( '#news-slider' ).sliderPro({
    width: 800,
    height: 500,
    orientation: 'horizontal',
    loop: false,
    arrows: true,
    buttons: false,
    thumbnailsPosition: 'right',
    thumbnailPointer: true,
    thumbnailWidth: 400,
    thumbnailHeight: 97,
    breakpoints: {
      800: {
        thumbnailsPosition: 'right',
        thumbnailWidth: 550,
        thumbnailHeight: 100
      },
      500: {
        thumbnailsPosition: 'right',
        thumbnailWidth: 320,
        thumbnailHeight: 50
      }
    }
  });
});

$(document).ready(function(){
  $('.post-carousel').owlCarousel({
    loop: true,
    responsiveClass: 700,
    dots: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });
});