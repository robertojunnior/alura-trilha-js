const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// primeira expressão: executada apenas uma vez ue é a atribuição
// segunda expressão: executada enquanto  o resultado da primeira expressão for verdadeiro (true)
// terceira expressão: executa após a segunda e só será executada se a segunda for verdadeira também

for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
}

let contador = 0; // variável de controle do loop while
while (contador < notas.length) {
  // enquanto contador for menor que comprimento do array

  console.log(`Nota ${contador + 1}: ${notas[contador]}`); // imprima
  contador++; // depois faça novamente até o contador ser do tamanho do array
}
