function add_studente() {
    let nome = document.getElementById("nome").value;
    let voto = document.getElementById("voto").value;

    if (nome === "" || voto === "") {
        alert("Inserisci sia il nome che il voto!");
        return;
    }

    let tabella = document.getElementById("tabellaStudenti");
    let nuovaRiga = tabella.insertRow();

    let cellaNome = nuovaRiga.insertCell(0);
    let cellaVoto = nuovaRiga.insertCell(1);

    cellaNome.innerText = nome;
    cellaVoto.innerText = voto;

    document.getElementById("nome").value = "";
    document.getElementById("voto").value = "";
}

function toggleGrassetto() {
    let elementi = document.querySelectorAll("#tabellaStudenti th, #tabellaStudenti td");
    for (let i = 0; i < elementi.length; i++) {
        elementi[i].classList.toggle("grassetto");
    }
}

function toggleBlue() {
    let elementi = document.querySelectorAll("#tabellaStudenti th, #tabellaStudenti td");
    for (let i = 0; i < elementi.length; i++) {
        elementi[i].classList.toggle("testo-blue");
    }
}

function toggleBordo() {
    let tabella = document.getElementById("tabellaStudenti");
    tabella.classList.toggle("bordo-tabella");
}