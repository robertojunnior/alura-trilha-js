// outro exemplo 

alert("Olá, bem vinda ao quiz para pessoas com cabeça de pomba!")
let entradaNome = prompt("Primeiramente me diga o seu nome infiliz?")

let aprendeuMariana = prompt('Agora responda se aprendeu o básico sobre funções, escrevendo apenas "sim", ou "não"!');

function resposta() {
  if (aprendeuMariana === "sim") {
    console.log("Parabéns cabeça de pomba, você aprendeu!");
  } if (aprendeuMariana === "não") {
    console.log("Lamento cabeça de pomba, repete mais 1000 vezes!");
  } else {
    console.log ("Por favor digite 'sim' ou 'não', não sabe escrever não?");
    alert("Que isso não se repita!!!")
  }
  
}