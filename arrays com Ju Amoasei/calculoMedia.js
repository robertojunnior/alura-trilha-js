const notas = [10, 6.5, 8, 7.5];

notas.push(14);

const media = (notas[0] + notas[1] + notas[2] + notas[3] / notas.length)

console.log(notas);//adiciona o valor 14 no array e mostra
console.log(`A média dos valores do array é: ${media.toFixed(2)}`); //mostra a média na tela