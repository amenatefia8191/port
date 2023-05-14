'use strict';

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('stickY', window.scrollY > 10)
});


let navList = document.querySelector('.navList');
let menu = document.querySelector('#menu-icon');

menu.onclick = () => {
    menu.classList.toggle('bx-bx');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-bx');
    navList.classList.remove('open');
}


