$(document).ready( function() {

  $('.grid').isotope({
    itemSelector: '.grid-item',
		resizable : false,
		transformsEnabled : true
  });

  // setArrowPosition();

  setCarouselHeight();

  fadeOutImages();

});


function setCarouselHeight() {
  var height = $(".grid").height();
  console.log($("#carousel.container"));
  $("#carousel, .carousel-inner").css("height", height);
};

// function setArrowPosition() {
//   var height = $(".caoursel-").height();
//   console.log(height);
// };

function fadeOutImages() {
  $(".grid-item").click(function() {
    $(".grid").css({background:"transparent"});
    var selected = this;
    $(function() {
      $('.grid div').sort(function(){
        return Math.random()*10 > 5 ? 1 : -1;
      }).not(selected).each(function(i) {
        $(this).delay((i++) * 100).fadeOut(200);
      });
    });
  });
};
