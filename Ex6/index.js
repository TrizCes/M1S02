/*
Faça 3 prompts ao usuário:
1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular.

Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.

Realize o commit do exercício resolvido.
*/

let operaction = prompt(`Qual calculo iremos fazer?
Use + para somar,
Use - para subtrair,
Use * para multiplicar,
Use / para dividir.`);
let value1 = prompt('Qual é o primeiro valor que usaremos no calculo?');
let value2 = prompt('Qual é o segundo valor que usaremos no calculo?');
let result = 0;

value1 = parseInt(value1);
value2 = parseInt(value2);

if (isNaN(value2)) {
  alert('Os dados inseridos não são validos');
} else if (isNaN(value2)) {
  alert('Os dados inseridos não são validos');
}

if (operaction === '-') {
  result = value1 - value2;
} else if (operaction === '+') {
  result = value1 + value2;
} else if (operaction === '*') {
  result = 1;
  result = value1 * value2;
} else if (operaction === '/') {
  result = 1;
  result = value1 / value2;
} else {
  result = 'Os dados inseridos não são validos';
  console.error('Calculo indisponível');
}

alert(`O resultado do seu cálculo é: ${result}`);
