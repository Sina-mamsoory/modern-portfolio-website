"use strict";

const hambergeur = document.querySelector(".hamberger-menue");
const hambergeurLine = document.querySelector(".hamberger-menue").querySelectorAll(".line");
const navbar = document.querySelector('nav').querySelector('ul');
const navItems = document.querySelector('nav').querySelector('ul').querySelectorAll('li');
const headerImage = document.querySelector('nav').querySelector('.header-portrait');

let setMenue = false

hambergeur.addEventListener("click" , toggleMenu);

function toggleMenu() {

        if(!setMenue){
                hambergeurLine.forEach(elem => elem.classList.add("cross"));
                navbar.classList.add('show');
                headerImage.classList.add('show');
                navItems.forEach(items => items.classList.add('show'));
                navbar.style.display = 'flex';
                headerImage.style.display = 'flex';
                setMenue = true;
        }
        else {
            hambergeurLine.forEach(elem => elem.classList.remove("cross"));
            navbar.classList.remove('show')
            headerImage.classList.remove('show');
            navItems.forEach(items => items.classList.remove('show'));
            setMenue = false;
        }
}

