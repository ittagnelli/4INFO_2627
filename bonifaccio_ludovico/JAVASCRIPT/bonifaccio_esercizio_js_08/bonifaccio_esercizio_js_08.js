// La lista che contiene tutti i nostri impegni (lo "Stato" dell'app)
let elencoImpegni = [];

// CORRETTO: Adesso i nomi coincidono perfettamente con gli ID dell'HTML
const casellaTesto = document.getElementById("casellaTesto");
const tendinaPriorita = document.getElementById("tendinaPriorita");
const bottoneAggiungi = document.getElementById("bottoneAggiungi");
const listaHtml = document.getElementById("listaHtml");

// 1. Funzione che disegna la lista sullo schermo leggendo i dati dall'array
function mostraImpegni() {
    // Svuota la lista HTML per evitare duplicati prima di ridisegnarla
    listaHtml.innerHTML = "";

    // Cicliamo ogni singolo impegno presente nell'elenco
    for (let indice = 0; indice < elencoImpegni.length; indice++) {
        let impegnoCorrente = elencoImpegni[indice];

        // Scegliamo l'icona e il colore in base alla priorità scelta
        let iconaFreccia = "";
        let classeColore = "";
        
        if (impegnoCorrente.priorita === "Alta") {
            iconaFreccia = "fa-arrow-up";
            classeColore = "priority-alta";
        } else if (impegnoCorrente.priorita === "Media") {
            iconaFreccia = "fa-arrow-right";
            classeColore = "priority-media";
        } else {
            iconaFreccia = "fa-arrow-down";
            classeColore = "priority-bassa";
        }

        // Creiamo il tag <li> per il nuovo elemento della lista
        let elementoLista = document.createElement("li");
        elementoLista.className = "todo-item";

        // Se l'impegno è completato, aggiungiamo la classe per barrare il testo
        let classeTesto = impegnoCorrente.completato ? "todo-text completed" : "todo-text";

        // Inseriamo la struttura HTML dentro l'elemento della lista
        elementoLista.innerHTML = `
            <span class="${classeTesto}">${impegnoCorrente.testo}</span>
            <div class="actions">
                <span><i class="fa-solid ${iconaFreccia} ${classeColore}"></i></span>
                <button class="complete-btn" onclick="cambiaStato(${indice})">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="delete-btn" onclick="eliminaImpegno(${indice})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

        // Aggiungiamo il pezzo creato alla lista principale nella pagina
        listaHtml.appendChild(elementoLista);
    }
}

// 2. Funzione per aggiungere un nuovo impegno
function aggiungiImpegno() {
    let testoInserito = casellaTesto.value.trim();
    let prioritaSelezionata = tendinaPriorita.value;

    // Se l'utente non ha scritto nulla, mostriamo un avviso e ci fermiamo
    if (testoInserito === "") {
        alert("Inserisci un testo per il ToDo!");
        return;
    }

    // Aggiungiamo il nuovo impegno in fondo all'array
    elencoImpegni.push({
        testo: testoInserito,
        priorita: prioritaSelezionata,
        completato: false
    });

    // Svuotiamo la casella di scrittura e aggiorniamo la schermata
    casellaTesto.value = "";
    mostraImpegni();
}

// 3. Funzione per invertire lo stato (da attivo a completato e viceversa)
function cambiaStato(indice) {
    // Inverte il valore booleano (se era false diventa true, e viceversa)
    elencoImpegni[indice].completato = !elencoImpegni[indice].completato;
    mostraImpegni();
}

// 4. Funzione per eliminare un impegno dall'elenco
function eliminaImpegno(indice) {
    // Rimuove 1 elemento dalla posizione indicata
    elencoImpegni.splice(indice, 1);
    mostraImpegni();
}

// Colleghiamo l'azione al click sul bottone "+" e alla pressione del tasto "Invio"
bottoneAggiungi.addEventListener("click", aggiungiImpegno);
casellaTesto.addEventListener("keypress", function(evento) {
    if (evento.key === "Enter") {
        aggiungiImpegno();
    }
});

// Chiamata iniziale per mostrare i dati all'avvio
mostraImpegni();