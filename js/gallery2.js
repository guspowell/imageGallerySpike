jQuery(document).ready(function() {

	var sidebarWidth = 0;
	var leftOffset = sidebarWidth;
	var $container = jQuery('#image-gallery');

	setColumnWidth();
	$container.isotope({
			itemSelector : '.grid-item',
			resizable : false,
			transformsEnabled : true
	});

	function getNumColumns(){
		var winWidth = jQuery(window).width();
		var column = 3;
		if (winWidth<380) column = 1;
		else if(winWidth >=380 && winWidth<1160)  column = 2;
		else if(winWidth>=1160 && winWidth<1640)  column = 3;
		else if(winWidth>=1640  && winWidth<2100) column = 4;
		else if(winWidth>=2100) column = 5;
		return column;
	}

	function setColumnWidth(){
		var columns = getNumColumns();
		var containerWidth = jQuery(window).width();
		var postWidth = containerWidth/columns;
		postWidth = Math.floor(postWidth) ;

    jQuery(".grid-item").each(function(index){
			jQuery(this).css({"width":postWidth+"px"});
		});

    // $("grid-item.width1").each(function(index){
    //   jQuery(this).css({"width":smallPostWidth+"px"});
    // });
    //
    // $("grid-item.width2").each(function(index){
		// 	jQuery(this).css({"width":largePostWidth+"px"});
		// });

	}

	function arrange(){
		setColumnWidth();
		$container.isotope('layout');
	}

	jQuery(window).resize(function( event ) {
    arrange();
	});

	jQuery('a.entry-link').hover( function() {
		jQuery(this).find('.overlay').stop().css({opacity: 0,display: 'block'}).animate({ opacity: 1}, 150);
	}, function() {
		jQuery(this).find('.overlay').stop().fadeOut(150);
	});


});


  /*******************/

$(document).ready(function() {

  setColumnWidth();
  $('.grid').isotope({
    itemSelector: '.grid-item',
		resizable : false,
		transformsEnabled : true
  });

  setCarouselHeight();

  fadeOutImages();

});


function getNumColumns(){
	var winWidth = jQuery(window).width();
	var column = 3;
	if (winWidth<380) column = 1;
	else if(winWidth >=380 && winWidth<1160)  column = 2;
	else if(winWidth>=1160 && winWidth<1640)  column = 3;
	else if(winWidth>=1640  && winWidth<2100) column = 4;
	else if(winWidth>=2100) column = 5;
	return column;
	}

function setColumnWidth(){
  var columns = getNumColumns();
  if (jQuery(window).width() < 768) leftOffset = 0;
  var containerWidth = $("#image-gallery").width();
  var postWidth = containerWidth/columns;
  postWidth = Math.floor(postWidth) ;
  jQuery(".grid-item").each(function(index){
    jQuery(this).css({"width":postWidth+"px"});
  });
}

function arrange(){
	setColumnWidth();
	$container.isotope('reLayout');
}

jQuery(window).on("debouncedresize", function( event ) {
	alert('resizing');
  arrange();
});



function setCarouselHeight() {
  var height = $(".grid").height();
  $("#carousel, .carousel-inner").css("height", height);
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
