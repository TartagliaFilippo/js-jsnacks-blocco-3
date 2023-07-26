//  chiedo un numero min
const min = parseInt(
  prompt("scrivi un numero che sia il tuo intervallo più basso")
);

//  chiedo un secondo numero max
const max = parseInt(
  prompt("scrivi un numero che sia il tuo intervallo più alto")
);

//  genero un numero casuale e nella formula inserico il mio max e il min
const number = Math.floor(Math.random() * max) + min;

console.log(number);
