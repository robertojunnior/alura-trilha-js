// criando objeto para utilização de classes

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
