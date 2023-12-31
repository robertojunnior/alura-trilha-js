const nomes = ["Ana", "Juliana", "Leonardo"];
const horario = ["manhã", "tarde", "noite"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

// Posição das listas   0       1        2        3
const funcionarios = [nomes, horario, idades, faculdade];

console.log(funcionarios[0]); //[ 'Ana', 'Juliana', 'Leonardo' ]

console.log(`A funcionária "${funcionarios[0][1]}", do período da "${funcionarios[1][2]}", tem ${funcionarios[2][2]} anos e ${(faculdade === true) ? "tem curso superior" : "não tem curso superior"
}.`);



