const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosNotas = [alunos, medias];

function exibeNomeNota(aluno) {
  if (listaDeAlunosNotas[0].includes(aluno)) {
    console.log(
      `O nome do Aluno é ${aluno}, e está cadastrado na lista de alunos.`
    );
  } else {
    console.log(
      `Aluno(a) de nome ${aluno}, não foi encontrado na lista de alunos.`
    );
  }
}
exibeNomeNota("Maria");
