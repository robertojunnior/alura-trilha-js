const nomes = ["Roberto", "Jurema", "Gertrudes", "Filomena"];

nomes.forEach(function(nome){
    console.log(`Olá ${nome}!`);  // Olá Roberto!, Olá Jurema!, Olá Gertrudes", Olá Filomena!
});

// Usando arrow function (função de seta) para simplificar a sintaxe:
const nomes2 = ["Roberval", "Jucilene", "Jerônimo", "Filisteu"];

nomes2.forEach((nome)=>{
    console.log(`Olá ${nome}!`)
});
