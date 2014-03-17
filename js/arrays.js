var people = new Array("Nazim" , 45, true);
//var people = [];
var cars = new Array('Mazda', 'Fiat', "Mercedes", people);
//var string = "SAE Institute";
//alert(people[2]);
console.log( people );

//adds the elements on the end
people.push("Teo", "Nikola");

console.log(people);

//removes the element from the end
people.pop();

console.log(people);

// adds the element to the beggining 
people.unshift("Dino", "Luka");

console.log(people);

// removes the element from the beggining
people.shift();
console.log(people);

people.splice(2, 2, "Dino");
console.log(people);

people.splice(2, 0, "Nikola");
console.log(people);

people.splice(1, 0, "Dusan", "Nemanja");
console.log(people);

//people.splice(-2, 2);
console.log(people);

people[1] = "Milan";
console.log(people);

//people[10] = "Darko";
console.log(people[10]);

console.log(10%2);

var a = 10;
a = a + 1; 
console.log(a);
//same
a=+3;
console.log(a);


for(var no=1; no <= 10; no++) {

	console.log("Hello from the loop  - " + no);

}


//WHILE
var i = 0;
while(i <10){
	console.log('Hello');
	i++;
}


for(var i =0; i < people.length; i++) {

	console.log( people[i] )
}