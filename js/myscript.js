const kmToGo = prompt("inserisci i km da percorrere")
console.log(kmToGo);

const yourAge = prompt("inserisci la tua età")
console.log(yourAge);

const kmPrice = 0.21;

const normalRunning = kmToGo * kmPrice ;
console.log(normalRunning)


   if ( (isNaN(yourAge) == true)) {
    console.log("numero non trovato")
} else {
    if (yourAge < 18){
        document.getElementById("ticket-price").innerHTML = Math.round(normalRunning - normalRunning * 20 / 100);
    } else if (yourAge > 65) {
        document.getElementById("ticket-price").innerHTML = Math.round(normalRunning - normalRunning * 40 / 100);
    } else {
        document.getElementById("ticket-price").innerHTML = Math.round(normalRunning);
    }
} 




