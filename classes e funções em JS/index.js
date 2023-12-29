// criando objeto para utilização de classes (Objeto literal)
const livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function () { // função anônima
        console.log("A Alura indica o livro " + this.nome + "!"); // string concatenada poderia ser uma template string também
        console.log(`A Alura indica o livro ${this.nome}, ele tem ${this.paginas} páginas e foi feito pela editora ${this.editora}!`);
    }
}

livro.anunciar();

// espaço no node
console.log("*************************************************");

// segundo exemplo, vou incrementar os prompts para entrada dos dados

// Rodar no navegador

// alert("Olá, para adicionar um novo Livro, responda as perguntas à seguir!")
// let entradaNome = prompt("Qual o nome do novo Livro? ")
// let entradaEditora = prompt("Qual o nome da Editora? ")
// let entradaPaginas = prompt("Quantas páginas tem o novo Livro? ")


// rodar no Node

let entradaNome = "José e as cabras no nordeste"
let entradaEditora = "Cabra da peste"
let entradaPaginas = "185"

const Livro = function (){
    gNome = entradaNome,
    gEditora = entradaEditora,
    gPaginas = entradaPaginas

    this.getNome = function () {
        return gNome;
    }
    this.getEditora = function() {
        return gEditora;
    }
    this.getPaginas = function(){
        return gPaginas;
    }
}
const novoLivro = new Livro(entradaNome, entradaEditora, entradaPaginas);

console.log(novoLivro);
console.log(`O novo livro adicionado foi ${novoLivro.getNome()}, da Editora ${novoLivro.getEditora()} e possui ${novoLivro.getPaginas()} páginas.`);