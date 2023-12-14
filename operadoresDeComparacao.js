// 2 iguais == para comparação sem tipo (Comparação implícita)

const numero = 5;
const texto = "5";

console.log(numero == texto);

// 3 iguais === para comparação com tipos (Comparação explícita)

console.log(numero === texto);
console.log(typeof numero);
console.log(typeof texto);

// Usar sempre os 3 iguais === como boas práticas converter de maneira explícita:
Number();
String();
