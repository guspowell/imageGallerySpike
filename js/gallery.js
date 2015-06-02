$(document).ready( function() {


  carouselHeight();

  fadeOutImages();

  // loadCarouselImages();

  setArrowPosition();



});

function loadCarouselImages() {

  var imagesJson = {
    "generation entrepreneur" : ["image1.png","image2.png"]
  }

  var index = 0;


};

$(".carousel-inner .item")
function carouselHeight() {
  var height = $("#image-gallery").height();
  $("#carousel, .carousel-inner").css("height", height);
  return height;
};

function setArrowPosition() {
  var height = carouselHeight();
  var arrowHeight = 100;
  var padding = (height - arrowHeight)/2;
  $(".carousel-control").css("padding-top", padding);
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
