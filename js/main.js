// // ! ESERCIZIO 1
// //  chiedo un numero min
// const min = parseInt(
//   prompt("scrivi un numero che sia il tuo intervallo più basso")
// );

// //  chiedo un secondo numero max
// const max = parseInt(
//   prompt("scrivi un numero che sia il tuo intervallo più alto")
// );

// //  genero un numero casuale e nella formula inserico il mio max e il min
// const number = Math.floor(Math.random() * (max - min)) + min;

// console.log(number);

// // ! ESERCIZIO 2
// //  chiedo la prima parola
// const wordSt = prompt("inserisci una parola");

// //  chiedo una seconda parola
// const wordNd = prompt("inserisci una parola");

// // inserisco le condizioni
// if (wordSt.length == wordNd.length) {
//   console.log(wordSt, wordNd);
// } else if (wordSt.length > wordNd.length) {
//   console.log(wordSt);
// } else {
//   console.log(wordNd);
// }

// // ! ESERCIZIO 3
// // CREO UN ARRAY VUOTO
// const myArr = [];

// // CREO UN CONTATORE SOMMA
// let sum = 0;

// while (sum < 50) {
//   let numberUser = parseInt(prompt("dammi un numero"));
//   sum += numberUser;
//   myArr.push(sum);
// }

// console.log(sum);

// ! ESERCIZIO 4
// CREO UN ARRAY VUOTO
const myArr = [];

// CREO UN CONTATORE SOMMA
let sum = 0;

while (sum < 50) {
  let numberUser = parseInt(prompt("dammi un numero"));
  sum += numberUser;
  myArr.push(sum);
}

console.log(sum);

console.table(myArr);

let media = (sum / myArr.length).toFixed(2);

console.log(media);
