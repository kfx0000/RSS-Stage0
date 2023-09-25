console.log(`
1. Вёрстка +10
    - на странице есть несколько фото и строка поиска +5
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При загрузке приложения на странице отображаются полученные от API изображения +10
3. Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10
4. Поиск +30
    - при открытии приложения курсор находится в поле ввода +5
    - есть placeholder +5
    - автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5
    - поисковый запрос можно отправить нажатием клавиши Enter +5
    - после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5
    - в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5
5. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
    - высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо
По сравнению с демо:
    - Добавлено стирание поля ввода по клавише ESC. Также при этом происходит позиционирование на самый верх страницы
    - При клике по картинке, ее оригинальное изображение откроется в новой вкладке
    - Курсор позиционируется в поле ввода также и после очистки этого поля
    - В мобильной версии (от 768px и ниже) в поле ввода добавлен значок "Лупа" для осуществления поиска

Score: 70/60`);

const imgContainer = document.querySelector(".main__container");
const imgSearch = document.querySelector(".header__search");

const url_head = "https://api.unsplash.com/search/photos?query=";
const url_trail = "&per_page=30&orientation=landscape&client_id=hZjJHj01nnqfuSx1eMF0SqX9o6WsMYqtmQKwkLGIQns";

async function getData(tags) {
    const res = await fetch(url_head + tags + url_trail);
    const data = await res.json();
    for(let i = 0; i < (data.results.length < 24 ? data.results.length : 24); i++) {
        placeImg(data.results[i].urls.small, data.results[i].urls.full, tags);
    }
}

function placeImg(img_url, img_link, tags) {
    let href = document.createElement("a");
    href.href = img_link;
    href.classList.add("main__a");
    href.target = "_blank";
    imgContainer.append(href);
    let img = document.createElement("img");
    img.classList.add("main__img");
    img.src = img_url;
    img.alt = tags;
    // let img = document.createElement("span");
    // img.classList.add("main__image");
    // img.style.background = `url('${img_url}') center/cover no-repeat`;
    img.addEventListener("click", () => imgSearch.focus());
    href.append(img);
}

function doSearch() {
    if(imgSearch.value.trim()) {
        document.querySelectorAll(".main__img").forEach((x) => x.remove());
        document.querySelectorAll(".main__a").forEach((x) => x.remove());
        getData(imgSearch.value.trim());
    }
}

function doClear() {
    document.querySelector('#search').value = '';
    imgSearch.focus();
}

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) doSearch(); else
    if(e.keyCode === 27) {
        window.scrollTo(0, 0);
        doClear();
    }
});

window.onload = () => getData("Autumn");