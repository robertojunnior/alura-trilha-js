function apresentar(nome) {
    return `meu nome é ${nome}.`
};
console.log(apresentar('José'));

// arrow function clássico
const apresentarArrow = nome => `meu nome é ${nome}.`
console.log(apresentar('Maria'));

const soma = (n1, n2) => `O resultado da soma é ${n1 + n2}.`
console.log(soma(5,9));

// arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10) {
        return 'um ou ambos os valores são maiores que 10'
    } else {
        return `os dois são menores`;
    }
}
console.log(somaNumerosPequenos(12, 21));

// modo tradicional ( Não estou vendo benefício na arrow function)
function somaNumerosPequenos2(num1, num2) {
    if (num1<10||num2<10) {
        return 'um ou ambos bla bla bla'
    } else {
        return 'nada a ver com a parada'
    }
}
console.log(somaNumerosPequenos2(78,41));