function moveIt(){
	var left = document.getElementById('box').style.left;
	//console.log(left);

	left = parseInt(left) + 7;

	var ww = window.innerWidth;
	var finalPos = ww - 700;

	if (left >= finalPos) {
		clearInterval(move);
	} else {
		document.getElementById('box').style.left = left + "px";
	}
}

/*function stop(){
	clearInterval(move);
}*/

var move = setInterval("moveIt()", 10);
