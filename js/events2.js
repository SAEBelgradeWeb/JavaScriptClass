(function(){
$(document).ready(function(){
	var $dt = $('dt');

/*	$dt.on('mouseenter', function(){
		$(this).next('dd').slideDown(200);
	}).on('mouseout', function(){
		$(this).next('dd').slideUp(150);
	});
*/

	$dt.on('click', function(){
/*		$(this).next('dd').siblings('dd').hide().end()
					      .slideDown(200);*/
		$(this).css({
			"color": "red",
			"font-size": '20px'
		}).siblings('dt').css({
			"color": "black",
			"font-size": '16px'
		});
		

		$(this).next('dd').slideDown(200)
						  .siblings('dd').slideUp(200);
		//$('dd').hide();
	});


	var $glavni = $('#slicice > div'),
		$unutrasnji = $glavni.children('div');
		

	$glavni.on('mouseenter', function(){
			$(this).children('div').fadeIn(150);
	});

	$unutrasnji.on('mouseleave', function(){
			$unutrasnji.fadeOut();
	});
});
})();

