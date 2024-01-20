const notas = [7, 7, 8, 9]

const novasNotas = ["add antes e depois do ...", ...notas, 10, 6, "teste"]; // spread - operador de espalhamento

// novasNotas.push(10)

console.log(`As notas originais são: [${notas}]`);
console.log(`As novas notas são: [${novasNotas}]`);
