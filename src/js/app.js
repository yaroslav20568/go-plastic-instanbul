import { animations } from './functions/animations.js';

document.addEventListener('DOMContentLoaded', () => {
	/* BURGER */
    const burgerBtn = document.querySelector('.header__burger');

    burgerBtn.addEventListener('click', () => {
        if(burgerBtn.classList.contains('active')) {
            burgerBtn.classList.remove('active')
        } else {
            burgerBtn.classList.add('active')
        }
    });
    /* BURGER */
});