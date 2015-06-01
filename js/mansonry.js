// $(document).ready(function() {
//

//
//   $('.grid').isotope({
//     // set itemSelector so .grid-sizer is not used in layout
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     masonry: {
//       // use element for option
//       columnWidth: '.grid-sizer'
//     }
//   })
//
//   $('.item').masonry()
//
// });

$(document).ready( function() {

  var container = document.querySelector('.grid');
  var msnry = new Masonry( container, {
    // options...
    itemSelector: '.item',
    columnWidth: 100
  });

  $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
      columnWidth: 100
    }
  });

});
