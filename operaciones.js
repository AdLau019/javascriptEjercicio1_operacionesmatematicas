//Sumar dos números //

const addNumbers = (a, b) => {
  let suma = a + b;
  return suma;
};

let resultadoSum = addNumbers(5, 4);
console.log(resultadoSum);

//Restar dos números //

const restNumbers = (a, b) => {
  let resta = a - b;
  return resta;
};

let resultadoRest = restNumbers(5, 4);
console.log(resultadoRest);

//Multiplicar dos números //

const multiNumbers = (a, b) => {
  let multiplicar = a * b;
  return multiplicar;
};

let resultadoMulti = multiNumbers(5, 4);
console.log(resultadoMulti);

//Dividir dos números //

const diviNumbers = (a, b) => {
  let dividir = a / b;
  return dividir;
};

let resultadoDivi = diviNumbers(5, 4);
console.log(resultadoDivi);

//Identificar número par //

const parNumbers = (num) => {
  let par = num % 2 === 0;
  return par;
};

let resultadoPar = parNumbers(4);
console.log(resultadoPar);
