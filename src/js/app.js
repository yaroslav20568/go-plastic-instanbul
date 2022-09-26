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

    /* SWIPER */
    const introSwiper = new Swiper('.intro__swiper', {
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.intro-slide__navigation',
            clickable: true
        },
    });

    const ourDirectionsSwiper = new Swiper('.our-directions__swiper', {
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.our-directions__slide-navigation',
            clickable: true
        },
    });
    /* SWIPER */
});