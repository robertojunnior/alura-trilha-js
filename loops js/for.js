const numeros = [4, 2, 5, 9, 10];

for (let index = 0; index < numeros.length; index++) {
  console.log(`A posição ${index} da lista é o número: ${numeros[index]}`);
}

for (let i = 20; i >= 10; i--) {
  console.log(i);
}

for (let a = 0; a < numeros.length; a++) {
  const element = numeros[a];
  console.log(element * 2);
}

["João", "Maria", "José"].forEach((nomes) => {
  console.log(nomes);
});

["Paulo", "Mariana", "Joseilton"].forEach(function (nomes2) {
  console.log(nomes2);
});

const frutas = ["maçã", "banana", "kiwi"];
frutas.pop();
frutas.push("morango");
frutas.forEach(function (nomeFruta, indice) {
  console.log(`${indice + 1}: ${nomeFruta}`);
});
