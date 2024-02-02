// Estructura de una arrow function en una sola linea.

const saludar1 = () => console.log(`Hola`);
saludar1();
// Estructura con un solo parametro
const saludar2 = nombre => console.log(`Hola ${nombre}`);
saludar2('Pedro');

const sumar1 = function(a, b) {
  return a + b;
}

console.log(sumar1(8, 9));

// Estructura con dos parametros
const sumar2 = (a, b) => a + b;

console.log(sumar2(9, 9));

// Estructura con varias lineas
const funcionDeVariasLineas = () => {
  console.log('Uno');
  console.log('Dos');
  console.log('Tres');
}

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((elemento, index) => {
  console.log(`${elemento} está en la posicion ${index}`);
});

