function svuota() {
    document.getElementById('cognome').value = ''
    document.getElementById('nome').value = ''
    document.getElementById('indirizzo').value = ''
    document.getElementById('telefono').value = ''
}

function get(id) {
    return document.getElementById(id).value
}

function create(what) {
    return document.createElement(what)
}

function salva() {
    const ID = Date.now()
    const tbody = document.getElementsByTagName('tbody')

    let cognome = get('cognome')
    let nome = get('nome')
    let indirizzo = get('indirizzo')
    let telefono = get('telefono')

    if (cognome != '' &&
        nome != '' &&
        indirizzo != '' &&
        telefono != '') {

        let tr = create('tr')
        tr.id = ID
        let tdCognome = create('td')
        let tdNome = create('td')
        let tdIndirizzo = create('td')
        let tdTelefono = create('td')
        let tdButton = create('td')
        tdButton.colSpan = 2
        let button = create('button')
        button.innerText = 'Rimuovi'
        button.id = ID
        button.addEventListener('click', rimuovi)

        tdCognome.innerText = cognome
        tr.append(tdCognome)
        tdNome.innerText = nome
        tr.append(tdNome)
        tdIndirizzo.innerText = indirizzo
        tr.append(tdIndirizzo)
        tdTelefono.innerText = telefono
        tr.append(tdTelefono)
        tdButton.appendChild(button)
        tr.append(tdButton)
        tbody[0].append(tr)

        svuota()
    }
    else {
        alert('Riempi tutti i campi')
    }
}
  
function rimuovi(evento) {
    const ID = evento.srcElement.id
    let tr = document.getElementsByTagName('tr')
    for (let i = 2; i < tr.length; i++) {
        if (tr[i].id == ID) {
            tr[i].remove()
        }
    }
}

function cerca() {
    const ID = Date.now()
    let tr = document.getElementsByTagName('tr')
    let cognome = get('cognome')
    let telefono = get('telefono')
    let aggiorna = document.getElementsByClassName('aggiorna')

    if (cognome == '' &&
        telefono == '') {        
        alert("Inserisci il telefono o il cognome per cercare")
    }
    else {
        for (let i = 2; i < tr.length; i++) {
            let td = tr[i].children            
            if (td[0].innerText == cognome || 
                td[3].innerText == telefono) {
                tr[i].id = ID
                aggiorna[0].id = ID
                
                document.getElementById('cognome').value = td[0].innerText
                document.getElementById('nome').value = td[1].innerText
                document.getElementById('indirizzo').value = td[2].innerText
                document.getElementById('telefono').value = td[3].innerText
                let button = td[4].children
                button[0].id = ID
                return
            }
        }
        alert('Dato non presente')
    }
}

function aggiorna(evento) {
    const ID = evento.srcElement.id

    if (ID == '') {
        alert("Cerca un contatto prima di aggiornarlo")
    }
    else {
        let tr = document.getElementsByTagName('tr')
        let cognome = get('cognome')
        let nome = get('nome')
        let indirizzo = get('indirizzo')
        let telefono = get('telefono')

        if (cognome == '' ||
            nome == '' ||
            indirizzo == '' ||
            telefono == '') {
                alert("Riempi tutti i campi per aggiornare")
                return
            }

        for (let i = 2; i < tr.length; i++) {
            if (tr[i].id == ID) {
                let td = tr[i].children
                
                td[0].innerText = cognome
                td[1].innerText = nome
                td[2].innerText = indirizzo
                td[3].innerText = telefono
                svuota()
                return
            }
        }
    }
}