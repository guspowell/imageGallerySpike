$(document).ready( function() {


  carouselHeight();

  fadeOutImages();

  setArrowPosition();

});


function carouselHeight() {
  var height = $(".grid").height();
  $("#carousel, .carousel-inner").css("height", height);
  console.log(height);
  return height;
};

function setArrowPosition() {
  var height = carouselHeight();
  // console.log(height);
};

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
