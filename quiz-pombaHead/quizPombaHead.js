// Abaixo temos tudo o que vai ser manipulado no código
let conteudoTexto = document.querySelector(".container__texto");
let botaoIniciar = document.querySelector(".botao--iniciar");
let entradaNome = document.querySelector(".input--nome");
let botaoEnviar = document.querySelector(".botao--enviar");
let botaoOk = document.querySelector(".botao--ok")
let entradaResposta = document.querySelector(".input--resposta");
let botaoResponder = document.querySelector(".botao--responder");
let avatar = document.querySelector("#avatar");
let carinha = document.querySelector("#carinha");
let reiniciar = document.querySelector(".botao--reiniciar");
let botaoGithub = document.querySelector(".botao--github")
//--------------------------------------------------------------- 

// Abaixo fiz 3 funções GLOBAIS para atender o código mais de uma vez
// 1 - esta função global é para esconder itens após clicar

function esconde(esconder) {
  esconder.style.display = "none";
}
//------------------------------------------

// 2 - esta função global é para mostrar os itens após clicar
function mostra(mostrar) {
  mostrar.style.display = "block";
}
//-----------------------------------------

// 3 - esta função global serve para trocar os textos
function trocaTexto(texto) {
  conteudoTexto.innerHTML = texto;
}
//----------------------------------------

// esta função, após clicar no botão iniciar esconde o botão iniciar, troca o texto, mostra o container de entrada do nome e botão enviar
function clicouIniciar() {
  trocaTexto(frases[0]);
  esconde(botaoIniciar);
  mostra(botaoEnviar);
  mostra(entradaNome);
}
//--------------------------------------

// Verificando se o nome foi inserido antes de usar esta função que esconde o input nome, botão enviar mostrando a segunda parte do quiz, trocando o texto e mostrando avatar e botao ok
let nomeUsuario;
function clicouEnviar() {
  nomeUsuario = entradaNome.value;
  if (nomeUsuario.trim() !== "") {// se nome de usuario não estiver "" ou seja vazio
    //trim() remove espaço em branco, desconsiderando o espaço que os celulares colocam automaticamente
    esconde(entradaNome);
    esconde(botaoEnviar);
    trocaTexto(`${nomeUsuario}, ${frases[1]}`);
    mostra(avatar);
    mostra(botaoOk);
  } else {
    alert("Por favor, digite seu nome antes de prosseguir.");
  }
}
//--------------------------------------
// Esta função é para o o botão ok, confirma que só poderá responder sim ou não, clicando em ok, esconde o botão após clicar, mostra o novo texto com a pergunta, mostra a próxima parte que são as entradas e botão de resposta da pergunta
function clicouOk() {
  trocaTexto(frases[2]);
  esconde(botaoOk);
  mostra(entradaResposta);
  mostra(botaoResponder);
}
//-------------------------------------

// esta função contém as respostas, serão utilizadas apenas se a entradaResposta atender a condição que eu escolhi das respostas SIM ou NÃO

let aprendeuMariana;
function clicouResponder() {
  aprendeuMariana = entradaResposta.value.toLowerCase();
  // toLowerCase() para transformar em minúscula a entrada de texto e ser igual a minha condição

  if (aprendeuMariana.trim() === "sim") {
    conteudoTexto.innerHTML = `Parabéns ${nomeUsuario}, que bom que você aprendeu! Agora faça mais exemplos simples para treinar.`;
    esconde(entradaResposta);
    esconde(botaoResponder);
    esconde(carinha);
    mostra(avatar);
    mostra(reiniciar);
    mostra(botaoGithub);
  } else if (aprendeuMariana.trim() === "não") {
    conteudoTexto.innerHTML = `Lamento ${nomeUsuario}, devido a ter cabeça de pomba, vai repetir mais 1000 vezes!`;
    esconde(avatar);
    esconde(entradaResposta);
    esconde(botaoResponder);
    mostra(carinha);
    mostra(reiniciar);
    mostra(botaoGithub);
  } else {
    trocaTexto(`${nomeUsuario}, ${frases[3]}`)
    esconde(avatar);
    mostra(carinha);
  }
}
//----------------------------------------

// este é um array(lista) com as frase que vou utilizar no quiz, cada frase tem uma posição começando do 0,1,2 e assim por diante
let frases = [
  "Pu favô, digite seu nome abaixo ⌨️",
  'a seguir terá uma pergunta onde você só poderá responder "sim ou não" ok?',
  "Aprendeu o básico sobre funções com os exemplos que te enviei?",
  'digite corretamente e apenas "sim ou não"!'
];
