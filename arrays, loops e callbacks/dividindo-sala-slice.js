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
// SLICE retorna os primeiros 10 elementos do array 'alunos', lembrando que ele vai do índice 0 até o 10º ou seja, até o índice 9 "André", passando os parâmetros slice(0, 10)
const sala1 = alunos.slice(0, alunos.length / 2);
console.log(` A lista de alunos da Sala 1 é: ${sala1}.`);

// se não colocarmos dois parâmetros no slice, ele segue da metade até o final da lista
const sala2 = alunos.slice(alunos.length / 2);
console.log(` A lista de alunos da Sala 2 é: ${sala2}.`);

// outro exemplo livre
console.log(alunos.slice(3, 8)); // a contagem sempre para no índice anterior
