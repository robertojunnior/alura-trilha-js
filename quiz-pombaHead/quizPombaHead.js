let conteudoTexto = document.querySelector(".container__texto");
let botaoCliqueAqui = document.querySelector(".botao_cliqueAqui");
let entradaNome = document.getElementById("input_nome");
let botaoEnviar = document.querySelector(".botao--enviar");
let entradaResposta = document.getElementById("input_resposta");
let botaoResponder = document.querySelector(".botao--responder");
let avatarPessoa = document.querySelector(".avatar__pessoa");
let carinha = document.querySelector(".emoji__carinha");
let reiniciar = document.querySelector(".reiniciar__quiz");

// Abaixo farei 3 funções GLOBAIS para atender o código mais de uma vez
// 1 - esta função é para esconder as coisas após clicar
function esconde(esconder) {
  esconder.style.display = "none";
}

// 2 - esta função é para mostrar as coisas após clicar
function mostra(mostrar) {
  mostrar.style.display = "block";
}
//-----------------------------------------

// 3 - esta função global serve para trocar os textos
function trocaTexto(texto) {
  conteudoTexto.innerHTML = texto;
}
//----------------------------------------

// esta função esconde o botão clique aqui, troca o texto e mostra o container de entrada do nome e botão enviar
function clicouNoBotaoCliqueAqui() {
  trocaTexto(frases[0]);
  esconde(botaoCliqueAqui);
  esconde(avatarPessoa);
  mostra(botaoEnviar);
  mostra(entradaNome);
}

//--------------------------------------

// Verificando se o nome foi inserido antes de usar esta função que esconde o input nome, botão enviar e mostra a segunda parte do quiz
let nomeUsuario;
function clicouEnviar() {
  nomeUsuario = entradaNome.value;

  if (nomeUsuario.trim() !== "") {
    //trim() remove espaço em branco
    esconde(entradaNome);
    esconde(botaoEnviar);
    trocaTexto(frases[1]);
    mostra(entradaResposta);
    mostra(botaoResponder);
    conteudoTexto.innerHTML = `${nomeUsuario.toUpperCase()}, ${frases[1]}`;
    // toUpperCase() para transformar e maiúscula a entrada de texto
  } else {
    alert("Por favor, digite seu nome antes de prosseguir.");
  }
}
//--------------------------------------

// esta função contém as respostas, serão utilizadas apenas se a entradaResposta atender a condição abaixo

let aprendeuMariana;
function clicouResponder() {
  aprendeuMariana = entradaResposta.value.toLowerCase();
  // toLowerCase() para transformar e maiúscula a entrada de texto
  mostra(avatarPessoa);
  if (aprendeuMariana.trim() === "sim") {
    conteudoTexto.innerHTML = `Parabéns ${nomeUsuario}, que bom que você aprendeu! Faça mais exemplos simples para treinar.`;
    esconde(entradaResposta);
    esconde(botaoResponder);
    esconde(carinha);
    mostra(reiniciar);
    mostra(botaoGithub);
  } else if (aprendeuMariana.trim() === "não") {
    conteudoTexto.innerHTML = `Lamento ${nomeUsuario}, devido a ter cabeça de pomba, vai repetir mais 1000 vezes!`;
    esconde(avatarPessoa);
    esconde(entradaResposta);
    esconde(botaoResponder);
    mostra(carinha);
    mostra(reiniciar);
    mostra(botaoGithub);
  } else {
    conteudoTexto.innerHTML =
      'Por favor, digite apenas "sim ou "não! Sabe ler não pow...';
    esconde(avatarPessoa);
    mostra(carinha);
  }
}
//----------------------------------------

// este é um array(lista) com as frase que vou utilizar no quiz
let frases = [
  "Primeiro, digite seu nome abaixo: 👩🏻 🕊️",
  'responda "sim" ou "não"! Aprendeu o básico sobre funções com estes exemplos que te enviei? Se escrever outra coisa vai tomar cascudo...',
];
