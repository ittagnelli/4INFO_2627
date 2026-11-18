function modifica_stile() {
    // 1. Tutti i titoli di primo livello abbiano un colore di foreground rosso
    let h1List = document.getElementsByTagName("h1");
    for (let i = 0; i < h1List.length; i++) {
        h1List[i].style.color = "red";
    }

    // 2., 3., 4. Tutti i titoli di secondo livello abbiano:
    // - colore di foreground blue su sfondo giallo
    // - dimensione del font pari a 40px
    // - scritti solo in maiuscolo (usa il metodo .toUpperCase())
    let h2List = document.getElementsByTagName("h2");
    for (let i = 0; i < h2List.length; i++) {
        h2List[i].style.color = "blue";
        h2List[i].style.backgroundColor = "yellow";
        h2List[i].style.fontSize = "40px";
        h2List[i].innerText = h2List[i].innerText.toUpperCase();
    }

    // Selezioniamo tutti i paragrafi presenti nel documento
    let pList = document.getElementsByTagName("p");

    // 5. Il primo ed il quarto paragrafo abbiano un colore del testo (foreground) rosso
    if (pList.length >= 1) pList[0].style.color = "red";
    if (pList.length >= 4) pList[3].style.color = "red";

    // 6. Il secondo, quinto e ottavo paragrafo abbiano uno sfondo verde leggero
    if (pList.length >= 2) pList[1].style.backgroundColor = "lightgreen";
    if (pList.length >= 5) pList[4].style.backgroundColor = "lightgreen";
    if (pList.length >= 8) pList[7].style.backgroundColor = "lightgreen";

    // 7. Il terzo paragrafo sia scritto tutto in maiuscolo ed lo sfondo sia un blue leggero
    if (pList.length >= 3) {
        pList[2].style.backgroundColor = "lightblue";
        pList[2].innerText = pList[2].innerText.toUpperCase();
    }

    // 8. Il sesto paragrafo sia scritto tutto in maiuscolo
    if (pList.length >= 6) {
        pList[5].innerText = pList[5].innerText.toUpperCase();
    }

    // 9. Il settimo paragrafo abbia uno stile del font italico
    if (pList.length >= 7) {
        pList[6].style.fontStyle = "italic";
    }
}