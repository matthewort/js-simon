// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.NOTE:
// - venerdì non avrete ex e potrete quindi volendo migliorare Simon, quindi a maggior ragione partite semplici di log e prompt, poi incrementate semmai;
// - sempre su ex Simon, aggiungere il controllo almeno per non far inserire più volte lo stesso num da utente e non generare numeri doppioni da indovinare;Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.
// * Pensate bene ai tempi di esecuzione per non perdervi e quindi quando una cosa deve essere eseguita e quindi dove va messa logicamente.


// variabili dei numeri esposti
var num1 = (Math.floor(Math.random() * 9));
var num2 = (Math.floor(Math.random() * 9));
var num3 = (Math.floor(Math.random() * 9));
var num4 = (Math.floor(Math.random() * 9));
var num5 = (Math.floor(Math.random() * 9));

// alert espone 5 numeri casuali diversi
alert(" " + num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5);

// dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
setTimeout(myFunction, 400);

function myFunction() {
  for (var i = 0; i < 5; i++) {
    var richiesta = prompt("Inserisci i numeri");
    console.log(richiesta);
  }
  alert("you remember: " + richiesta); // ???
}



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
