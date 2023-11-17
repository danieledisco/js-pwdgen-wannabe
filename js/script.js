/*****************************************************
 *  Fase 1
 *  Chiedi all’utente il suo nome,                   
 *  poi chiedi il suo cognome,
 *  poi chiedi il suo colore preferito.
 *  Fase 1 
 *  Scrivi sulla pagina nomecognomecolorepreferito23 *          
 ****************************************************/


/*
 * Componenti per la Fase 1
 *  - Variabili
 *  - Prompt
 *  - console.log per controllare
 */

// Acquisizione dati
const user_name = prompt("Introduci il tuo nome");
const user_surname = prompt("Introduci il tuo cognome");
const user_favorite_color = prompt("Introduci il tuo colore preferito");

// Controllo dati
console.log("Il nome dell'utente è " + user_name);
console.log("Il cognome dell'utente è " + user_surname);
console.log("Il colore preferito dell'utente è " + user_favorite_color);

// Generazione della password
const passwd = user_name + user_surname + user_favorite_color + "23"

// Controllo password
console.log("La password generata è " + passwd);

/*
 * Componenti per la Fase 1
 *  - Variabili
 *  - document
 *  - getElementById
 *  - innerHTML
 */

const messageInPage = document.getElementById("password");
messageInPage.innerHTML = `La nuova password impenetrabile è ${passwd}`