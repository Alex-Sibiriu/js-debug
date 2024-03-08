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


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();


// 1- Che cosa fa questo codice?
    // è una funzione che controlla l'età data.

// 2- Sono presenti errori di sintassi?
    // Si, message viene valorizzato in seguito alla sua dichiarazione, deve quindi essere dichiarata come let

// 3- Sono presenti errori logici?
    // Si, una funzione scritta in questo modo non è riutilizzabile, sarebbe meglio passargli myAge come parametro della funzione in modo da renderla riutilizzabile.


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// 1- Che cosa fa questo codice?
    // Stampa in console il numero di colori presenti nell'array.

// 2- Sono presenti errori di sintassi?
    // Si, quando scriviamo ${colors.lenght}, è scritto male, la h va dopo la t.

// 3- Sono presenti errori logici?
    // No.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1- Che cosa fa questo codice?
    // Chiede un numero all'utentee fa il totale aggiungendo 12 stampandolo in console.

// 2- Sono presenti errori di sintassi?
    // No.

// 3- Sono presenti errori logici?
    // Si, non viene effettuato il parseInt del prompt, di conseguenza stiamo sommando una stringa ad un numero.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1- Che cosa fa questo codice?
    // Chiede la mail all'utente e verifica se può effettuare l'accesso.

// 2- Sono presenti errori di sintassi?
    // La variabile grantAccess viene dichiarata e valorizzata scrivendo 'true' e 'false' con gli apici, questo li rende stringhe, bisogna scriverle senza apici per renderli booleani.

// 3- Sono presenti errori logici?
    // No.



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

// 1- Che cosa fa questo codice?
    // Chiede la mail all'utente e verifica se può effettuare l'accesso, contorllando che l'input inserito sia lungo almeno 5 caratteri.

// 2- Sono presenti errori di sintassi?
    // Si, manca la parentesi graffa di chiusura della funzione, poi la variabile grantAccess viene dichiarata in maniera errata come sopra.

// 3- Sono presenti errori logici?
    // No.



























