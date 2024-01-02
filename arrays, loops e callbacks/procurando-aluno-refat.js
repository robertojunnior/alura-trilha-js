const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaMatrizAlunosMedias = [alunos, medias]; // matriz, lista de duas dimensões

function exibeNomeNota(aluno) {
  // const listaAlunos = matrizAlunosMedia[0];
  // const listaMedia = matrizAlunosMedia[1];

  const [listaAlunos, listaMedias] = listaMatrizAlunosMedias;
  // esta const substitui a linha 7 e 8;

  const nomeAluno = listaAlunos.indexOf(aluno);
  const mediaAluno = listaMedias[nomeAluno];

  if (listaMatrizAlunosMedias[0].includes(aluno)) {
    console.log(`O nome do Aluno é ${aluno}, e sua média foi ${mediaAluno}.`);
  } else {
    console.log(
      `Aluno(a) de nome ${aluno}, não foi encontrado na lista de alunos.`
    );
  }
}
exibeNomeNota("João");
exibeNomeNota("Juliana");
exibeNomeNota(alunos[2]);

// para executar no navegador
alert("Olá, bem vindo a pesquisa de alunos!");
const pesquisaAluno = prompt("Qual o nome do aluno para pesquisa?");
exibeNomeNota(pesquisaAluno);

// listaMatrizAlunosMedia é uma MATRIZ, ou seja, uma lista de duas dimensões
// aluno é o parâmetro, nós que escolhemos e pode ser add por input ou no executar no final
// includes verifica se está na lista o aluno que vamos pesquisar
// indexOf verifica a posição do indice do que procuramos
// declaramos que a const mediaAluno pega a lista de medias e a média na posição do nome do aluno que indicarmos
// A const nomeAluno e mediaAluno, foram criadas dentro da função para que possamos reutilizar o código apenas dando novos nomes na chamada ou prompt;
// A entrada podemos utilizar um input ou prompt para isso, como fizemos na linha 25;
