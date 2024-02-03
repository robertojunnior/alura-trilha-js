const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    // apresentando a nova const [alunos, media]
    // não há necessidade de indicar lista[0] pois sabemos que a posição do vetor é 0.
    const [alunos, medias] = lista;

    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(`${aluno} tem a média ${mediaAluno}.`);
  } else {
    console.log(`${aluno}, seu nome não está na lista.`);
  }
}
exibeNomeENota("Juliana");
exibeNomeENota("Ricardo");
