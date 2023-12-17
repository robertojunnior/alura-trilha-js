// let x = "";
// console.log(x);
// x = "oi";

// 1) declara a função
//string

// o parâmetro pode ser o que quiser, até a palavra "cueca", mas usar a palavra "texto" ajuda a entender melhor o que se esperar da função
function imprimeTexto(cueca) {
  console.log(cueca);
}
// 2) executa a função (1 ou + vezes)

imprimeTexto("oi");
imprimeTexto("Reutilizando a função");

// exemplo com return e variável fora

const a = 34;
const b = 43;

function soma() {
  return a + b;
}

console.log(soma());

//---------------------------------

function soma2() {
  const c = 25;
  const d = 24;
  return c + d;
}

console.log(soma2());

// --------------------------------
function soma3() {
  let resultado3 = 2 + 2;
  console.log(resultado3);
}

soma3();

// -------------------------------

function soma4() {
  let resultado4 = 2 * 2 + 6;
  return resultado4;
}

console.log(soma4());

// função simples com numero aleatório

const numeroEntrada = prompt(
  "Escolha um número de 0 à 10 para descobrir o número secreto: "
);
const numeroSecreto = parseInt(Math.random() * 10 + 1);

function maiorMenor() {
  if (numeroEntrada == numeroSecreto) {
    alert(`Você acertou! O número secreto era ${numeroSecreto}!`);
  } else if (numeroEntrada > numeroSecreto) {
    alert(
      `Ops, você errou! O número secreto é menor que ${numeroEntrada}. Tente novamente!`
    );
  } else {
    alert(
      `Ops, você errou! O número secreto é maior que ${numeroEntrada}. Tente novamente!`
    );
  }
}
maiorMenor();
