let ul = document.querySelector("#tabuada");

let numero = prompt("Digite o número para ver a tabuada:");

let i = 0;
while (i <= 10) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
}

let entrada = 0;
while (entrada <= 10) {
  let resultado = numero * entrada;
  let li = document.createElement("li");
  li.innerText = `${numero} x ${entrada} = ${resultado}`;

  ul.appendChild(li);
  entrada++;
}
