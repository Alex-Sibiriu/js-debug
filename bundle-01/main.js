/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// 1- Che cosa fa questo codice?
    // - è un ciclo FOR che ogni volta stampa in console l'elemento [i],, finchè non arriva a 5.

// 2- Sono presenti errori di sintassi?
    // - NO

// 3- Sono presenti errori logici?
    // Si, il ciclo dovrebbe verificarsi finche la condizione "i > 5", questo non si verifica in quanto l'elemento i parte con valore 0, il ciclo quindi non parte e non avviene nemmeno l'incremento di i.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// 1- Che cosa fa questo codice?
    // Controlla se un numero (inserito come parametro) è pari o dispari, se è pari restituisce il numero dato + 5, altrimenti solo il numero dato.

// 2- Sono presenti errori di sintassi?
    // Si, la comparazione fra 'num % 2' e 0 viene effettuata tramite un =, questo è un errore, per la comparazione bisogna usare === in modo da verificare se il contenuto del dato e la sua tipologia corrispondano a 0.

// 3- Sono presenti errori logici?
    // No.


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// 1- Che cosa fa questo codice?
    // - è un ciclo FOR che ogni volta stampa in console l'elemento [i], finchè non arriva a 5

// 2- Sono presenti errori di sintassi?
    // Si, al posto delle virgole bisogna usare il punto e virgola in modo da separare correttamente le varie dichiarazioni.

// 3- Sono presenti errori logici?
    // No.

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- Che cosa fa questo codice?
    //  Dato un array di numeri, controlla quali sono pari e li pusha dentro un nuovo array.

// 2- Sono presenti errori di sintassi?
    // Si, i due array devono essere dichiarati come const e non come let, dopo l'incremento i++ non si deve inserire il punto e virgola, la comparazione (numbers % 2 = 0) deve essere effettuata con ===, fra la dichiarazione della condizionale dell' if e la parentesi quandra non si deve inserire il punto e virgola.

// 3- Sono presenti errori logici?
    // Si, nella comparazione (numbers % 2 = 0) stiamo prendendo l'intero array numbers, invece dovremmo scrivere (numbers[i] % 2 = 0), poi stiamo pushando dentro evenNumbers l'indece e non l'elemento, per farlo dovremmo scrivere: evenNumbers.push(numbers[i]).