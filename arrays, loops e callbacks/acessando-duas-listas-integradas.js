const alunos = ["João", "Juliana", "Ana", "Caio"];
const notas = [10, 8, 7.5, 9];

const listaDeAlunosNotas = [alunos, notas];
console.log(listaDeAlunosNotas); //Imprime a lista de alunos e suas respectivas notas
// Output: [ [ 'João', 'Juliana', 'Ana', 'Caio' ], [ 10, 8, 7.5, 9 ] ]

// Imprimir um aluno e sua nota
console.log(
  `A aluna que está na 1ª posição da lista de alunos é a "${listaDeAlunosNotas[0][1]}", e sua nota é "${listaDeAlunosNotas[1][1]}".`
);
