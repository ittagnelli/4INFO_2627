function svuotaCampi() {
    document.getElementById('item').value = ''
}

function get(id) {
    return document.getElementById(id).value
}

function create(what) {
    return document.createElement(what)
}

function aggiungi() {
    let ID = Date.now()
    let table = document.getElementsByTagName('table')
    let item = get('item')
    let priority = get('priority')

    if (item != '') {
        let tr = create('tr')
        tr.id = ID
        let tdItem = create('td')
        tdItem.colSpan = 2
        tdItem.id = "tdItem"
        let tdPriority = create('td')
        let tdDone = create('td')
        let tdRemove = create('td')

        let remove = create('button')
        remove.addEventListener('click', rimuovi)
        let spanRemove = create('span')
        spanRemove.classList.add('material-symbols-outlined')
        spanRemove.innerText = 'delete'
        spanRemove.id = ID
        remove.append(spanRemove)

        let done = create('button')
        done.addEventListener('click', fatto)
        let spanDone = create('span')
        spanDone.classList.add('material-symbols-outlined')
        spanDone.innerText = 'done_outline'
        spanDone.id = ID
        done.append(spanDone)

        tdItem.innerText = item
        tr.append(tdItem)

        let spanPriority = create('span')
        spanPriority.classList.add('material-symbols-outlined')
        if (priority == "bassa") {
            spanPriority.innerText = 'arrow_downward_alt'
            spanPriority.classList.add('green')
        }
        else if (priority == "media") {
            spanPriority.innerText = 'arrow_right_alt'
            spanPriority.classList.add('orange')
        }   
        else {
            spanPriority.innerText = 'arrow_upward_alt'
            spanPriority.classList.add('red')
        }        
        tdPriority.append(spanPriority)

        tr.append(tdPriority)

        tdDone.appendChild(done)
        tr.append(tdDone)

        tdRemove.appendChild(remove)
        tr.append(tdRemove)

        table[0].append(tr)

        svuotaCampi()
    }
    else {
        alert("Inserisci un elemento")
    }
}

function rimuovi(parametro) {
    let ID = parametro.srcElement.id
    let tr = document.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].id == ID) {
            tr[i].remove()
            return
        }
    }
}

function fatto(parametro) {
    let ID = parametro.srcElement.id
    let tr = document.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].id == ID) {
            let td = tr[i].children
            td[0].classList.toggle('fatto')
            return
        }
    }
}