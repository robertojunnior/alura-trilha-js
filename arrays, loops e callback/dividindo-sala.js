const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];
// SLICE retorna os primeiros 10 elementos do array 'alunos', lembrando que ele vai do índice 0 até 0 10º ou seja, até o índice 9 "André";
const sala1 = alunos.slice(0, alunos.length / 2);
console.log(` A lista de alunos da Sala 1 é: ${sala1}.`);

// se não colocarmos dois parâmetros no slice, ele segue até o final da lista
const sala2 = alunos.slice(alunos.length / 2);
console.log(` A lista de alunos da Sala 2 é: ${sala2}.`);
