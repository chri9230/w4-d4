// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheAcquista = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

/* Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione. */

let totaleCarrello = 0

for (let i = 0; i < prices.length; i++) {
  totaleCarrello += prices[i]
}
/* console.log(totaleCarrello) */



if(utenteCheAcquista.isAmbassador) {
  totaleCarrello = totaleCarrello / 1.30
}

if(totaleCarrello < 100) {
  totaleCarrello += shippingCost
}

let totaleCarrelloArrontondato = totaleCarrello.toFixed(2)

console.log(totaleCarrelloArrontondato)



/* if(totaleCarrello < 100) {
  prezzoFinale = totaleCarrello + shippingCost 
} else {
  prezzoFinale = totaleCarrello
}

if(!utente.isAmbassador) {
  prezzoFinale = totaleCarrello / 1.30
} else {
  prezzoFinale = totaleCarrello 
}

console.log(`Il tuo prezzo finale è ${prezzoFinale}`) */

/* if (!utente.isAmbassador && totaleCarrello < 100) {
  prezzoFinale = totaleCarrello += shippingCost
  console.log(`Il tuo costo del carrello è ${prezzoFinale}`)
  
} else if (!utente.isAmbassador && totaleCarrello > 100) {
  prezzoFinale = totaleCarrello
  console.log(`Il tuo costo del carrello è ${prezzoFinale}`)
  
} 
else if (utente.isAmbassador && totaleCarrello < 100) {
  prezzoFinale = totaleCarrello / 1.3 
  prezzoFinale += shippingCost
  console.log(`Il tuo costo del carrello è ${prezzoFinale}`)
  
} else if(utente.isAmbassador && totaleCarrello > 100) {
  prezzoFinale = totaleCarrello / 1.3 
  console.log(`Il tuo costo del carrello è ${prezzoFinale}`)
} 
 */

/* In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador. */

let arrayUtenti = []

arrayUtenti.push(marco, paul, amy)

/* console.log(arrayUtenti) */


for(let i = 0; i < arrayUtenti.length; i++) {
  const utente = arrayUtenti[i]
  console.log(`${utente.name} ${utente.lastName} ${utente.isAmbassador === true ? " is Ambassador" : " is not Ambassador"}`)
}

let arrayAmbassador = []

for(let i = 0; i < arrayUtenti.length; i++) {
  const ambassadorUser = arrayUtenti[i]
  if(ambassadorUser.isAmbassador) {
    arrayAmbassador.push(ambassadorUser)
  }
  
}
console.log(arrayAmbassador)

