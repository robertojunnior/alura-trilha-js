animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

// não remove e add a sardinha no indice 1
animaisDoAquario.splice(1, 0, 'sardinha')
console.log(animaisDoAquario) // [ 'baleia', 'sardinha', 'polvo', 'golfinho', 'tubarão' ]

// remove o polvo do indice 2 e add o tucano em sua posição
animaisDoAquario.splice(2, 1, 'tucano');
console.log(animaisDoAquario); // [ 'baleia', 'sardinha', 'tucano', 'golfinho', 'tubarão' ]

// remove o golfinho e tubarão, adiciona o atum
animaisDoAquario.splice(3, 2, 'atum')
console.log(animaisDoAquario); // [ 'baleia', 'sardinha', 'tucano', 'atum' ]
