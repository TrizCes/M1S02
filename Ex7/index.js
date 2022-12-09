/*
Percorra os números de o a 1000 e exiba no console os números primos e 
ao final a quantidade de números primos que existem nesse intervalo.
Realize o commit do exercício resolvido.
*/

function prime(i) {
  let dividers = 0;
  for (j = 1; j <= i; j++) {
    if (i % j === 0) {
      dividers++;
    }
  }
  return dividers;
}

let numberOfPrimes = 0;

for (i = 0; i <= 1000; i++) {
  if (prime(i) === 2) {
    console.log(i);
    numberOfPrimes++;
  }
}
console.log(`Existem ${numberOfPrimes} numeros primos, entre 0 e 1000`);
