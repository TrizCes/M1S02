/*
Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
Calcule o número de pares e impares e exiba o resultado utilizando um alert.

Realize o commit do exercício resolvido.
*/

let number = parseInt(prompt('Digite um número'));
let total = 0;
let pares = 0;
let impares = 0;

if (isNaN(number)) {
  alert('Digite um número válido.');
} else if (number > 1) {
  for (i = 0; i <= number; i++) {
    total = i % 2;
    if (total === 0) {
      pares += 1;
    } else if (total != 0) {
      impares += 1;
    }
  }
  alert(`
Entre 0 e o número ${number}:
- Existem ${pares} numeros pares;
- Existem ${impares} numeros impares;`);
}
