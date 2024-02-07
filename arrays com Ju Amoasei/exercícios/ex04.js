const listaDeNumeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let numero = 0; numero < listaDeNumeros.length; numero++) {
  soma += listaDeNumeros[numero];
}

const media = soma / listaDeNumeros.length;

console.log("A média dos números é:", media);
