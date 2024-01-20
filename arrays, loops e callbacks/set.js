const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet]
console.log(nomesAtualizados); // Conjunto de valores únicos:  Ana, Clara, Maria, João