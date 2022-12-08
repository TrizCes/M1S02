/*
Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
2 x 0 = 0
2 x 1 = 2
....
2 x 10 = 20

O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.

dica: de uma olhadinha no for.

Realize o commit do exercício resolvido.
*/

let multiplicador = prompt('Você gostaria de saber a tabuada de qual numero?');
let tabuada = [];

for (i = 0; i <= 10; i++) {
  let resultadoTabuada = multiplicador * i;
  tabuada.push(`${multiplicador}X${i}=${resultadoTabuada}`);
}

alert(`
  ${tabuada[0]}
  ${tabuada[1]}
  ${tabuada[2]}
  ${tabuada[3]}
  ${tabuada[4]}
  ${tabuada[5]}
  ${tabuada[6]}
  ${tabuada[7]}
  ${tabuada[8]}
  ${tabuada[9]}
  ${tabuada[10]}`);
