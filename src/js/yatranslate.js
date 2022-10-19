const languageItems = [
	{language: 'ru', code: 'ru'},
    {language: 'en', code: 'en'}
];

languageItems.forEach((languageItem) => {
	document.querySelector('.header-widget__language-list').innerHTML += `
		<a class="header-widget__language-item" data-ya-lang="${languageItem.code}">
		${languageItem.language}
		</a>
	`;
});

const languageBtn = document.querySelector('.header-widget__language');
const languageList = document.querySelector('.header-widget__language-list');

/* WIDGET-LANGUAGE */
const widgetLanguageBtn = document.querySelector('.header__widget-language');
const widgetlanguageText = document.querySelector('.header-widget__language-text');
const btnLanguageItems = document.querySelectorAll('.header-widget__language-item');

widgetLanguageBtn.addEventListener('click', (e) => {
    if(e.target.classList[0] === 'header-widget__language-list') {
        widgetLanguageBtn.classList.remove('active');
    }
    if(widgetLanguageBtn.classList.contains('active')) {
        widgetLanguageBtn.classList.remove('active');
    } else {
        widgetLanguageBtn.classList.add('active');
    }
});

btnLanguageItems.forEach(btnLanguageItem => {
    btnLanguageItem.addEventListener('click', () => {
        btnLanguageItems.forEach(btnLanguageItem => btnLanguageItem.classList.remove('active'));
        btnLanguageItem.classList.add('active');
        widgetlanguageText.textContent = btnLanguageItem.textContent;
    });
})
/* WIDGET-LANGUAGE */

if(JSON.parse(localStorage.getItem('yt-widget'))) {
	const currentLanguage = JSON.parse(localStorage.getItem('yt-widget')).lang;
	const activeLanguageIndex = languageItems.findIndex(languageItem => languageItem.code === currentLanguage);

	const languageElemItems = document.querySelectorAll('.header-widget__language-item');
	languageElemItems[activeLanguageIndex].classList.add('active');
	widgetlanguageText.textContent = currentLanguage;
}




const yatranslate = {
	/* Original language */
	lang: "ru",
	/* The language we translate into on the first visit */
	/* Язык, на который переводим при первом посещении */
	// langFirstVisit: 'en',
};

document.addEventListener('DOMContentLoaded', function () {
	// Start
	yaTranslateInit();
})

function yaTranslateInit() {

	if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {
			/* Если установлен язык перевода для первого посещения и в localStorage нет yt-widget */
			/* If the translation language is installed for the first visit and in localStorage no yt-widget */
			yaTranslateSetLang(yatranslate.langFirstVisit);
	}

	// Подключаем виджет yandex translate
	// Connecting the yandex translate widget
	let script = document.createElement('script');
	script.src = `https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=${yatranslate.lang}&widgetTheme=light&autoMode=false`;
	document.getElementsByTagName('head')[0].appendChild(script);

	// Получаем и записываем язык на который переводим
	// We get and write down the language into which we translate
	let code = yaTranslateGetCode();

	// Показываем текущий язык в меню
	// Show the current language in the menu
	yaTranslateHtmlHandler(code);

	// Вешаем событие клик на флаги
	// We hang the event click on the flags
	yaTranslateEventHandler('click', '[data-ya-lang]', function (el) {
			yaTranslateSetLang(el.getAttribute('data-ya-lang'));
			// Перезагружаем страницу
			// Reloading the page
			window.location.reload();
	})
}

function yaTranslateSetLang(lang) {
	// Записываем выбранный язык в localStorage объект yt-widget 
	// Writing the selected language to localStorage 
	localStorage.setItem('yt-widget', JSON.stringify({
			"lang": lang,
			"active": true
	}));
}

function yaTranslateGetCode() {
	// Возвращаем язык на который переводим
	// Returning the language to which we are translating
	return (localStorage["yt-widget"] != undefined && JSON.parse(localStorage["yt-widget"]).lang != undefined) ? JSON.parse(localStorage["yt-widget"]).lang : yatranslate.lang;
}

function yaTranslateHtmlHandler(code) {
	// Получаем язык на который переводим и производим необходимые манипуляции с DOM
	// We get the language to which we translate and produce the necessary manipulations with DOM 
	document.querySelector('[data-lang-active]').innerHTML = `${code.toUpperCase()}`;
	// document.querySelector(`[data-ya-lang="${code}"]`).remove();
}

function yaTranslateEventHandler(event, selector, handler) {
	document.addEventListener(event, function (e) {
			let el = e.target.closest(selector);
			if (el) handler(el);
	});
}