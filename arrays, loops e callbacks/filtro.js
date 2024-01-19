const alunos = ["Ana", "Marcos", "José", "Fiote"];

const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

//--------------------------------------------
const jogos = ["gtav", "rainbow6", "battlefieldv", "call of duty"];
const catalogo = [199, 179, 219, 159];

const escolhaPorPreco = jogos.filter((nome, preco) => {
    return catalogo[preco] < 200;
})

console.log(escolhaPorPreco);

//-----------------------------------------

const alunos2 = ["Mario", "José", "Roberto", "Paulo", "Rosana", "Astolfo"];
const notas = [4, 2.5, 6, 7, 3, 8];

const resultado = alunos2.filter((nome, indice2) => {
    return notas[indice2] >= 7;
})
console.log(resultado);