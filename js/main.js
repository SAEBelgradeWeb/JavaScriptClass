/*function kadSeUcita() {
	//here we write code
	alert("prvi");
}

*/

function init() {
	//setInterval("tajmer()", 3000);
	//setInterval('console.log("desilo se")', 300);
	//setInterval('pomeri()', 10);
}


function over() {
	document.getElementById('div').style.backgroundColor = "red";

}

function out(){
	document.getElementById('div').style.backgroundColor = "blue";
}

function uFokusu(){
	document.getElementById('polje').style.backgroundColor = "gray";
}

function uBluru(){
	document.getElementById('polje').style.backgroundColor = "white";
}

function tajmer() {
	alert('boom');
}

function pomeri(){
	var left = document.getElementById('div').style.left;
	left = parseInt(left);
	left = left + 4;
	document.getElementById('div').style.left = left + "px";

	var top = document.getElementById('div').style.top;
	top = parseInt(top);
	top = top + 1;
	document.getElementById('div').style.top = top + "px";
}

function begaj(){
	var left = document.getElementById('div').style.left;
	left = parseInt(left);
	left = left + 100;
	document.getElementById('div').style.left = left + "px";

}

function koordinate(){
	var w, h;

	w = window.innerWidth;
	h = window.innerHeight;
	document.getElementById('div').innerHTML = 
	"<p>Sirina: " + w + "</p>" +
	"<p>Visina: " + h + "</p>";
}