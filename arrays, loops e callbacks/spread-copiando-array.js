const notas = [7, 7, 8, 9]

const novasNotas = ["add antes e depois do ...", ...notas, 10, 6, "teste"]; // spread - operador de espalhamento

// novasNotas.push(10)

console.log(`As notas originais são: [${notas}]`);
console.log(`As novas notas são: [${novasNotas}]`);

//---------------------------

const livros = ["Senhor do seu anel ", " As múmias de avalon"]

const novosLivros = ["Papa é Pop ", ...livros, " Josué e os 7 camelos"]

console.log(`A lista antiga dos livros é: ${livros}`);
console.log(`A nova lista de livros é: ${novosLivros}.`);

// usando o operador "..." Spread Operator, podemos copiar o array antigo e adicionar novos indices no novo array