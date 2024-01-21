const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', "Marjorie", "Leo"];

// Remover um elemento na lista de estudantes utilizando splice
// splice(1, 2) 1º param de onde inicia, 2º param quantos elementos a seguir serão removidos e 3º adiciona novo elemento nas posições removidas
listaEstudantes.splice(1, 2, "Rodrigo", "Matoso", 5);

console.log(listaEstudantes);
