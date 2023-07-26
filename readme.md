# TRACCIA 1

Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

## SVOLGIMENTO TRACCIA 1

- chiedo un numero min
- chiedo un secondo numero max
- genero un numero casuale e nella formula inserico il mio max e il min

# TRACCIA 2

Dare la possibilità di inserire due parole. Verificare che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

## SVOLGIMENTO TRACCIA 2

- chiedo la prima parola
- chiedo una seconda parola
- stabilisco una costante per la lunghezza delle parole
- inserico un **IF** che
  - se lunghe uguali, le stampa entrambi
  - **ELSE** stampa la più lunga

# TRACCIA 3

Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

## SVOLGIMENTO TRACCIA 3

- creo un array vuoto
- inserisco un ciclo do while che
  - chiedo un numero **finchè** non arrivo a 50

# TRACCIA 4

Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
Calcola la media dei numeri inseriti.

## SVOLGIMENTO TRACCIA 4

- inserisco una costante che va a calcolare l'indice del mio array
- vado a dividerla alla somma

# TRACCIA 5

Trovare gli errori nel seguente codice:

---

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = "";
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]
