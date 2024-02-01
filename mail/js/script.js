// array di email consentite

const emailConsentite = ["1@email.it", "2@email.it", "3@email.it", "4@email.it", "5@email.it", "6@email.it", "7@email.it", "8@email.it"]

const checkAccessElement = document.getElementById("checkAccess");

// funzione per controllare l'accesso

checkAccessElement.addEventListener("click",
    function () {

        const userEmail = document.getElementById('userEmail').value;

        //variabile per l'esio del controllo
        let accessoConsentito = false;

        // ciclo per verificare che l'email sia corretta
        for (let i = 0; i < emailConsentite.length; i++) {

            if (emailConsentite[i] === userEmail) {
                accessoConsentito = true;
            }
        }

        // otteniamo l'elemento risultato
        const risultatoElement = document.getElementById("risultato");

        if (accessoConsentito) {
            risultatoElement.className = "accesso-consentito";
            risultatoElement.textContent = "Accesso consentito. Benvenuto!";

        } else {
            risultatoElement.className = "accesso-negato";
            risultatoElement.textContent = "Accesso negato, la tua email non è valida!";
        }
    }
)


