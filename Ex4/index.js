/*
Utilizando estrutura de repetição, some os números digitados através do prompt enquanto o número for diferente de -1, quando digitado -1 pare de exibir o prompt e exiba através de um alert o resultado da soma dos números digitados.

Realize o commit do exercício resolvido.
*/
let numeros = [];
let numero = 0;

while (numero != -1) {
  numero = prompt('Digite numeros para somar. Quando quiser o resultado digite -1');
  if (isNaN(numero)) {
    alert(`Por favor digite apenas números`);
  } else if (numero >= 0) {
    numeros.push(parseInt(numero));
  }
}
console.log(numeros);
let resultado = numeros.reduce(function (total, atual) {
  return total + atual;
});

alert(resultado);
