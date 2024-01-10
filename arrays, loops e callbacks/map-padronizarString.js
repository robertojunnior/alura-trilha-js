// lembrando que o map percorre todo item

const nomes = ["Ana Julia", "Caio vinicius", "BIA silva"];

const padronizandoNome = nomes.map((nome) => {
    return nome.toUpperCase();
})
console.log(padronizandoNome);

// arrow function sem necessidade de colocar o return, padrão é escrever na mesma linha, mas não é regra
const nomes2 = ['MARIETA', 'CAIO BARCELOS', 'BIA DOLLAR'];
const nomes2Padronizados = nomes2.map((nome) => nome.toLowerCase());
console.log(nomes2Padronizados);