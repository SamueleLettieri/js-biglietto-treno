const kmToGo = prompt("inserisci i km da percorrere")
console.log(kmToGo);

const yourAge = prompt("inserisci la tua età")
console.log(yourAge);

const kmPrice = 0.21;

const normalRunning = kmToGo * kmPrice ;


   if ( (isNaN(yourAge) == true)) {
    console.log("numero non trovato")
} else {
    if (yourAge < 18){
        console.log(Math.round( normalRunning - normalRunning * 20 / 100 ) ) /100;
    } else if (yourAge > 65) {
        console.log(Math.round( normalRunning - normalRunning * 40 / 100) ) /100;
    } else {
        console.log(Math.round( normalRunning) ) /100;
    }
} 




