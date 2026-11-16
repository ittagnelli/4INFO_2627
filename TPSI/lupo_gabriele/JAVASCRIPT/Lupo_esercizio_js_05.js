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