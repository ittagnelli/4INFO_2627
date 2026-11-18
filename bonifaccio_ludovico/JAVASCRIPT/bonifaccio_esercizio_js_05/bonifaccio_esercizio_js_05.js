console.log("JS caricato correttamente")
function add_studente() {
const ul = document.getElementById("lista"); //prevelo l'oggetto <ul> dal DOM tramite id
const nome_str = document.getElementById("nome").value; //accedo al valore del campo text
const li = document.createElement("li"); //creo un nuovo elemento <li>
const voto_num = document.getElementById("voto").value; //accedo al valore del campo number e lo converto in float
const voto = document.createElement("li");
li.innerText = nome_str; //imposto il testo del list item con il nome inserito dall'utente
voto.innerText = voto_num; //imposto il testo del list item con il voto inserito dall'utente
ul.append(li); //facciamo l'append del nuovo <li> su <ul>
ul.append(voto); //facciamo l'append del nuovo <li> su <ul>
}

function bold() {
    const tr = document.getElementById("tr");
    const td1 = document.getElementById("td1");
    const td2 = document.getElementById("td2");
    tr.style.fontWeight = "bold";
    td1.style.fontWeight = "bold";
    td2.style.fontWeight = "bold";
}