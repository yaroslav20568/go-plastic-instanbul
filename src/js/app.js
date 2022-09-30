import { animations } from './functions/animations.js';

document.addEventListener('DOMContentLoaded', () => {
	/* BURGER */
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.burger-menu');

    burgerBtn.addEventListener('click', () => {
        if(burgerBtn.classList.contains('active')) {
            burgerBtn.classList.remove('active');
            burgerMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            burgerBtn.classList.add('active');
            burgerMenu.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });


    /* BURGER */
    window.addEventListener('resize', () => {
        if(document.body.clientWidth > 900) {
            burgerBtn.classList.remove('active');
            burgerMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    /* NAV */
    const navLinks = document.querySelectorAll('.header-nav__link');

    navLinks.forEach(navLink => {
        if(navLink.nextElementSibling) {
            navLink.classList.add('have-children');
        }

        // navLink.addEventListener('mouseover', () => {
        //     if(navLink.nextElementSibling) {
        //         navLink.nextElementSibling.classList.add('active');
        //     }
        // });

        // navLink.addEventListener('mouseout', () => {
        //     if(navLink.nextElementSibling) {
        //         navLink.nextElementSibling.classList.remove('active');
        //     }
        // });
    })

    const burgerImgs = document.querySelectorAll('.burger-menu__img');

    burgerImgs.forEach(burgerImg => {
        burgerImg.addEventListener('click', () => {
            if(burgerImg.parentElement.nextElementSibling.classList.contains('active')) {
                burgerImg.parentElement.nextElementSibling.classList.remove('active');
                burgerImg.parentElement.classList.remove('active');
                burgerImg.parentElement.nextElementSibling.style.display = 'none';
            } else {
                burgerImg.parentElement.nextElementSibling.classList.add('active');
                burgerImg.parentElement.classList.add('active');
                burgerImg.parentElement.nextElementSibling.style.display = 'block';
            }
        });
    })
    /* NAV */

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
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 6,
        grid: {
            rows: 2
        },
        pagination: {
            el: '.our-directions__slide-navigation',
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                    rows: 1
                },
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                    rows: 2
                },
            },
            // when window width is >= 480px
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                    rows: 2
                },
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 6,
                grid: {
                    rows: 2
                },
            }
        }
    });

    const reviewsSwiper = new Swiper('.reviews__swiper', {
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.reviews__slide-navigation',
            clickable: true
        },
    });

    const blogSwiper = new Swiper('.blog__swiper', {
        speed: 400,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        pagination: {
            el: '.blog__slide-navigation',
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 2,
              slidesPerGroup: 2

            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
        }
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

    tabsBtns.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabsRemoveActive();
            tabAddActive(index);
        })
    });
    /* ACCORDIONS */
});

/* ACCORDIONS-BTNS */
// const accordeonBtns = document.querySelectorAll('.hair-transplantation-steps__btn');
const accordeonBtns = document.querySelectorAll('.btn--circle--green');
const accordeonItemTexts = document.querySelectorAll('.hair-transplantation-steps__item-text');
const accordeonItemTops = document.querySelectorAll('.hair-transplantation-steps__item-top');

accordeonBtns.forEach(accordeonBtn => {
    accordeonBtn.addEventListener('click', () => {
        if(accordeonBtn.classList.contains('active')) {
            accordeonBtn.classList.remove('active');
            accordeonBtn.previousElementSibling.textContent = 'Развернуть';
            accordeonItemTexts.forEach(accordeonItemText => accordeonItemText.classList.remove('show'));
            accordeonItemTexts.forEach(accordeonItemText => accordeonItemText.style.maxHeight = 0);
            accordeonItemTops.forEach(accordeonItemTop => accordeonItemTop.style.marginBottom = 0);
        } else {
            accordeonBtn.classList.add('active');
            accordeonBtn.previousElementSibling.textContent = 'Свернуть';
            accordeonItemTexts.forEach(accordeonItemText => accordeonItemText.classList.add('show'));
            accordeonItemTexts.forEach(accordeonItemText => accordeonItemText.style.maxHeight = accordeonItemText.scrollHeight + 'px');
            accordeonItemTops.forEach(accordeonItemTop => accordeonItemTop.style.marginBottom = '20px');
        }
    });
});
/* ACCORDIONS-BTNS */