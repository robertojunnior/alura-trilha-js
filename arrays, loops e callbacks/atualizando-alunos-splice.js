// splice - adiciona ou remove elementos do array. Atualizar, alterar índice em sua posição
//--------------- 0        1        2      3          4        5
const nomes = ["João", "Carla", "caio", "Lara", "Marjorie", "Léo"];

// adicionar novos nomes na lista com splice
nomes.splice(1, 4, "Rodrigo", "Joana", "Roberto");

console.log(nomes); // ["João", "Rodrigo", "Joana", "Roberto", "Marjorie", "Léo"]
console.log(); // espaço no node

// ex aula
//------------------- 0     1      2     3
animaisDoAquario = ["🐋", "🐙", "🐬", "🦈"];

// Adicionando um peixe-lobo (touro) no meio da lista de animais do aquário
animaisDoAquario.splice(1, 0, "🐠");
console.log("Animais do Aquário: ", animaisDoAquario); // ["🐋", "🐠", "🐙", "🐬", "🦈"]

//  3 é o índice que vai ser removido e 2 é quantos vamos remover a partir do índice escolhido
animaisDoAquario.splice(3, 2, "🐟");

console.log(animaisDoAquario); // ["🐋", "🐠", "🐙", "🐟"]
