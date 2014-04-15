$(document).ready(function(){
/*	$('#container').css({
		'background-color' : 'green',
		'border' : '3px solid black'
	});
*/



/*$('#container').animate({
	width: '+=100',

}, 1000, 'linear', function(){


});*/

$('#container').animate({
	width: '1000',
	opacity: 0

}, {
	duration: 1000,
	complete: function(){
		
	},
	easing: 'linear',
	queue: false,
	step: function(){
		console.log( $('#container').css('width') );
	}

})

/*$('#container').animate({
	height: '1000',

}, {
	duration: 1000,
	complete: function(){
	
	},
	easing: 'linear',
	queue: false

})*/


/*
	$('#container').animate({
		height: '1000',

	}, 1000, 'linear');
*/

// GET 
	//var col = $('#container').css('width');

	//alert(col)

// SET
	//$('#container').css('background-color', 'green');	
});


