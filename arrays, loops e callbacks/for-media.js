const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let indice = 0; indice < notas.length; indice++) {
  somaDasNotas = somaDasNotas + notas[indice];
  //   somaDasNotas += notas[indice];
}
let mediaNotas = somaDasNotas / notas.length;
console.log(`A soma das notas é ${somaDasNotas} e a sua média é ${mediaNotas}! `);


// Explicando o código: somaDasNotas += notas[indice] em mais detalhes.

// Esta linha é uma forma abreviada de escrever a operação de adição e atribuição. Ela é equivalente a:
// somaDasNotas = somaDasNotas + notas[indice];
// Vamos quebrar isso em partes:

// somaDasNotas é a variável que está acumulando a soma dos valores das notas.
// += é um operador de atribuição composta que adiciona o valor à direita ao valor à esquerda e atribui o resultado à variável à esquerda.
// Portanto, somaDasNotas += notas[indice] significa que você está adicionando o valor do elemento atual dom indice no array notas à variável somaDasNotas. Isso é feito para cada elemento no array durante o loop for.

// Vamos usar um exemplo para ilustrar o processo. Suponha que notas seja [10, 6.5, 8, 7.5]. O loop for fará o seguinte:

// Iteração 1: somaDasNotas = 0 + 10 (notas[0])
// Iteração 2: somaDasNotas = 10 + 6.5 (notas[1])
// Iteração 3: somaDasNotas = 16.5 + 8 (notas[2])
// Iteração 4: somaDasNotas = 24.5 + 7.5 (notas[3])
// No final, somaDasNotas terá o valor total da soma das notas, que é 32. Portanto, a linha somaDasNotas += notas[indice] é uma maneira concisa de acumular a soma dos valores em um array.

const diasUber = [160, 150, 200, 140, 245];

let ganhoTotal = 0;

for (let valores = 0; valores < diasUber.length; valores++) {
  ganhoTotal = ganhoTotal + diasUber[valores];
  // ganhoTotal += diasUber[valores]; forma abreviada
}
let media = ganhoTotal / diasUber.length;
console.log(`O total do seu ganho foi R$ ${ganhoTotal.toFixed(2)}, e a média diária foi de R$ ${media.toFixed(2)}!`);
