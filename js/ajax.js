$(document).ready(function(){
	$('button').on('click', function(){

		$.ajax({
			type: "POST",
			 context: document.body,
			url: "data-ajax.html",
			complete: function(data){
				console.log(data.responseText);
			}


		});























	});

});