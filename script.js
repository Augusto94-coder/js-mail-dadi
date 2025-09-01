/* 
Algoritmo esercizio dadi:
1 - Definisco array di stringhe, con mail inventate
2 - Chiedo all'utente di inserire la propria mail tramite prompt
3 - Definisco e inizializzo variabile di controllo a false (caso standard non posso entrare alla festa). Scorro la lista con un for, confrontando con ogni elemento della lista
4 - IF emailUtenti === listainvitati[i]
    - stampa messaggio di successo
    ELSE stampa altro messaggio
*/

let listaInvitati = [
  "asdrubale.rossi@libero.com",
  "anna.pannocchia@libero.com",
  "ivo.avido@libero.com",
  "brunoliegi.bastonliegi@libero.com"
];


let emailUtente = prompt("Inserisci la tua email per accedere alla festa:");


let trovato = false;


for (let i = 0; i < listaInvitati.length; i++) {
  if (emailUtente === listaInvitati[i]) {
    trovato = true;
  }
}


if (trovato) {
  console.log("Benvenuto/a! Puoi entrare alla festa");
  alert("Benvenuto/a! Puoi entrare alla festa");
} else {
  console.log("Spiaze, la tua email non è nella lista degli invitati");
  alert("Spiaze, la tua email non è nella lista degli invitati");
}