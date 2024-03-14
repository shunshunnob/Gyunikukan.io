'use strict';
const btn = document.querySelector('#btn-menu');
const nav = document.querySelector('#header-nav-list');
const navitem1 = document.querySelector('#menu-nav');
const navitem2 = document.querySelector('#seat-nav');
const navitem3 = document.querySelector('#store-info-nav');



btn.addEventListener('click', () =>{
    nav.classList.toggle('open-menu')
});
btn.addEventListener('click', () =>{
    btn.classList.toggle('open-menu')
});
btn.addEventListener('click', () =>{
    btn.classList.toggle('close-menu')
});
navitem1.addEventListener('click', () =>{
    nav.classList.toggle('open-menu')
});
navitem1.addEventListener('click', () =>{
    btn.classList.toggle('close-menu')
});
navitem1.addEventListener('click', () =>{
    btn.classList.toggle('open-menu')
});
navitem2.addEventListener('click', () =>{
    nav.classList.toggle('open-menu')
});
navitem2.addEventListener('click', () =>{
    btn.classList.toggle('close-menu')
});
navitem2.addEventListener('click', () =>{
    btn.classList.toggle('open-menu')
});
navitem3.addEventListener('click', () =>{
    nav.classList.toggle('open-menu')
});
navitem3.addEventListener('click', () =>{
    btn.classList.toggle('close-menu')
});
navitem3.addEventListener('click', () =>{
    btn.classList.toggle('open-menu')
});
