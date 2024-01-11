const notas = [10, 5.6, 2, 3.5];
console.log(`Array notas, utilizado como referência: [${notas}]`);

// map ex aula

const novasNotas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; // usando ternário para não ultrapassar nota máxima 10
});
console.log(`Retornando novas notas com 1 ponto a mais: ${novasNotas}`);


// ex livre de map com função nominal declarada global
const pontoExtra = notas.map(function adicionaPonto(nota) {
    return nota + 2 >= 10 ? 10 : nota + 2;;
})
console.log(`Adicionando 2 pontos extras: ${pontoExtra}.`);

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

// let entradaSalario = prompt("Olá, qual o seu salário atual miseravi?");
let entradaSalario = 1000;
entradaSalario = parseFloat(entradaSalario);

funcionarios.forEach((nome) => {
    let bonus1 = 200;
    let bonus2 = 100;

    if (entradaSalario <= 1500) {
        console.log(`${nome}, seu bônus salarial será de R$ ${(bonus1 + bonus2).toFixed(2)},
    e seu novo salário será um total de R$ ${(entradaSalario + bonus1 + bonus2).toFixed(2)}.`);
    } else {
        console.log(`${nome}, seu bônus salarial será de R$ ${(bonus1).toFixed(2)},
    e seu novo salário será um total de R$ ${(entradaSalario + bonus1).toFixed(2)}.`);
    }
});

// ex de else if para mariana
let alturaMariana = 1.49
if (alturaMariana > 1.50) {
    console.log("Ela cresceu.");
} else if (alturaMariana > 1.50 && alturaMariana < 1.80) {
    console.log("Está crescendo.");
} {
    console.log("É anãzinha mesmo.");
}

//ex map com função declarada padrão e com parâmetro
const valores = [1, 3, 5, 7, 9];

// -------------------- retornando o dobro
const dobro = function (valor) {
    return valor * 2;
};
const resultadoDobro = valores.map(dobro);
console.log(resultadoDobro);

// dobro com arrow function

const valores2 = [2, 5, 7, 14];

const dobro2 = (valor) => {
    return valor * 2;
};
const resultadoDobro2 = valores2.map(dobro2)
console.log(resultadoDobro2);

//-------------- somando os numeros do array com map
const valores3 = [5, 9, 13, 22];
let contador = 0;

// percorrendo com for clássico
// for (let i = 0; i < valores3.length; i++) {
//     contador = contador + valores3[i]
// }

// percorrendo com map e somando os valores do array
valores3.map(function somarValor(valor) {
    contador += valor;
});

console.log(`Esta é a soma dos valores do array: ${contador}!`);

//----------- somando mais um a cada iteração
const valores4 = [10, 25, 43, 32];
function somaMaisUm(valor) {
    return valor + 1;
}
const valoresComSoma = valores4.map(somaMaisUm);
console.log(valoresComSoma); //mostrando os valores com a adição do return