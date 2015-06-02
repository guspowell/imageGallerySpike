$(document).ready(function() {

	var sidebarWidth = 0;
	var leftOffset = sidebarWidth;
	var $container = $('#image-gallery');

	setColumnWidth();
	$container.isotope({
			itemSelector : '.grid-item',
			resizable : false,
			transformsEnabled : true
	});

	function getNumColumns(){
		var winWidth = $(window).width();
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
		var containerWidth = $(window).width();
		var postWidth = containerWidth/columns;
    // var largePostWidth = (containerWidth/columns)+200;
    // var smallPostWidth = (containerWidth/columns)-200;
		postWidth = Math.floor(postWidth);
    // largePostWidth = Math.floor(largePostWidth);
    // smallPostWidth = Math.floor(smallPostWidth);

    $(".grid-item").each(function(index){
			$(this).css({"width":postWidth+"px"});
		});

    // $(".grid-item.grid-item--width1").each(function(index){
    //   $(this).css({"width":smallPostWidth+"px"});
    // });
    //
    // $(".grid-item.grid-item--width2").each(function(index){
		// 	$(this).css({"width":largePostWidth+"px"});
		// });

	}

	function arrange(){
		setColumnWidth();
		$container.isotope('layout');
	}

	$(window).resize(function( event ) {
    arrange();
	});

	$('a.entry-link').hover( function() {
		$(this).find('.overlay').stop().css({opacity: 0,display: 'block'}).animate({ opacity: 1}, 150);
	}, function() {
		$(this).find('.overlay').stop().fadeOut(150);
	});


});
