const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}
// Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); 
//realizamos um decremento (i--) ao invés de um incremento e a condição de execução é i >= 0. 
//Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.


const numeros2 = [1, 2, 3, 4, 5, 6];

for (let i = numeros2.length - 1; i >= 0; i -= 2) {
  console.log(numeros2[i]);
}

// Outra possibilidade é alterar a quantidade incrementada ou decrementada
// utilizando o mesmo código acima, mas alterando o decremento para i -= 2.


const numerosPares = [];

for (let i = 0; i <= 50; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

// Por fim, até agora utilizamos a estrutura for apenas para percorrer arrays, 
//mas ela pode ser utilizada para repetir qualquer instrução conforme a necessidade. 
//Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 50.