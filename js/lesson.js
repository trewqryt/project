//проверка номера
const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');


//+996550644772
const reqExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', ()=>{
    if (reqExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'Этот номер существует';
        phoneSpan.style.color = 'green';
    }else {
        phoneSpan.innerHTML = 'Этот номер не существует';
        phoneSpan.style.color = 'red';
    }
})


//TAB SLIDER
// TAB SLIDER (фото + описание)

const tabsContentCards = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const tabsItemsParents = document.querySelector('.tab_content_items');

function hideTabs() {
    tabsContentCards.forEach(card => card.style.display = 'none');
    tabsItems.forEach(item => item.classList.remove('tab_content_item_active'));
}

function showTab(i = 0) {
    tabsContentCards[i].style.display = 'flex';
    tabsItems[i].classList.add('tab_content_item_active');
}

hideTabs();
showTab();

let index = 0;
let intervalId;

function startSlider() {
    intervalId = setInterval(() => {
        index = (index + 1) % tabsItems.length;
        hideTabs();
        showTab(index);
    }, 2500);
}

startSlider();

tabsItemsParents.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab_content_item')) {

        clearInterval(intervalId);

        tabsItems.forEach((item, i) => {
            if (item === event.target) {
                hideTabs();
                showTab(i);
                index = i;
                startSlider();
            }
        });
    }
});


// let curretIndex = 0; // Первая вкладка
// let intervalId; //Переменная для хранения интервала

// //Ф-ция для автоматического переключения

// const startAuthoSlider = ()=>{
//     intervalId = setInterval(()=>{
//         hightTabsContentCards();
//         showTabsContentCards(curretIndex);
//         curretIndex = (curretIndex +1) % tabsItems.length;
//     }, 2000); // 2сек
// }
// //Запуск автослайдера
// startAuthoSlider();

// //Остановка слайдера при клике на вкладку

// tabsItemsParents.onclick = (event) => {
//     clearInterval(intervalId);
//     if (event.target.classList.contains('tab_content_item')){
//         tabsItems.forEach((tabItem, tabItemIndex) =>{
//             if(event.target === tabItem){
//                 hightTabsContentCards();
//                 showTabsContentCards(tabItemIndex);
//                 curretIndex = tabItemIndex;
//                 startAuthoSlider();
//             }
//         })
//     }
// }

// Получаем input элементы
// Получаем input элементы
const somInput = document.getElementById("som");
const usdInput = document.getElementById("usd");
const eurInput = document.getElementById("eur");

// Курсы
const usdRate = 87;
const eurRate = 95;

function fromSom() {
    const som = parseFloat(somInput.value) || 0;
    usdInput.value = (som / usdRate).toFixed(2);
    eurInput.value = (som / eurRate).toFixed(2);
}

function fromUsd() {
    const usd = parseFloat(usdInput.value) || 0;
    somInput.value = (usd * usdRate).toFixed(2);
    eurInput.value = ((usd * usdRate) / eurRate).toFixed(2);
}

function fromEur() {
    const eur = parseFloat(eurInput.value) || 0;
    somInput.value = (eur * eurRate).toFixed(2);
    usdInput.value = ((eur * eurRate) / usdRate).toFixed(2);
}

// События
somInput.addEventListener("input", fromSom);
usdInput.addEventListener("input", fromUsd);
eurInput.addEventListener("input", fromEur);


const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

// Массив карточек
const cards = [
    {
        name: "Лев",
        img: "https://static.wikia.nocookie.net/zoology/images/f/f8/%D0%9B%D0%B5%D0%B2.jpg/revision/latest?cb=20150104092022&path-prefix=ru",
        description: "Царь зверей, живет в саваннах Африки."
    },
    {
        name: "Слон",
        img: "https://static.wikia.nocookie.net/copyright-battle/images/5/53/%D0%A1%D0%BB%D0%BE%D0%BD.jpg/revision/latest/scale-to-width-down/700?cb=20210217134306&path-prefix=ru",
        description: "Самое крупное наземное животное с хоботом."
    },
    {
        name: "Панда",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
        description: "Очаровательный медведь, любит бамбук."
    },
    {
        name: "Дельфин",
        img: "https://static.wikia.nocookie.net/thehitchhikersguidetothegalaxy/images/a/a8/Dolphins.jpg/revision/latest?cb=20160409171700&path-prefix=ru",
        description: "Умное морское животное, дружелюбное и веселое."
    },
    {
        name: "Пингвин",
        img: "https://n1s1.hsmedia.ru/67/42/48/67424858b3fd41f8162be11a678ebf81/728x550_1_315c4b77eabfdcc16910bac1185236c6@5000x3780_0xg0uozubI_7742094038909015293.jpg.webp",
        description: "Нелетающая птица, отлично плавает и забавно ходит."
    }
];

let currentCardIndex = 0;

// Функция обновления карточки
function updateCard(index) {
    const data = cards[index];
    card.innerHTML = `
        <img src="${data.img}" alt="${data.name}" style="width:100%; max-width:300px; border-radius:12px; margin-bottom:10px;">
        <h4 style="color: var(--orange); margin-bottom:5px;">${data.name}</h4>
        <p style="color:black;">${data.description}</p>
    `;
}

// Кнопки Prev/Next
btnPrev.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    updateCard(currentCardIndex);
});

btnNext.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCard(currentCardIndex);
});

// Инициализация
updateCard(currentCardIndex);


const cityInput = document.querySelector('.cityName');
const cityElem = document.querySelector('.city');
const tempElem = document.querySelector('.temp');

const apiKey = 'e951ba452ef64a279c7e0659ee0b77d5'; // Вставь сюда свой ключ OpenWeatherMap

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`
        );
        if (!response.ok) throw new Error('Город не найден');

        const data = await response.json();
        cityElem.textContent = `${data.name}, ${data.sys.country}`;
        tempElem.textContent = `${Math.round(data.main.temp)}°C`;
    } catch (error) {
        cityElem.textContent = 'Ошибка';
        tempElem.textContent = '';
        console.error(error);
    }
}

// Событие при нажатии Enter
cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather(cityInput.value);
        cityInput.value = '';
    }
});

