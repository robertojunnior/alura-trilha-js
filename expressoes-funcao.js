//---------------------------------------- declaração de função
function minhaFuncao(param) {
  //código
}
minhaFuncao("param");

//---------------------------------------- expressão de função anônima

const soma = function (numero1, numero2) {
  return numero1 + numero2;
};
console.log(`O resultado dessa função do carai é: ${soma(1, 200)}`);

//---------------------------------------- outro exemplo

let nome = prompt("Olá, qual é o seu nome?");
alert(
  `Seja bem vindo(a) ${nome}, à seguir vamos calcular a média de suas notas! `
);

nota1 = parseFloat(prompt("Escreva a nota da 1ª prova: "));
nota2 = parseFloat(prompt("Escreva a nota da 2ª prova: "));
nota3 = parseFloat(prompt("Agora a nota da 3ª e última prova: "));

const media = function () {
  return (nota1 + nota2 + nota3) / 3;
};
const resultado = media();

const passouReprovou = function () {
  if (resultado >= 7) {
    alert(`Parabéns ${nome}, você está APROVADO com uma média de ${media().toFixed(2)}!`);
  } else {
    alert(`Infelizmente ${nome}, sua média foi ${media().toFixed(2)}! Está abaixo de 7, portanto você está REPROVADO(A)!`);
  }
};
passouReprovou();

