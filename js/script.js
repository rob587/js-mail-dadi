// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email

//dichiarazione variabile email ergo creare un array di email//

const emailList = ["Email1", "Email2", "Email3", "Email4", "Email5", "Email6", "Email7", "Email8"]

const emailRequest =(prompt("inserisci la tua email")) 

let emailFound = false


//stampare messaggio sull'esito di controllo//

for (let i=0; i<emailList.length; i++){
    if(emailList[i]==emailRequest){
        emailFound = true;
    }

}

if(emailFound){
    console.log("L'email digitata è presente in lista")


}else{
    console.log("L'email digitata non è presente in lista")
}


//------------------------//

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//variabili//

 const randomPcNumbers = []
 const userNumbers = []

 let pcPoints= 0
 let userPoints= 0


 for( let i = 1; i<=6; i++){
     const pcNumber = Math.floor(Math.random()* 6) + 1;
     const userNumber = parseInt(prompt("inserisci il numero"))

     randomPcNumbers.push(pcNumber)
     userNumbers.push(userNumber)

    if(pcNumber>userNumber){
         pcPoints++;
 }

     else if(pcNumber<userNumber){
         userPoints++
     }
}

console.log(`Punteggio PC: ${pcPoints}`);
console.log(`Punteggio Utente: ${userPoints}`);


if (pcPoints > userPoints) {
    console.log("Ha vinto il computer!");
} else if (userPoints > pcPoints) {
    console.log("Hai vinto tu!");
} else {
    console.log("È un pareggio!");
}