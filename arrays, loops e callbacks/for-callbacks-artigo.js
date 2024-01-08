const lista0 = [1, 2, 3, 4, 5];

// pseudo código: 
// for(para a var indice=0, enquanto for menor que o comprimento da lista some 1 a ela, ou seja, vá para o próximo item ou indice, até chegar ao fim);
// Após, imprima no console os índices da lista conforme instrução acima.
for (let indice = 0; indice < lista0.length; indice++) {
    console.log(lista0[indice]);
}

//------------------------------------------------

listaNomes = ["João", "Felisberto", "Adalberto", "Romiro", "Adalgisa", "Ericléia"];

// for of da listaNome
for (nomes of listaNomes) {
    // e mostre o nome com a posição no array
    console.log(`O ${nomes} está na posição ${listaNomes.indexOf(nomes)}`);
}
// evitando usar o indexOf caso a lista seja grande, no console o nome e posição também;
for (let i = 0; i < listaNomes.length; i++) {
    console.log(`O ${listaNomes[i]} está na posição ${i}`);
}

// os incrementos se somam no final
const lista1 = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista1.length; i++, j++) {
    console.log(lista1[i] + j);
}

for (let i = 0, j = 4; i < lista1.length; i++, j--) {
    console.log(lista1[i], lista1[j]);
}


//---------------------------------forOf
const lista2 = [1, 2, 3, 4, 5];
let soma = 0; // declara a var for

for (let elemento of lista2) {
    soma += elemento;
}

console.log(soma) //15

//outro exemplo de for of (  mais simples para percorrer uma lista do início ao fim)
const lista3 = [50, 100, 150, 200, 250, 300];
let soma3 = 0;
for (let numerosDaLista of lista3) {
    soma3 = soma3 + numerosDaLista;
}
console.log(`A soma de todos os números da lista é: ${soma3}.`);