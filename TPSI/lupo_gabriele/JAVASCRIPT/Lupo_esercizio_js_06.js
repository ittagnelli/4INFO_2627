function aggiungi_dati() {
    const t_body = document.getElementsByTagName('tbody')
    const name_str = document.getElementById('nome').value
    const media_num = document.getElementById('media').value

    const tr = document.createElement('tr')
    const td_nomi = document.createElement('td')
    const td_media = document.createElement('td')

    td_nomi.innerText = name_str
    tr.append(td_nomi)
    td_media.innerText = media_num 
    tr.append(td_media)
    t_body[0].append(tr)
}

function color() {
    const t_body = document.getElementsByTagName('tbody')
    const rows = t_body[0].children

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 == 0)
            rows[i].classList.add("red")
        else
            rows[i].classList.add("blue")
    }
}

function grassetto() {
    const tabella = document.getElementsByTagName('table')
    const elements = tabella[0].children

    for (let i = 0; i < elements.length; i++)
        elements[i].classList.add("bold")
}

function blu() {
    const tabella = document.getElementsByTagName('table')
    const elements = tabella[0].children

    const t_body = document.getElementsByTagName('tbody')
    const rows = t_body[0].children
    for (let i = 0; i < rows.length; i++)
        rows[i].classList.remove("red")

    for (let i = 0; i < elements.length; i++)
        elements[i].classList.add("blue")
}

function bordo() {
    const td = document.getElementsByTagName('td')

    console.log(td)
    for (let i = 0; i < td.length; i++) 
        td[i].classList.toggle("border")
}