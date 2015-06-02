$(document).ready( function() {

  $('.grid').isotope({
  	layoutMode: 'fitRows',
    itemSelector: '.grid-item'
  });

  // fade out effect

  $(".grid-item").click(function() {

    $(function() {
      $('.grid div').sort(function(){
        return Math.random()*10 > 5 ? 1 : -1;
      }).each(function(i) {
        $(this).delay((i++) * 100).fadeOut(200);
      });
    });

  });


});
