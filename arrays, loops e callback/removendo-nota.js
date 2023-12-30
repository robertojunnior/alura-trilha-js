// removendo ultimo item do array (POP)

const notas = [10, 6, 8, 5.5, 10];
notas.pop();
// Ao executar esse comando POP, o último elemento será removido do vetor/array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas);
console.log(`A média das notas tiradas atingiu ${media.toFixed(2)} pontos.`);
