/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);


// 1- Che cosa fa questo codice?
    // Dato un array di oggetti, lo dividiamo in altri 3 array differenti a seconda della tipologia, in seguito stampiamo i 3 array in console.

// 2- Sono presenti errori di sintassi?
    // Errore 1: a riga 59 manca un virgola, per dividere i due oggetti.
    // Errore 2: Sempre a riga 59 la comparazione non tiene conto di benzina scritto con la B maiuscola, manca il .toLowerCase().
    // Errore 3: a riga 67 la arrow function è scritta male, la versione corretta sarebbe =>.
    // Errore 4: a riga 70 serve un return per far funzionare il ciclo filter quindi: return auto.type === 'diesel'.
    // Errore 5: sempre a riga 70 la comparazione non tiene conto di diesel scritto con la D maiuscola, manca il .toLowerCase().
    

// 3- Sono presenti errori logici?
    // Errore 6: a riga 74 dovremmo escludere entrambi i tipi di auto, di conseguenza l'operatore logico || non è corretto, bisogna utilizzare &&.
