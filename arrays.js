var numbersArray = [5, 8, 12, 3, 7, 20, 15, 10, 6, 25];

function printNumbers(array) {
  console.log("Numbers in the array:");
  document.write("Numbers in the array: " + array.join(", ") + "<br>");
  
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printNumbers(numbersArray);

function addNumber(array, number) {
  array.push(number);
  console.log("Array with a new number:", array);
  document.write("Array with a new number: " + array.join(", ") + "<br>");
}

addNumber(numbersArray, 30);

function removeEvenNumbers(array) {
  const oddNumbers = array.filter(number => number % 2 !== 0);
  console.log("Array without even numbers:", oddNumbers);
  document.write("Array without even numbers: " + oddNumbers.join(", ") + "<br>");
  return oddNumbers;
}

numbersArray = removeEvenNumbers(numbersArray);

function getLargestNumber(array) {
  const largestNumber = Math.max(...array);
  console.log("Largest number:", largestNumber);
  document.write("Largest number: " + largestNumber + "<br>");
  return largestNumber;
}

getLargestNumber(numbersArray);

function getSmallestNumber(array) {
  const smallestNumber = Math.min(...array);
  console.log("Smallest number:", smallestNumber);
  document.write("Smallest number: " + smallestNumber + "<br>");
  return smallestNumber;
}

getSmallestNumber(numbersArray);

var text = "Hello World";

function convertToLowercase(text) {
  const lowercaseText = text.toLowerCase();
  console.log("Text in lowercase:", lowercaseText);
  document.write("Text in lowercase: " + lowercaseText + "<br>");
  return lowercaseText;
}

convertToLowercase(text);

function convertToUppercase(text) {
  const uppercaseText = text.toUpperCase();
  console.log("Text in uppercase:", uppercaseText);
  document.write("Text in uppercase: " + uppercaseText + "<br>");
  return uppercaseText;
}

convertToUppercase(text);

var names = ["john", "mary", "peter"];

function capitalizeFirstLetters(names) {
  const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
  console.log("Capitalized names:", capitalizedNames);
  document.write("Capitalized names: " + capitalizedNames.join(", ") + "<br>");
  return capitalizedNames;
}

capitalizeFirstLetters(names);