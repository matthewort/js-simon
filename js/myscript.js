// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.NOTE:
// - venerdì non avrete ex e potrete quindi volendo migliorare Simon, quindi a maggior ragione partite semplici di log e prompt, poi incrementate semmai;
// - sempre su ex Simon, aggiungere il controllo almeno per non far inserire più volte lo stesso num da utente e non generare numeri doppioni da indovinare;Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.
// * Pensate bene ai tempi di esecuzione per non perdervi e quindi quando una cosa deve essere eseguita e quindi dove va messa logicamente.


var arrayNumeriRandom = [];
var numeriCheVoglioGenerare = 10;//Voglio generare numeri random unici dentro l'array..
//Sappiamo quando finisce il ciclo? non esattamente perchè con i numeri random posso metterci N giri prima di ottenere il risultato
//Per questo motivo opterò per un while //Finchè gli elementi dentro il mio array non corrispondono ai numeri che voglio generare esegui questo codice
while(arrayNumeriRandom.length < numeriCheVoglioGenerare) {
    var numeroRandom = Math.floor(Math.random() * 100); //genero un numero da 0 a 99;    //Prima di inserirlo nell'array mi chiedo: questo numero esiste già nel mio array?     //Se non esiste nel mio array lo inserisco, altrimenti ignoro e riprovo
    if(!arrayNumeriRandom.includes(numeroRandom)) {
        arrayNumeriRandom.push(numeroRandom)
    }
}//Una volta finito il mio ciclo avrò il mio array di numeri unici
console.log(arrayNumeriRandom)









// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati


// var count = 10;
//
// function countdown() {
//   if(count > 0) {
//   console.log(count);
//   count--;
// } else {
//   console.log("Buon anno");
//   clearInterval(mioInterval);
// }
// }
