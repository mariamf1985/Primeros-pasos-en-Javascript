function greeting() {
    let name = "María";
    return `Hola ${name}.`;
}

console.log(greeting());
document.write(greeting() + "<br>" + "<br>");

function add() {
    let number1 = 20;
    let number2 = 15;
    return (number1 + number2)
}
console.log(add());
document.write(add() + "<br>" + "<br>");


function parity(number) {
    if (number % 2 === 0) {
        return number + " is an even number";
    } else {
        return number + " is an odd number"

    }
}

console.log (parity(5));
document.write (parity(5) + "<br>");
console.log (parity(6));
document.write (parity(6) + "<br>");