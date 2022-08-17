"use strict";

const hambergeur = document.querySelector(".hamberger-menue");
const hambergeurLine = document.querySelector(".hamberger-menue").querySelectorAll(".line");
console.log(hambergeur)
hambergeur.addEventListener("click" , changelines);



function changelines() {
    let status = true;
    if(status) {
        hambergeurLine.forEach(elem => elem.classList.toggle("cross"))
        status = !status
    }
    else {
        hambergeurLine.forEach(elem => elem.className = "line")
    }
}

