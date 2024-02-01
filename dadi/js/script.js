function avviaGioco() {

let sceltaUtente = Math.floor(Math.random() * 6 + 1);
let sceltaCpu = Math.floor(Math.random() * 6 + 1);


const sceltaUtenteElement = document.querySelector ('#sceltaUtente');
const sceltaCpuElement = document.querySelector('#sceltaCpu');
const risultatoElement = document.querySelector('#risultato');

sceltaUtenteElement.textContent = "Il numero generato per te è : " + sceltaUtente;
sceltaCpuElement.innerHTML = "Il numero generato per il tuo avversario è : " + sceltaCpu;

if (sceltaUtente > sceltaCpu) {
    risultatoElement.innerHTML = "Hai Vinto! :)";
} else if (sceltaCpu > sceltaUtente) {
    risultatoElement.innerHTML = "Hai Perso! :(";
} else {
    risultatoElement.innerHTML = "Pareggio! :/";
}

}

const avviaGiocoButton = document.querySelector ('#avviaGioco');
avviaGiocoButton.addEventListener('click', avviaGioco);







