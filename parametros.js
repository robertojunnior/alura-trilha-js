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
