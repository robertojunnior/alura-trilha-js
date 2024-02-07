let ul = document.querySelector("#tabuada");

let numero = prompt("Digite o número para ver a tabuada:");

let entrada = 0;
while (entrada <= 10) {
  let resultado = numero * entrada;
  let li = document.createElement("li");
  li.innerText = `${numero} x ${entrada} = ${resultado}`;

  ul.appendChild(li);
  entrada++;
}

// do while
let i = 0;
do {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
} while (i <= 10);
