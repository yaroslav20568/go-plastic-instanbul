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

    /* FORMS */
    const validateInputs = (inputs) => {
        let k = 0;

        inputs.forEach(input => {
            if(!input.value) {
                input.style.border = '1px solid red';
            } else {
                if(input.name === 'name' && /^[a-zA-Zа-яА-ЯёЁ ]+$/.test(input.value)) {
                    k++;
                    input.style.border = '1px solid #000';
                } else if(input.name === 'phone' && /^[0-9]{7,7}$/.test(input.value)) {
                    k++;
                    input.style.border = '1px solid #000';
                } else if(input.name === 'email' && /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i.test(input.value)) {
                    k++;
                    input.style.border = '1px solid #000';
                } else if(input.name === 'message') {
                    k++;
                    input.style.border = '1px solid #000';
                } else {
                    k--;
                    input.style.border = '1px solid red';
                }
            }
        });

        return k;
    };

    const resetInputs = (inputs) => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    const sendData = (k, inputs, formClass) => {
        if(inputs.length === k) {
            const form = document.querySelector(`.${formClass}`);
            let formData = new FormData(form); 
            console.log(form);

            const formAlert = document.querySelector('.form-alert');
            const alertCloseBtn = document.querySelector('.form-alert__close');

            alertCloseBtn.addEventListener('click', () => {
                formAlert.classList.remove('active');
            });

            fetch('assets/sendMail.php', {
                method: 'POST',
                body: formData
            }).then(resp => {
                resetInputs(inputs);
                formAlert.classList.add('active');

                if(formClass === 'contacts-modal__form') {
                    document.querySelector('.contacts-modal').classList.remove('modal--active');
                    document.body.style.overflow = 'auto';
                }
            })
        }
    }

    const formFunction = (formClass, btnClass) => {
        const inputs = document.querySelectorAll(`.${formClass} input[type="text"], .${formClass} textarea`);
        const btn = document.querySelector(`.${btnClass}`);
        
        if(btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
    
                const k = validateInputs(inputs);
    
                sendData(k, inputs, formClass);
            });
    
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    validateInputs(inputs);
                });
            });
        }
    };

    formFunction('write-us__form', 'write-us__form-btn');
    formFunction('about-us-feedback__form', 'about-us-feedback-form__btn');
    formFunction('contacts-feedback__form', 'contacts-feedback-form__btn');
    formFunction('contacts-modal__form', 'contacts-modal-form__btn');
    /* FORMS */

    /* SCROLL-TO */
    const aboutBtnScroll = document.querySelector('.about-us-company__link');

    aboutBtnScroll.addEventListener('click', () => {
        const scrollToNumber = document.querySelector('.about-us-connection').getBoundingClientRect().y + window.pageYOffset;

        window.scrollTo({
            top: scrollToNumber,
            behavior: "smooth"
        });
    });
    /* SCROLL-TO */
});


/* READ-MORE-BTN */
if(document.querySelector('.medical-info-single') && document.querySelector('.read-more__text')) {
    const readMoreText = document.querySelector('.read-more__text');
    readMoreText.style.display = 'none';

    const readMoreBtn = document.querySelector('.medical-info-single .btn--circle--green');
    console.log(readMoreBtn);

    readMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(!readMoreBtn.classList.contains('active')) {
            readMoreBtn.classList.add('active');
            readMoreText.style.display = 'block';
        } else {
            readMoreBtn.classList.remove('active');
            readMoreText.style.display = 'none';
        }
    });
}
/* READ-MORE-BTN */

/* MODAL */
const modalBtns = document.querySelectorAll('.consult-btn');
const closebtn = document.querySelector('.modal__close');
const modal = document.querySelector('.contacts-modal');

modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', () => {
        modal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
    });
});

closebtn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target.parentElement === modal) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = 'auto';
    }
});
/* MODAL */

/* ACCORDIONS-BTNS */
// const accordeonBtns = document.querySelectorAll('.hair-transplantation-steps__btn');
const accordeonBtns = document.querySelectorAll('.medical-steps .btn--circle--green');
const accordeonItemTexts = document.querySelectorAll('.medical-steps__item-text');
const accordeonItemTops = document.querySelectorAll('.medical-steps__item-top');

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

