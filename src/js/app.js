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

    const clinicsSwiper = new Swiper('.partner-clinics__swiper', {
        speed: 400,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        pagination: {
            el: '.partner-clinics__slide-navigation',
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2
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
const accordeonBtns = document.querySelectorAll('.hair-transplantation-steps .btn--circle--green');
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

/* TABS */
const returnRootTabs = (tabs, index) => {
    const childrenTabsBtns = Array.from(tabs[index].lastElementChild.firstElementChild.firstElementChild.children);
    const childrenTabs = Array.from(tabs[index].lastElementChild.lastElementChild.children);
    console.log(childrenTabsBtns);
    console.log(childrenTabs);

    showTab(childrenTabs, childrenTabsBtns, 0, 'flex');

    childrenTabsBtns.forEach((childrenTabsBtn, index) => {
        if(childrenTabsBtn.classList[0] === 'plastic-surgery-tabs__btn' || childrenTabsBtn.classList[0] === 'plastic-surgery-children-tabs__btn') {
            childrenTabsBtn.addEventListener('click', () => {
                showTab(childrenTabs, childrenTabsBtns, index, 'flex');
            });
        }
    });
};

const hideTabs = (tabs, tabsBtns) => {
    tabsBtns.forEach(tabsBtn => tabsBtn.classList.remove('active'));
    tabs.forEach(tab => tab.style.display = 'none');
}

const showTab = (tabs, tabsBtns, i, displayValue) => {
    hideTabs(tabs, tabsBtns);
    tabsBtns[i].classList.add('active');
    tabs[i].style.display = displayValue;
}

const tabsFunc = (btnsClass, tabsClass) => {
    const tabsBtns = document.querySelectorAll(`.${btnsClass}`);
    const tabs = document.querySelectorAll(`.${tabsClass}`);
    
    // console.log(tabsBtns);
    // console.log(tabs);
    
    showTab(tabs, tabsBtns, 0, 'block');
    returnRootTabs(tabs, 0);
    
    tabsBtns.forEach((tabsBtn, index) => {
        tabsBtn.addEventListener('click', () => {
            showTab(tabs, tabsBtns, index, 'block');
            returnRootTabs(tabs, index);
        });
    });
};

tabsFunc('plastic-surgery-tabs__btn', 'plastic-surgery__tab');

// tabsFunc('plastic-surgery-children-tabs__btn', 'plastic-surgery-children__tab');
/* TABS */

/* SERVICES-ACCORDEON */
const accordeonServicesBtns = document.querySelectorAll('.services-prices-item__btn');
const accordeonServicesContents = document.querySelectorAll('.services-prices-item__elems');

accordeonServicesBtns.forEach((accordeonServicesBtn, index) => {
    accordeonServicesBtn.addEventListener('click', () => {
        if(accordeonServicesBtn.classList.contains('active')) {
            accordeonServicesBtn.classList.remove('active');
            accordeonServicesContents[index].classList.remove('active');
            accordeonServicesContents[index].style.maxHeight = 0;
        } else {
            accordeonServicesBtn.classList.add('active');
            accordeonServicesContents[index].classList.add('active');
            accordeonServicesContents[index].style.maxHeight = accordeonServicesContents[index].scrollHeight + 'px';
        }
    });
})

/* SERVICES-ACCORDEON */