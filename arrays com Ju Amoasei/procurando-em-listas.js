const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    // condição:  se existir o nome do aluno na lista
    const indice = lista[0].indexOf(aluno);
    const mediaAluno = lista[1][indice];
    console.log(`${aluno} tem a média ${mediaAluno}.`);
  } else {
    console.log(`${aluno}, seu nome não está na lista.`);
  }
}
exibeNomeENota("Juliana");
exibeNomeENota("Ricardo");

// let nome = "Jose";
// let sobrenome = "Silva";

// function qualSeuNome() {
//   return `Seu nome é ${nome} ${sobrenome}.`;
// }

// console.log(qualSeuNome());
