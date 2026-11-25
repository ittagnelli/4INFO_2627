function svuotaCampi() {
    document.getElementById('dipartimento').value = ''
    document.getElementById('cognome').value = ''
    document.getElementById('nome').value = ''
    document.getElementById('mese').value = ''
    document.getElementById('importo').value = ''
}

function get(id) {
    return document.getElementById(id).value
}

function create(what) {
    return document.createElement(what)
}

function aggiungi() {
    let dipartimento = get('dipartimento')
    let cognome = get('cognome')
    let nome = get('nome')
    let mese = get('mese')
    let importo = get('importo')

    if (dipartimento == '' ||
        cognome == '' ||
        nome == '' ||
        mese == '' ||
        importo == '') {
        alert("Riempi tutti i campi")
        return
    }
    let accanto = document.getElementById('accanto')
    let tr = create('tr')

    let tdDipartimento = create('td')
    tdDipartimento.innerText = dipartimento
    let tdCognome = create('td')
    tdCognome.innerText = cognome
    let tdNome = create('td')
    tdNome.innerText = nome
    let tdMese = create('td')
    tdMese.innerText = mese
    let tdImporto = create('td')
    tdImporto.innerText = importo + ' €'
    tdImporto.classList.add('bold')
    tdImporto.classList.add('importo')
    accanto.after(tr)

    tr.append(tdDipartimento, tdCognome, tdNome, tdMese, tdImporto)
    svuotaCampi()
}

function calcolaTotale() {
    let somma = 0
    let importo = document.getElementsByClassName('importo')
    let lunghezza = importo.length-2
    for (let i = 0; i < lunghezza; i++) {
        let num = Number(importo[i].innerText.replace(' €', ''))
        somma = somma + num
    }
    importo[lunghezza].innerText = somma + ' €'
}

function calcolaMedia() {
    let importo = document.getElementsByClassName('importo')
    let lunghezza = importo.length-2
    let somma = importo[lunghezza].innerText.replace(' €', '')
    media = somma / lunghezza
    importo[lunghezza+1].innerText = media + ' €'
}