const plasticSurgeryTabs = (sectionClass, btnsClass, tabsClass) => {
    const tabsBtns = document.querySelectorAll(`.${sectionClass} .${btnsClass}`);
    const tabs = document.querySelectorAll(`.${sectionClass} .${tabsClass}`);
    console.log(sectionClass);
    
    // console.log(tabsBtns);
    console.log(tabs);
    
    if(tabsBtns.length && tabsBtns.length !== 1) {
        tabsBtns.forEach(tabsBtn => tabsBtn.classList.remove('active'));
        tabs.forEach(tab => tab.style.display = 'none');

        tabsBtns[0].classList.add('active');
        tabs[0].style.display = 'flex';

        tabsBtns.forEach((tabsBtn, index) => {
            tabsBtn.addEventListener('click', () => {
                tabsBtns.forEach(tabsBtn => tabsBtn.classList.remove('active'));
                    tabs.forEach(tab => tab.style.display = 'none');
                    
                    tabsBtns[index].classList.add('active');
                    tabs[index].style.display = 'flex';
            });
        });
    }
};
const sectionItems = document.querySelectorAll('.plastic-surgery-dir__tab');
sectionItems.forEach(sectionItem => plasticSurgeryTabs(sectionItem.classList[2], 'plastic-surgery-dir-children-tabs__btn', 'plastic-surgery-dir-children__tab'));

/* TABS */
function returnRootTabs(tabs, index, sectionClass) {
    const childrenTabsBtns = Array.from(tabs[index].lastElementChild.firstElementChild.firstElementChild.children);
    const childrenTabs = Array.from(tabs[index].lastElementChild.lastElementChild.children);
    // console.log(childrenTabsBtns);
    // console.log(childrenTabs);

    showTab(childrenTabs, childrenTabsBtns, 0, 'flex');

    childrenTabsBtns.forEach((childrenTabsBtn, index) => {
        if(childrenTabsBtn.classList[0] === `${sectionClass}-tabs__btn` || childrenTabsBtn.classList[0] === `${sectionClass}-children-tabs__btn`) {
            childrenTabsBtn.addEventListener('click', () => {
                showTab(childrenTabs, childrenTabsBtns, index, 'flex');
            });
        }
    });
};

function hideTabs(tabs, tabsBtns) {
    tabsBtns.forEach(tabsBtn => tabsBtn.classList.remove('active'));
    tabs.forEach(tab => tab.style.display = 'none');
}

function showTab(tabs, tabsBtns, i, displayValue) {
    hideTabs(tabs, tabsBtns);
    tabsBtns[i].classList.add('active');
    tabs[i].style.display = displayValue;
}

const tabsFunc = (sectionClass, btnsClass, tabsClass) => {
    const tabsBtns = document.querySelectorAll(`.${btnsClass}`);
    const tabs = document.querySelectorAll(`.${tabsClass}`);
    console.log(btnsClass);
    
    // console.log(tabsBtns);
    // console.log(tabs);
    
    showTab(tabs, tabsBtns, 0, 'block');
    returnRootTabs(tabs, 0, sectionClass);
    
    tabsBtns.forEach((tabsBtn, index) => {
        tabsBtn.addEventListener('click', () => {
            showTab(tabs, tabsBtns, index, 'block');
            returnRootTabs(tabs, index, sectionClass);
        });
    });
};

tabsFunc('plastic-surgery', 'plastic-surgery-tabs__btn', 'plastic-surgery__tab');
tabsFunc('hair-transplantation', 'hair-transplantation-tabs__btn', 'hair-transplantation__tab');
tabsFunc('bariatrics', 'bariatrics-tabs__btn', 'bariatrics__tab');
tabsFunc('dentistry', 'dentistry-tabs__btn', 'dentistry__tab');
tabsFunc('reproductive-medicine', 'reproductive-medicine-tabs__btn', 'reproductive-medicine__tab');
tabsFunc('organ-trasplantation', 'organ-trasplantation-tabs__btn', 'organ-trasplantation__tab');
tabsFunc('oncology', 'oncology-tabs__btn', 'oncology__tab');
tabsFunc('orthopedics', 'orthopedics-tabs__btn', 'orthopedics__tab');
tabsFunc('laser-vision-correction', 'laser-vision-correction-tabs__btn', 'laser-vision-correction__tab');
/* TABS */