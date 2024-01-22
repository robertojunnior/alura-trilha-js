const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 9, 8, 7];

const lista = [alunos, medias];

console.log(`Olá ${lista[0][0]}, você tem média ${lista[1][1]} no curso.`); //Imprime a lista completa de dados dos alunos e alunas

// function qualAMedia() {
//     let nomeAluno = prompt("Digite seu 1º nome: ");
//     if (alunos.includes(nomeAluno)) {
//         alert(`Olá ${nomeAluno}, você tem média ${matricula} no curso.`);
//     } else {
//         alert(`Olá ${nomeAluno}, seu nome não consta na lista de alunos deste curso.`);
//     }
// };
// qualAMedia()