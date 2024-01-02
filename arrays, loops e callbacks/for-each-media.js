const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach(function (nota) {
  somaNotas = somaNotas + nota;
});

let media = somaNotas / notas.length;
console.log(`A média das notas é ${media}.`);

// exemplo do MDN

const array = ["a", "b", "c"];

array.forEach((itensDaLista) => console.log(itensDaLista));

//----------------------

const listaJogos = [
  "Battlefield V",
  "Gta V",
  "Call Of Duth MW2",
  "Mário Bros",
  "Donkey Kong",
  "Fifa 2023",
];

listaJogos.forEach(function () {
  if (arguments.length == 0) {
    console.log("Sem informações");
  } else {
    let jogo = arguments[0];
    console.log(`O jogador está jogando: ${jogo}`);
  }
});
