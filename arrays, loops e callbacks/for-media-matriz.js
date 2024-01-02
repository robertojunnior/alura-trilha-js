//calculando a media geral com uma matriz - array de duas dimensões

const materia1 = [10 , 6.5, 8 ,7.5]
const materia2 = [9  , 6  , 6]
const materia3 = [8.5, 9.5]
 
const notasGerais = [materia1,materia2,materia3]

console.log(notasGerais); // [ [ 10, 6.5, 8, 7.5 ], [ 9, 6, 6 ], [ 8.5, 9.5 ] ]
 
let media = 0;

for (let indice = 0; indice < notasGerais.length; indice++) {
   for (let indiceGeral = 0; indiceGeral < notasGerais[indice].length; indiceGeral++) {

    media = media + notasGerais[indice][indiceGeral] / notasGerais[indice].length;
   }
}
media = media / notasGerais.length;
console.log(`A média geral é ${media}.`); //A média geral é 8.

