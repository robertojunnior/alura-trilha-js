// parâmetros de função

let p1 = parseInt(prompt("Escolha um número: "));
let p2 = parseInt(prompt("Escolha outro número: "));

function soma(n1, n2) {
  return n1 + n2;
}

// passando os parâmetros para a função soma()
console.log(soma(1, 2));
console.log(soma(1, 9));
console.log(soma(12, 9));

// usando os parâmetros recebidos das entradas de prompt
alert(`A soma entre ${p1} e ${p2} é igual a ${soma(p1, p2)}.`);

// parâmetros x funções

function nomeSobrenome(nome, sobrenome) {
  return `Muito prazer em lhe conhecer ${nome} ${sobrenome}, seja bem vindo!`;
}

// as variáveis de entrada podem ser declaradas antes ou depois da função, depende do projeto, o importante é executar após.
let nome = prompt("Qual é o seu 1º nome?");
let sobrenome = prompt("E agora o seu último nome?");
alert(nomeSobrenome(nome, sobrenome));
