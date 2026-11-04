function modifica_stile() {
    let l1 = document.getElementsByTagName("h1");
    l1[0].style.color = "Red";
    
    let l2 = document.getElementsByClassName("titoloL2");
    for (let i = 0; i < l2.length; i++) {
        l2[i].style.color = "Blue";
        l2[i].style.backgroundColor = "Yellow";
        l2[i].style.fontSize = "40px";
        l2[i].innerText = l2[i].innerText.toUpperCase();
    }

    document.getElementById("par1").style.color = "Red";
    document.getElementById("par4").style.color = "Red";
    document.getElementById("par2").style.color = "Green";
    document.getElementById("par5").style.color = "Green";
    document.getElementById("par8").style.color = "Green";
    document.getElementById("par3").style.textTransform = "Uppercase";
    document.getElementById("par3").style.backgroundColor = "Cyan";
    document.getElementById("par6").style.textTransform = "Uppercase";
    document.getElementById("par7").style.fontStyle = "Italic";
}