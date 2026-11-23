function svuota() {
    document.getElementById('cognome').value = ''
    document.getElementById('nome').value = ''
    document.getElementById('indirizzo').value = ''
    document.getElementById('telefono').value = ''
}

function salva() {
    const tbody = document.getElementsByTagName('tbody')

    let cognome = document.getElementById('cognome').value
    let nome = document.getElementById('nome').value
    let indirizzo = document.getElementById('indirizzo').value
    let telefono = document.getElementById('telefono').value

    if (cognome != '' &&
        nome != '' &&
        indirizzo != '' &&
        telefono != '') {

        let tr = document.createElement('tr')
        let tdCognome = document.createElement('td')
        let tdNome = document.createElement('td')
        let tdIndirizzo = document.createElement('td')
        let tdTelefono = document.createElement('td')
        let tdButton = document.createElement('td')
        tdButton.colSpan = 2
        let button = document.createElement('button')
        button.innerText = 'Rimuovi'
        button.addEventListener('click', function() {
            tr.remove()
        })

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

function cerca() {
    const ID = Date.now()
    let tr = document.getElementsByTagName('tr')
    let cognome = document.getElementById('cognome').value
    let telefono = document.getElementById('telefono').value
    let pulsante = document.getElementsByClassName('aggiorna')

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
                pulsante[0].id = ID
                
                document.getElementById('cognome').value = td[0].innerText
                document.getElementById('nome').value = td[1].innerText
                document.getElementById('indirizzo').value = td[2].innerText
                document.getElementById('telefono').value = td[3].innerText
                return
            }
        }
        alert('Dato non presente')
    }
}

function aggiorna(evento) {
    const ID = evento.target.id

    if (ID == undefined) {
        alert("Cerca un contatto prima di aggiornarlo")
    }
    else {
        let tr = document.getElementsByTagName('tr')
        let cognome = document.getElementById('cognome').value
        let nome = document.getElementById('nome').value
        let indirizzo = document.getElementById('indirizzo').value
        let telefono = document.getElementById('telefono').value

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