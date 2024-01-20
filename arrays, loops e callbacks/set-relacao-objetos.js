var myArray = ["value1", "value2", "value3"];

// Use o construtor regular de Set para transformar um array dentro de um Set
var mySet = new Set(myArray);

mySet.has("value1"); // retorna true

// Use o operador de propagação para transformar um Set em um Array.
console.log(uneval([...mySet])); // Irá mostrar-lhe exatamente o mesmo Array como myArray
