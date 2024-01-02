const notas = [10, 6.5, 8, 7.5];

somaNotas = 0;

for (let nota of notas) {
    somaNotas = somaNotas + nota
}

let media = somaNotas / notas.length;

console.log(`A soma das notas foi ${somaNotas}, e sua média é ${media}.`);