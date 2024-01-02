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

// Este código em JavaScript calcula a média das notas de várias matérias e exibe a média geral. Aqui está uma explicação passo a passo do código:

// 1. **Declaração de Arrays:**
//    ```javascript
//    const materia1 = [10, 6.5, 8, 7.5];
//    const materia2 = [9, 6, 6];
//    const materia3 = [8.5, 9.5];
//    ```
//    Três arrays são criados, representando as notas de três matérias diferentes. Cada array contém as notas correspondentes para a respectiva matéria.

// 2. **Array de Notas Gerais:**
//    ```javascript
//    const notasGerais = [materia1, materia2, materia3];
//    ```
//    Um array chamado `notasGerais` é criado, que contém os arrays individuais das notas de cada matéria. Este array bidimensional é uma estrutura de dados que organiza as notas por matéria.

// 3. **Exibição das Notas Gerais:**
//    ```javascript
//    console.log(notasGerais); // [ [ 10, 6.5, 8, 7.5 ], [ 9, 6, 6 ], [ 8.5, 9.5 ] ]
//    ```
//    O console exibe o array `notasGerais`, que mostra as notas de cada matéria.

// 4. **Cálculo da Média Geral:**
//    ```javascript
//    let media = 0;

//    for (let indice = 0; indice < notasGerais.length; indice++) {
//       for (let indiceGeral = 0; indiceGeral < notasGerais[indice].length; indiceGeral++) {
//          media = media + notasGerais[indice][indiceGeral] / notasGerais[indice].length;
//       }
//    }

//    media = media / notasGerais.length;
//    ```
//    Dois loops aninhados são usados para percorrer todas as notas em `notasGerais`. A cada iteração, a nota é somada à variável `media`, dividida pelo número de notas na matéria específica. Finalmente, a média é dividida pelo número total de matérias para obter a média geral.

// 5. **Exibição da Média Geral:**
//    ```javascript
//    console.log(`A média geral é ${media}.`); // A média geral é 8.
//    ```
//    A média geral calculada é exibida no console.

// Portanto, o código realiza o cálculo da média geral das notas das diferentes matérias, considerando que cada matéria pode ter um número diferente de notas.