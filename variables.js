let numbers = "<strong>NUMBERS</strong>";

const pi = 3.1416;
let number1 = 25;
let number2 = 10;

document.write(numbers + "<br>");
console.log(pi);
document.write(pi + "<br>");
console.log(number1);
document.write(number1 + "<br>");
console.log(number2);
document.write(number2 + "<br>" + "<br>");


let strings = "<strong>STRINGS</strong>";

let name = "María";
let surname = "Méndez";
let pet = "cat";

document.write(strings+ "<br>");
console.log(name);
document.write(name + "<br>");
console.log(surname);
document.write(surname + "<br>");
console.log(pet);
document.write(pet + "<br>" + "<br>");


let arrays = "<strong>ARRAYS</strong>";

let vegetables = ["onion", "carrot", "lettuce"];
let fruits = ["apple", "strawberry", "banana"];

document.write(arrays + "<br>");
console.log(vegetables);
document.write(vegetables + "<br>");
console.log(fruits);
document.write(fruits + "<br>" + "<br>");


let booleans = "<strong>BOOLEANS</strong>";

var esVerdadero = true;
var esFalso = false;

document.write(booleans + "<br>");
console.log(esVerdadero);
document.write(esVerdadero + "<br>");
console.log(esFalso);
document.write(esFalso + "<br>" + "<br>");


let addition = number1 + number2;
console.log(addition);
document.write(addition + "<br>");

let substraction = number1 - number2;
console.log(substraction);
document.write(substraction + "<br>");

let multiplication = number1 * number2;
console.log(multiplication);
document.write(multiplication + "<br>");

let division = number1 / number2;
console.log(division);
document.write(division + "<br>" + "<br>");

let sentence = `My name is ${name} ${surname} and my pet is a ${pet}.`

console.log(sentence);
document.write(sentence);