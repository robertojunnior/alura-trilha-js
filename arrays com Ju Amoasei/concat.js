const sala1 = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André'];
const sala2 = ['Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const salas = sala1.concat(sala2);
console.log(salas);

//-------------------------------
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(`Este é o array original: ${arrayOriginal}`)
console.log(`Este é o array concat: ${arrayConcat}`)

//-------------------------------

const arrayOriginal1 = [50, 60, 70]
const arrayConcat1 = arrayOriginal1.concat([80, [90, 100]])

console.log(arrayConcat1)
console.log(arrayOriginal1)
