const notas = [10, 5.6, 2, 3.5];

// map ex aula

const novasNotas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; // usando ternário para não ultrapassar nota máxima 10
});
console.log(novasNotas);


// ex livre de map com função nominal declarada
const pontoExtra = notas.map(function adicionaPonto(nota) {
    return nota + 2 >= 10 ? 10 : nota + 2;;
})
console.log(pontoExtra);

// ex livre de map com função anônima
const numerosAumentados = notas.map(function (nota) {
    return nota + 4 >= 10 ? 10 : nota + 4;;
});
console.log(numerosAumentados);

// ex livre de map com decréscimo de ponto
const pontoNegativo = notas.map((nota) => {
    return nota - 1 < 0 ? 0 : nota - 1;
});
console.log(pontoNegativo);
