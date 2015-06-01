$(document).ready( function() {

  $('.grid').isotope({
  	layoutMode: 'fitRows',
    itemSelector: '.grid-item'
  });

  // fade out effect

  $(".grid-item").click(function() {
    $(".grid div").not(this).fadeOut('fast');
    $(".grid").css({background:"transparent"});
  });

});

// function showCarousel() {
//   var position = $(".grid").position();
//   var top = position['top'];
//   var left = position['left'];
//   $("#carousel.container").css({display:'inline', top: top, left: left, position:'fixed'});
// };
