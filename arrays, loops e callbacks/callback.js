const nomes = ["Roberto", "Jurema", "Gertrudes", "Filomena"];

nomes.forEach(function(nome){
    console.log(`Olá ${nome}!`); 
    // Olá Roberto!, Olá Jurema!, Olá Gertrudes", Olá Filomena!
});

//------------------------------------------------------------
// Usando arrow function (função de seta) para simplificar a sintaxe:
const nomes2 = ["Roberval", "Jucilene", "Jerônimo", "Filisteu"];

nomes2.forEach((nome)=>{
    console.log(`Olá ${nome}!`);
    // Olá Roberval! Olá Jucilene! Olá Jerônimo! Olá Filisteu! 
});

//----------------------------------------------------------
const nomes3 = ["Rodrigo", "José", "Marcos", "Olavo"];

function imprimeNome(nome) {
    console.log(nome);
}

nomes3.forEach(imprimeNome);
console.log( `Olá ${nomes3}!`);

// ------------ exemplo livre imprimindo lista de jogos e posição cadastro
const listaJogos = [
  "Battlefield V",
  "Gta V",
  "Call Of Duth MW2",
  "Mário Bros",
  "Donkey Kong",
  "Fifa 2023",
];
 
  listaJogos.forEach((jogos, cadastro)=>{
    console.log(`Cadastro: ${cadastro} / Jogo: ${jogos}`);
  });

//----------- exemplo livre - Percorrendo e imprimindo nomes na lista
// 
  let listaAlunos = ["Ana", "João", "Mariana", "Carlos", "Isabel", "Rafael", "Luciana", "Gustavo", "Juliana", "Pedro"];

  // ------------------- 1 parâmetro é o elemento, o 2 é o index
  listaAlunos.forEach((chamada, numeroLista) =>{
     console.log(`Nº: ${numeroLista} ${chamada} `);
  });
       
  //---------------------- função simples sem parâmetro
  
let frase = "vai te lascar"

  function escreveFrase() {
    console.log(frase);
  }

  escreveFrase();

  //---------------------- função simples com parâmetro
  
let frase2 = "vai te lascar de novo"

function escreveFrase2(qualquerParametro) {
  console.log(qualquerParametro);
}

escreveFrase2(frase2);
