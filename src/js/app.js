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

    const reviewsSwiper = new Swiper('.reviews__swiper', {
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.reviews__slide-navigation',
            clickable: true
        },
    });
    /* SWIPER */

    /* ACCORDIONS */
    const tabs = document.querySelectorAll('.stages-work__tab');
    const tabsBtns = document.querySelectorAll('.stages-work-tab__btn');

    const tabsRemoveActive = () => {
        tabs.forEach(tab => tab.classList.remove('active'));
    }

    const tabAddActive = (index) => {
        tabs[index].classList.add('active');

        // if(index === 0) {
        //     tabs[index + 1].firstElementChild.style.borderWidth = '2px 2px 2px 2px';
        // }
        // tabs[index - 1].firstElementChild.style.borderWidth = '2px 0px 2px 2px';
        // if(index + 1 === tabs.length) {
        //     tabs[index - 1].firstElementChild.style.borderWidth = '2px 2px 2px 2px';
        // } else {
        //     tabs[index - 1].firstElementChild.style.borderWidth = '2px 0px 2px 2px';
        // }
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabsRemoveActive();
            tabAddActive(index);
        })
    });
    /* ACCORDIONS */
});