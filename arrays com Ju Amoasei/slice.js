const listaEstudantes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara',
    'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos',
    'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata',
    'Daisy', 'Camilo'];


const sala1 = listaEstudantes.slice([0], listaEstudantes.length / 2);
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2, [20]);
const alunosFora = listaEstudantes.slice(-2);

console.log(`A sala 1 contém os alunos: ${sala1}`);
console.log(`A sala 2 contém os alunos: ${sala2}`);
console.log(alunosFora);