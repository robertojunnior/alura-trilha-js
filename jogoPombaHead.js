let botaoCliqueAqui = document.querySelector(".botao_cliqueAqui");
let conteudoTexto = document.querySelector(".container__texto");
let entradaNome = document.querySelector("#input_nome");
let botaoEnviar = document.querySelector(".botao--enviar");
let entradaResposta = document.querySelector("#input_resposta");
let botaoResponder = document.querySelector(".botao--responder");

// este é um array(lista) com as frase que vou utilizar no quiz
let frases = [
  "Primeiro, digite seu nome abaixo: 👩🏻 🕊️", 
  'Agora responda "sim", ou "não"! \nAprendeu o básico sobre funções com este exercício? Se escrever outra coisa vai tomar cascudo...'
];

// esta função é para esconder as coisas após clicar
function esconde(esconder) {
  esconder.style.display = "none";
}

// esta função é para mostrar as coisas após clicar
function mostra(mostrar){
  mostrar.style.display = "block";
}
//-----------------------------------------

// esta função serve para trocar os textos
function trocaTexto(texto) {
  conteudoTexto.innerHTML = texto
}
//----------------------------------------

// esta função esconde o botão clique aqui, troca o texto e mostra o container de entrada do nome e botão enviar
function clicouNoBotaoCliqueAqui() {
  trocaTexto(frases[0]);
  esconde(botaoCliqueAqui);
  mostra(entradaNome);
  mostra(botaoEnviar);
}

//--------------------------------------

// adicionando evento de clique no botão
let nomeUsuario;
function clicouEnviar() {
  let nomeUsuario = entradaNome.value;

  // Verifique se o nome foi inserido antes de usar
  if (nomeUsuario.trim() !== "") {
    esconde(entradaNome);
    esconde(botaoEnviar)
    trocaTexto(frases[1]);
    mostra(entradaResposta);
    mostra(botaoResponder);
  } else {
    alert("Por favor, digite seu nome antes de prosseguir.");
  }
}
//--------------------------------------

// esta função contém as respostas, serão utilizadas apenas se a entradaResposta atender a condição abaixo
let aprendeuMariana = entradaResposta.value;
function resposta() {
    if (aprendeuMariana === "sim") {
      texto2.innerHTML = `Parabéns ${nomeUsuario} cabeça de pomba, você aprendeu!`;
    } if (aprendeuMariana === "não") {
      texto3.innerHTML = `Lamento ${nomeUsuario} cabeça de pomba, repete mais 1000 vezes!`;
    } else if(aprendeuMariana !== "sim" && aprendeuMariana !== "não") {
      texto4.innerHTML = "Por favor, digite 'sim' ou 'não'! Não sabe escrever cabeça de pomba?";
      alert(`Que isso não se repita ${nomeUsuario}!!! Aperte o botão para refazer o quiz!!!`);
    }
  }
//----------------------------------------
