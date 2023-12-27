function apresentar(nome) {
    return `meu nome é ${nome}.`
};
console.log(apresentar('José'));

// arrow function clássico
const apresentarArrow = nome => `meu nome é ${nome}.`
console.log(apresentar('Maria'));

const soma = (n1, n2) => `O resultado da soma é ${n1 + n2}`
console.log(soma(5,9));

// arrow function com + de 1 linha de instrução
