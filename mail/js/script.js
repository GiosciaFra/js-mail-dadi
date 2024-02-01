// array di email consentite

const emailConsentite = ["1@email.it", "2@email.it", "3@email.it", "4@email.it", "5@email.it", "6@email.it", "7@email.it", "8@email.it"]

// funzione per controllare l'accesso

function checkAccess(email) {

    const userEmail = document.getElementById('userEmail').value;

    let accessoConsentito;

    // ciclo per verificare che l'email sia corretta
    for (let i = 0; i < emailConsentite.length; i++) {
        if (emailConsentite[i] === userEmail) {
            accessoConsentito = "Consentito!"
        } else {
            accessoConsentito = "Negato!"
        }
    }
}