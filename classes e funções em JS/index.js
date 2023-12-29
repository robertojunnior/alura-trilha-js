/////////////////////////////// criando objeto para utilização de classes 
///////////////////////////////(Objeto literal)
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
console.log();

//////////////////////////////////////////////// segundo exemplo, vou incrementar os prompts para entrada dos dados

// Rodar no navegador

// alert("Olá, para adicionar um novo Livro, responda as perguntas à seguir!")
// let entradaNome = prompt("Qual o nome do novo Livro? ")
// let entradaEditora = prompt("Qual o nome da Editora? ")
// let entradaPaginas = prompt("Quantas páginas tem o novo Livro? ")


// rodar no Node

let entradaNome = "José e as cabras do nordeste"
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

console.log(`O novo livro adicionado foi ${novoLivro.getNome()}, da Editora ${novoLivro.getEditora()} e possui ${novoLivro.getPaginas()} páginas.`);

//espaço Node
console.log();


////////////////////////////////// Exemplo de classe JS rodando no NODE

let outroNome = "Cabana de Graveto"
let outraEditora = "Zóio de Jumenta"
let outrasPaginas = "250"


class outroLivro {
    constructor(nome, editora, paginas){
    this.nome = nome
    this.editora = editora
    this.paginas = paginas
    }
    anunciarTitulo() {
    console. log( `Título: ${this.nome}` )
    }
    descreverTitulo() {
    console. log(`Descrição: ${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas. `)
    }
}

const newLivro = new outroLivro(outroNome, outraEditora, outrasPaginas);
newLivro.anunciarTitulo();
newLivro.descreverTitulo();


/////////////////////////////////// reutilizando dados da classe anterior em uma nova classe

class reusoDaClasse extends outroLivro { // estendendo as opções da classe do livro acima
    constructor (nome, nomeColecao) {
        super(nome)  //chama o construtor da superclasse
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}.`);
    }
}
const LogicaDeProgramação = new reusoDaClasse("Lógica de Programação", '"Comece a programar arrombado!"');
LogicaDeProgramação.anunciarTitulo();
LogicaDeProgramação.descreverColecao();


