// tipo de dado
// booleano

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // verificou valor e tipo
console.log(numero == numeroString); // verificou equivalência
console.log(numero + numeroString); // concatenou

// conversão explícita
// Number() -N maiúsculo => string()
console.log(numero + Number(numeroString));

const numeroString2 = Number("123");
console.log(numero + numeroString2);

// toString() => -N maiúsculo Number

console.log("O número é " + numeroString.toString() + ".");
console.log("O numeroString foi convertido para " + typeof numeroString + ".");
