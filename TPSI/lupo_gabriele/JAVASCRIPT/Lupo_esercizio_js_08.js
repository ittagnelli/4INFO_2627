function svuotaCampi() {
    document.getElementById('item').value = ''
}

function aggiungi() {
    let table = document.getElementsByTagName('table')
    let item = document.getElementById('item').value
    let priority = document.getElementById('priority').value

    if (item != '') {
        let tr = document.createElement('tr')
        let tdItem = document.createElement('td')
        tdItem.colSpan = 2
        tdItem.id = "tdItem"
        let tdPriority = document.createElement('td')
        let tdDone = document.createElement('td')
        let tdRemove = document.createElement('td')

        let remove = document.createElement('button')
        remove.innerHTML = '<span class="material-symbols-outlined">delete</span>'
        remove.addEventListener('click', function() {
            tr.remove()
        })

        let done = document.createElement('button')
        done.innerHTML = '<span class="material-symbols-outlined">done_outline</span>'
        done.addEventListener('click', function() {
            tdItem.classList.toggle('fatto')
        })

        tdItem.innerText = item
        tr.append(tdItem)

        if (priority == "bassa") {
            tdPriority.innerHTML = '<span class="material-symbols-outlined green">arrow_downward_alt</span>'
        }
        else if (priority == "media") {
            tdPriority.innerHTML = '<span class="material-symbols-outlined orange">arrow_right_alt</span>'
        }   
        else {
            tdPriority.innerHTML = '<span class="material-symbols-outlined red">arrow_upward_alt</span>'
        }        
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