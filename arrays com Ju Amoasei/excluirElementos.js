const notas = [10, 3, 2, 1, 5];

notas.pop(); // remove o último item da lista

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));

