$(document).ready( function() {
  $(".grid-item").click(function() {
    var position = $(this).position();
        var top = position['top'];
        var left = position['left'];
        $(this).css({top: top, left: left, position:'fixed'});
  });
});
