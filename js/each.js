$(document).ready(function(){

	var arr = new Array('jabuka', 'kruska', 'sljiva');

	$.each(arr, function(kljuc,vrednost){
	//	console.log(vrednost)
	});

	$('ul li').each(function(k, v){

		if($(this).text() == "home") {
			$(this).text("about");
		}
	});



	//$('<p>sadadas</p>').appendTo('body');

	$('<p>', {
		text: "Ovde ide neki tekst",
		style: "color: red;",
		class: "someclass",
		id: "neki"
	}).appendTo('body');

	$('body').append('<p style="color: red;" class="someclass" id="neki">Ovde ide neki tekst</p>');





	//	var poseban = $('<div>Juhu</div>');


//	$('body').append(poseban);
	console.log(poseban)



var tekst = $('#target').text();
var artekst = tekst.split(" ")

var novi = "";
$.each(artekst, function(k, v){

	novi = novi + "dog ";

})

$('#target').text(novi)

});
