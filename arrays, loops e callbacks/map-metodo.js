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

// ex livre de forEach, com acréscimo de valor após uma condição

const funcionarios = ["Mariana", "Lontra"];

let entradaSalario = prompt("Olá, qual o seu salário atual miseravi?");
entradaSalario = parseFloat(entradaSalario);

funcionarios.forEach((nome) => {
    let bonus1 = 200;
    let bonus2 = 100;

    if (entradaSalario <= 1500) {
        alert(`${nome}, seu bônus salarial será de R$ ${(bonus1 + bonus2).toFixed(2)}, e seu novo salário será um total de R$ ${(entradaSalario + bonus1 + bonus2).toFixed(2)}.`);
    } else {
        alert(`${nome}, seu bônus salarial será de R$ ${(bonus1).toFixed(2)}, e seu novo salário será um total de R$ ${(entradaSalario + bonus1).toFixed(2)}.`);
    }
});

// ex de else if para mariana
let alturaMariana = 1.49
if (alturaMariana > 1.50) {
    console.log("Ela cresceu");
} else if (alturaMariana > 1.50 && alturaMariana < 1.80) {
    console.log("Está crescendo");
} {
    console.log("É anãzinha mesmo");
}