const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170

//-----------------------------------
const numeros2 = [1, 9, 4, 7, 5];

const soma2 = numeros2.reduce(function (acumulador, valor) {
    return acumulador + valor;
}, 0)
console.log(soma2); //23

//----------------------------------
const numeros3 = [43, 50, 65, 12, 90];

function operacaoNumerica(acc, atual) {
    return atual + acc
}

const soma3 = numeros3.reduce(operacaoNumerica, 0)
console.log(soma3);


