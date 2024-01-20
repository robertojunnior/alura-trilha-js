// Use para remover elementos duplicados de um Array

const numeros = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(numeros)]);

// [2, 3, 4, 5, 6, 7, 32]
