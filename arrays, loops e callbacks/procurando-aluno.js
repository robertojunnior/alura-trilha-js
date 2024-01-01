const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// listaDeAlunosNotas é uma MATRIZ, ou seja, duas listas
const listaDeAlunosNotas = [alunos, medias];

function exibeNomeNota(aluno) {
  // aluno é o parâmetro, pode ser por input ou add no executar no final
  if (listaDeAlunosNotas[0].includes(aluno)) {
    // includes verifica se está na lista
    // se na lista matriz posição 0(alunos), contiver o aluno(que vamos sugerir no executar)

    const indice = listaDeAlunosNotas[0].indexOf(aluno); // indexOf verifica a posição do indice do que procuramos
    // declaramos a const indice para utilizar no código geral

    const mediaAluno = listaDeAlunosNotas[1][indice];
    // declaramos que a const mediaAluno pega a lista de medias e a média na posição do aluno que indicarmos

    // as duas const foram criadas para que possamos reutilizar o código apenas dando novos nomes na chamada, mas poderíamos utilizar um input ou prompt para isso.

    console.log(`O nome do Aluno é ${aluno}, e sua média foi ${mediaAluno}.`);
  } else {
    console.log(
      `Aluno(a) de nome ${aluno}, não foi encontrado na lista de alunos.`
    );
  }
}
// vamos criar um prompt para inserir o nome do aluno para a busca pelo navegador
alert("Olá, bem vindo a pesquisa de alunos!");
const pesquisaAluno = prompt("Qual o nome do aluno para pesquisa?");
exibeNomeNota(pesquisaAluno);

exibeNomeNota("João");
exibeNomeNota("Juliana");
exibeNomeNota(alunos[2]);
