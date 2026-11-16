function aggiungiStudente() {

    const cognome = document.getElementById("cognome").value;
    const media = document.getElementById("media").value;
    const corpo = document.getElementById("corpo")
    const riga = document.createElement("tr");
    const colonna1 = document.createElement("td");
    const colonna2 = document.createElement("td");
    colonna1.innerText = cognome;
    colonna2.innerText = media;
    corpo.append(riga);
    riga.append(colonna1);
    riga.append(colonna2);

}

function colora() {

    const elementi = document.getElementById("corpo");
    const list = elementi.children;
    for (let i = 1; i < list.length; i++){
        if (i % 2)
            list[i].classList.add("rosso")
        else
            list[i].classList.add("blu")
    }
}