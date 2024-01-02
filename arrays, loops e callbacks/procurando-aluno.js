const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// listaDeAlunosNotas é uma MATRIZ, ou seja, uma lista de duas dimensões
const listaDeAlunosNotas = [alunos, medias];

function exibeNomeNota(aluno) {
  // aluno é o parâmetro, nós que escolhemos e pode ser add por input ou no executar no final

  if (listaDeAlunosNotas[0].includes(aluno)) {
    // includes verifica se está na lista o aluno que vamos pesquisar

    const alunos = listaDeAlunosNotas[0]; // Declaramos  alunos novamente apenas dentro da função, não interfere no código externo
    const medias = listaDeAlunosNotas[1]; //  mesma anotação que acima

    const indice = alunos.indexOf(aluno); // declaramos a const indice para utilizar no código geral
    // indexOf verifica a posição do indice do que procuramos

    const mediaAluno = medias[indice];
    // declaramos que a const mediaAluno pega a lista de medias e a média na posição do aluno que indicarmos

    console.log(`O nome do Aluno é ${aluno}, e sua média foi ${mediaAluno}.`);
  } else {
    console.log(
      `Aluno(a) de nome ${aluno}, não foi encontrado na lista de alunos.`
    );
  }
}

alert("Olá, bem vindo a pesquisa de alunos!");
const pesquisaAluno = prompt("Qual o nome do aluno para pesquisa?");
exibeNomeNota(pesquisaAluno);

exibeNomeNota("João");
exibeNomeNota("Juliana");
exibeNomeNota(alunos[2]);

// A const alunos e media, foram criadas dentro da função para que possamos reutilizar o código apenas dando novos nomes na chamada;
// A entrada podemos utilizar um input ou prompt para isso, como faremos abaixo;

// vamos criar um prompt para inserir o nome do aluno para a busca pelo navegador
