const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(lista); //Imprime a lista completa de dados dos alunos e alunas


function qualAMedia() {
    let nomeAluno = prompt("Digite seu 1º nome: ");
    if (alunos.includes(nomeAluno)) {
        alert(`Olá ${nomeAluno}, você tem média ${medias[0]} no curso.`);
    } else {
        alert(`Olá ${nomeAluno}, seu nome não consta na lista de alunos deste curso.`);
    }
};

qualAMedia()