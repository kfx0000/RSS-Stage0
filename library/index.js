// console.log("1. Вёрстка валидная +10");
// console.log("2. Вёрстка семантическая +16");
// console.log("\tВ коде страницы присутствуют следующие элементы (указано МИНИМАЛЬНОЕ количество, может быть БОЛЬШЕ):");
// console.log("\t - <header>, <main>, <footer> +2.");
// console.log("\t - шесть элементов <section> (по количеству секций) +2.");
// console.log("\t - только один заголовок <h1> +2. Если элементов <h1> на странице больше одного, считаем это ошибкой.");
// console.log("\t - пять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2.")
// console.log("\t - один элемент <nav> (панель навигации в хедере) +2.");
// console.log("\t - два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.");
// console.log("\t - семь кнопок <button> +2.");
// console.log("\t - два инпута <input> +2.");
// console.log("3. Вёрстка соответствует макету +54");
// console.log("\tблок <header> +8:");
// console.log("\t - Стараемся, чтобы текст совпадал с макетом. Если есть небольшие отклонения, то главное для нас, чтобы расстояние между элементами меню было одинаковое, 30px.");
// console.log("\t - Элементы меню работают как якоря. При нажатии на один из них нас перебросит наверх соответствующего раздела.");
// console.log("\t - Сами элементы меню при наведении (эффект hover) должны быть интерактивными (решайте сами, должны ли они стновиться жирными или подчеркнутыми. Но обязательно курсор должен поменяться на cursor: pointer)");
// console.log("\t - Расстояние от самого меню до иконки пользователя - 40px. Иконка является отдльным элементом, и не входит в <nav>.");
// console.log("\t - Текст \"Brooklyn Public Library\" находится в <h1>.");
// console.log("\tсекция Welcome +4.");
// console.log("\tсекция About +6:");
// console.log("\t - Добавьте все картинки, которые будут использованы в папку с картинками. Даже если отображается всего 3, в папке должны быть все 5.");
// console.log("\t - Расстояния между кнопками пагинации 10px.");
// console.log("\t - Обратите внимание, что кнопки хоть и имеют вид круга, но интерактивная область (область нажатия, выделяемая cursor:pointer) должна быть размером +5px в каждую сторону (круглая, квадратная или со скошенными углами - на ваш выбор). Т.е. это будут прозрачные элементы размерами 26x26, внутри которых будут располагаться непосредственно кнопки 16x16.");
// console.log("\tсекция Favorites +8:");
// console.log("\t - Интерактивные кнопки дожны иметь структуру input type=\"radio\" + label.");
// console.log("\t - Добавьбте небольшую область вокруг кнопки и надписи (например, 5px как в примере секции about) для того, чтобы была возможность легче наводить мышку.");
// console.log("\t - Картинок и описаний - много, для 4х секций. Их стоит добавить в проект. А лучше сразу на страницу, и скрыть с помощью CSS свойств, например display: none;.");
// console.log("\t - Кнопки \"buy\" должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете styleguides.");
// console.log("\t - Кнопка \"own\" не должна быть интерактивной, не должна нажиматься. И на ней должен присутствовать атрибут disabled.");
// console.log("\tсекция CoffeShop +6.");
// console.log("\tсекция Contacts +6:");
// console.log("\t - Карту можно вставить просто картинкой. Добавлять ее отдельным сервисом не обязательно.");
// console.log("\t - Везде, где в тексте встречаются цифры в виде телефонного номера, это должны быть ссылки с типом \"tel\" и номером.");
// console.log("\t - Там, где в тексте встречается текст с именем контактного лица, это должна быть ссылка с типом \"mailto\" и адресом почты (например, AmandaHirst@gmail.com).");
// console.log("\tсекция LibraryCard +8:");
// console.log("\t - \"Find your Library card\" - это должа быть форма с полями input.");
// console.log("\t - Желательно сделать ограничения в полях input на использование только букв и цифр, а также дефиса. Но это правило проверять не нужно.");
// console.log("\t - Все 3 кнопки должны быть интерактивными, плавно менять свой цвет при наведении на них, как указано в макете styleguides.");
// console.log("\t - Хоть иконки из модального окна (Visits, Bonuses, Books) сейчас не нужны будут, можно их добавить в соответствующую папку проекта.");
// console.log("\tблок <footer> +8:");
// console.log("\t - Адрес библиотеки должен быть ссылкой (место на карте, например).");
// console.log("\t - Иконки соцсетей также должны быть ссылками (можете вставить свои соцсети или любые другие аккаунты этих сервисов).");
// console.log("\t - Вместо Username должно быть ваше имя, как оно пишется на английском языке и ссылка на GitHub.");
// console.log("4. Общие требования к верстке +20");
// console.log("\tдля построения сетки используются флексы или гриды (display: flex... или display: grid...) +2.");
// console.log("\tпри уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2. Для этого должна быть обертка вокруш всей страницы, которая выравнивается по центру. Фон за рамками страницы может быть черным, белым или любого оттенка серого.");
// console.log("\tиконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2.");
// console.log("\tизображения добавлены в формате .jpg (.jpeg) или .png +2.");
// console.log("\tесть favicon +2. В макете иконки нет, поэтому можно сгенерировать самому с помощью сервиса favicon-generator. Иконка должна содержать 3 буквы \"BPL\" (Brooklyn Public Library)");
// console.log("\tплавная прокрутка по якорям +2.");
// console.log("\tв футере название ссылки Username заменено и ведет на GitHub студента +2.");
// console.log("\tв футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.");
// console.log("\tинтерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2.");
// console.log("\tобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.");



// console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +26');
// console.log('\t - блок <header> +2');
// console.log('\t - секция Welcome +2');
// console.log('\t - секция `About` +4. Обратите внимание на появление новых элементов в виде стрелок и переход на 5 точек вместо 3х.');
// console.log('\t - ! Не нужно менять расстояние от картинки до точек, нужно оставить 40px. Оценку не снижаем, если сделано по макету (25px).');
// console.log('\t - !!!ВНИМАНИЕ!!! - В работе сделано по макету, специально для тех, кто не читает обновление ТЗ! Чтобы не менялось расстояние, достаточно в style.css закомментировать строку, помеченную комментарием /* !!! margin !!! */');
// console.log('\t - секция Favorites +2');
// console.log('\t - ! Сделать кнопку own, вместо buy для последней книги. Здесь важно будет соблюсти условие, что, какие кнопки находились в состояние "own" на Desktop, те же кнопки в том же состоянии будут и на Tablet. Если условие соблюдено: +2');
// console.log('\t - секция CoffeShop +4');
// console.log('\t - ! Оценка снижаться не будет, если при наложении текста, не будет совпадать расположение букв, расстояние между символами, начало и конец строки, а так же орфография. Будут оцениваться межстрочный интервал, шрифт и центрирование блока с текстом по общим правилам.');
// console.log('\t - секция Contacts +4');
// console.log('\t - секция LibraryCard +4');
// console.log('\t - блок <footer> + 2');
// console.log('2. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12');
// console.log('\t - нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.');
// console.log('\t - элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.');
// console.log('\t - элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.');
// console.log('\t   все что будет происходить на ширине свыше 1440px - не оценивается. Поэтому можно либо растягивать на весь экран, либо оставить центральной колонкой.');
// console.log('3. На ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px, НО НЕ ОБЯЗАТЕЛЬНО! Здесь сделано на ширине 1280px):');
// console.log('\t   если при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем. Иначе:');
// console.log('\t - ! Версия Tablet, отступ иконки юзера от правого края - 105px. Такое же расстояние надо сделать и у открытого меню (сейчас там 92px). Сам крест желательно отцентрировать по поцентральной позиции бургер-иконки. Чтобы при переходе из одного состояния в другое ничего не прыгало. Само меню нужно прижать к правому краю целиком. Если иконка юзера не прыгает (не меняет позиции при открытии меню), независимо от величины отступа: +2');
// console.log('\t - ! Цвет выпавшего меню должен совпадать с цветом полоски навигации. Оценка снижаться не будет, если сделано по первому макету (#000000)');
// console.log('\t - при нажатии на бургер-иконку плавно появляется адаптивное меню +4');
// console.log('\t - при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2');
// console.log('\t - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2');
// console.log('\t - размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2');
// console.log('Итоговая оценка 50/50');


const burger = document.querySelector(".icon-burger");
const nav = document.querySelector(".nav-list");
const profile = document.querySelector(".icon-profile");
const dropMenu = document.querySelector(".dropmenu");
const dropMenuLine1 = document.querySelector("#dropmenu__line1");
const dropMenuLine2 = document.querySelector("#dropmenu__line2");
const loginForm = document.querySelector(".login");
const loginContainer = document.querySelector(".login-container");
const profileForm = document.querySelector(".profile");
const profileContainer = document.querySelector(".profile-container");
const loginClose = document.querySelector(".login-cross");
const profileClose = document.querySelector(".profile-cross");
const loginReg = document.querySelector(".login-register");
const loginCard = document.querySelector("#card-log-in");
const regCard = document.querySelector("#card-sign-up");
const favButtons = document.querySelectorAll(".fav-button");
const carousel = document.querySelector(".about-carousel");
const copyButton = document.querySelector(".profile-card-number-copy");
const checkCardButton = document.querySelector(".card-find-button");

let isLogging = false;
let isLogged = false;
let carouselCurrent = 1;
let userObj = {};

function userCommit() {
    let userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
    for(let i = 0; i < userArr.length; i++) {
        if(userArr[i]["cardNum"] === userObj["cardNum"]) {
            userArr[i]["visits"] = userObj["visits"];
            userArr[i]["bonuses"] = userObj["bonuses"];
            userArr[i]["hasLibCard"] = userObj["hasLibCard"];
            userArr[i]["books"] = userObj["books"];
            break;
        }
    }
    localStorage.setItem("RSS_BPL", JSON.stringify(userArr));
}

function cardFill() {
    document.querySelector("#card-num-visits").textContent = userObj.visits.toString();
    document.querySelector("#card-num-books").textContent = userObj.books.length.toString();
    document.querySelector(".card-find-button").style.display = "none";
    document.querySelector(".card-bg").style.gap = "15px";
    document.querySelector(".card-badges").style.display = "flex";
    document.querySelector(".card-input-txt").value = userObj.userName + " " + userObj.userSurName;
    document.querySelector(".card-input-num").value = userObj.cardNum;
    document.querySelectorAll(".card-input").forEach((x) => {
        x.style.color = "#BB945F";
        x.readOnly = true;
    });
}
function cardRevert () {
    document.querySelector(".card-badges").style.display = "none";
    document.querySelector(".card-bg").style.gap = "20px";
    document.querySelector(".card-find-button").style.display = "block";
    document.querySelectorAll(".card-input").forEach((x) => {
        x.style.color = "#8E8E8E";
        x.readOnly = false;
    });
    document.querySelector(".card-input-txt").value = "";
    document.querySelector(".card-input-num").value = "";
}

// Common function to open Login modal form
function userEvent() {
    loginContainer.classList.add("login-container-visible");
    loginForm.classList.add("login-open");
}

// Log In event
function firstLineEvent() {
    if(isLogged) {
        profileContainer.classList.add("login-container-visible");
        profileForm.classList.add("login-open");
    } else {
        isLogging = true;
        loginForm.style.height = "262px"
        document.querySelector(".login-capt").textContent = "login";
        document.querySelectorAll(".login-input").forEach((x) => x.value = "");
        document.querySelectorAll(".reg").forEach((x) => x.style.display = "none");
        document.querySelector("#reg-fstname-input").required = false;
        document.querySelector("#reg-lstname-input").required = false;
        document.querySelectorAll(".logging").forEach((x) => x.style.display = "block");
        document.querySelector(".login-mail").innerHTML = "E-mail or readers card <input type='text' name='login-email' id='login-email-input' class='login-input' required>";
        document.querySelector(".login-button").textContent = "Log In";
        document.querySelector(".login-bottom-text").textContent = "Don’t have an account?";
        document.querySelector(".login-register").textContent = "Register";
        userEvent();
    }
}

// Sign Up (register) event
function secondLineEvent() {
    if(isLogged) {
        userCommit();
        document.querySelector(".dropmenu__head").textContent = "Profile";
        document.querySelector(".dropmenu__head").style.letterSpacing = "normal";
        document.querySelector(".icon-profile").classList.remove("icon-profile-logged");
        document.querySelector(".icon-profile").classList.add("icon-profile-icon");
        document.querySelector(".icon-profile").textContent = "";
        document.querySelector(".icon-profile").title = "";
        dropMenuLine1.textContent = "Log In";
        dropMenuLine2.textContent = "Register";
        document.querySelector("#card-sign-up").style.display = "block";
        document.querySelector("#card-log-in").textContent = "Log In";
        document.querySelector(".card-get-capt").textContent = "Get a reader card";
        document.querySelector(".card-get-text").textContent = "You will be able to see a reader card after logging into account or you can register a new account";
        cardRevert();
        isLogged = false;
    } else {
        isLogging = false;
        loginForm.style.height = "382px"
        document.querySelector(".login-capt").textContent = "register";
        document.querySelectorAll(".login-input").forEach((x) => x.value = "");
        document.querySelector("#reg-fstname-input").required = true;
        document.querySelector("#reg-lstname-input").required = true;
        document.querySelectorAll(".reg").forEach((x) => x.style.display = "block");
        document.querySelectorAll(".logging").forEach((x) => x.style.display = "none");
        document.querySelector(".login-mail").innerHTML = "E-mail <input type='email' name='login-email' id='login-email-input' class='login-input' required>";
        document.querySelector(".login-button").textContent = "Sign Up";
        document.querySelector(".login-bottom-text").textContent = "Already have an account?";
        document.querySelector(".login-register").textContent = "Login";
        userEvent();
    }
}

function loginProceed() {
    loginContainer.classList.remove("login-container-visible");
    loginForm.classList.remove("login-open");
    let cardNum = "";
    let initials = "";
    let userName = "";
    let userSurName = "";
    let userArr = [];
    if(isLogging) {
        console.log("Logging...");
        let userPass = document.querySelector("#login-pass-input").value;
        let userEmail = document.querySelector("#login-email-input").value;
        userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
        for(let i = 0; i < userArr.length; i++) {
            if(((userArr[i]["cardNum"] === userEmail) || (userArr[i]["userEmail"] === userEmail)) && (userArr[i]["userPass"]) === userPass) {
                userObj = userArr[i];
                isLogged = true;
                break;
            }
        }
        if(isLogged) {
            userObj.visits++;
            userCommit();
            cardNum = userObj.cardNum;
            userName = userObj.userName;
            userSurName = userObj.userSurName;
        }
    } else {
        console.log("Registering...");
        isLogged = true;
        const uRandom = ((4294967296*(Math.ceil(14 * Math.random())) + Math.ceil(4294967295 * Math.random())).toString(16)).toUpperCase();
        cardNum = uRandom;
        userName = document.querySelector("#reg-fstname-input").value;
        userSurName = document.querySelector("#reg-lstname-input").value;

        userObj.userName = userName;
        userObj.userSurName = userSurName;
        userObj.userPass = document.querySelector("#login-pass-input").value;
        userObj.userEmail = document.querySelector("#login-email-input").value;
        userObj.cardNum = cardNum;
        userObj.visits = 1;
        userObj.bonuses = 1240;
        userObj.hasLibCard = false;
        userObj.books = [];

        if(localStorage.getItem("RSS_BPL") === null) localStorage.setItem("RSS_BPL", JSON.stringify(userArr));
        userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
        userArr.push(userObj);
        localStorage.setItem("RSS_BPL", JSON.stringify(userArr));
    }
    if(isLogged) {
        document.querySelector(".dropmenu__head").textContent = cardNum;
        document.querySelector(".dropmenu__head").style.letterSpacing = "-1.3px";
        document.querySelector(".icon-profile").classList.remove("icon-profile-icon");
        document.querySelector(".icon-profile").classList.add("icon-profile-logged");
        initials = (userName.slice(0,1) + userSurName.slice(0,1)).toUpperCase();
        document.querySelector(".icon-profile").textContent = initials;
        document.querySelector(".icon-profile").title = userName + " " + userSurName;
        dropMenuLine1.textContent = "My profile";
        dropMenuLine2.textContent = "Log Out";
        document.querySelector("#card-sign-up").style.display = "none";
        document.querySelector("#card-log-in").textContent = "Profile";
        document.querySelector(".card-get-capt").textContent = "Visit your profile";
        document.querySelector(".card-get-text").textContent = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
        cardFill();
        document.querySelector("#profile-num-visits").textContent = userObj.visits.toString();
        document.querySelector(".profile-initials").textContent = initials;
        document.querySelector(".profile-username").textContent = userObj.userName + " " + userObj.userSurName;
        document.querySelector(".profile-card-number-num").textContent = userObj.cardNum;
        document.querySelector("#profile-num-books").textContent = userObj.books.length.toString();
    }
}

// About carousel rotation
function aboutCarouselRotate(item) {
    document.querySelectorAll(".about-circle").forEach((x) => x.classList.remove("about-circle-selected"));
    document.querySelector(`.circle-${item}`).classList.add("about-circle-selected");
    carousel.style.left = "-" + ((item - 1) * 475) + 'px';
    carouselCurrent = item;
    if(carouselCurrent === 5) document.querySelector(".about-carousel-next").classList.add("about-carousel-inactive");
    else document.querySelector(".about-carousel-next").classList.remove("about-carousel-inactive");
    if(carouselCurrent === 1) document.querySelector(".about-carousel-prev").classList.add("about-carousel-inactive");
    else document.querySelector(".about-carousel-prev").classList.remove("about-carousel-inactive");
}
function aboutCarouselShiftRight() {
    if(carouselCurrent < 5) aboutCarouselRotate(++carouselCurrent);
}
function aboutCarouselShiftLeft() {
    if(carouselCurrent > 1) aboutCarouselRotate(--carouselCurrent);
}
function aboutCarouselResize() {
    if((+window.innerWidth > 1420) && (carouselCurrent > 3)) {
        carouselCurrent = 3; aboutCarouselRotate(carouselCurrent);
    } else if((+window.innerWidth <= 1420) && (+window.innerWidth > 1280) && (carouselCurrent > 4)) {
        carouselCurrent = 4; aboutCarouselRotate(carouselCurrent);
    }
}
window.onresize = aboutCarouselResize;

// Tabs in favorites - fadu out/fade in
function favBookList(item) {
    document.querySelectorAll(".fav-book").forEach((x) => x.classList.add("fbhide"));
    setTimeout(()=>document.querySelectorAll(".fav-book").forEach((x) => x.classList.add("disbl")), 300);
    setTimeout(()=>document.querySelectorAll(`.favb-${item}`).forEach((x) => x.classList.remove("disbl")), 300);
    setTimeout(()=>document.querySelectorAll(`.favb-${item}`).forEach((x) => x.classList.remove("fbhide")), 400);
}
// Check the card & timeout 10sec
function checkTheCard() {
    let userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
    for(let i = 0; i < userArr.length; i++) {
        if((userArr[i]["userName"] + userArr[i]["userSurName"]).toUpperCase() ===
            document.querySelector(".card-input-txt").value.replace(/\s/g,'').toUpperCase()) {
            userObj = userArr[i];
            cardFill();
            setTimeout(() => cardRevert(), 10000);
            break;
        }
    }
}

// Listener to open dropdown menu on User button click
profile.addEventListener("click", () => { dropMenu.classList.toggle("dropmenu-open"); });

// Listeners to open Login modal
dropMenuLine1.addEventListener("click", firstLineEvent);                // On 1st line of dropdown menu
dropMenuLine2.addEventListener("click", secondLineEvent);             // On 2st line of dropdown menu
loginCard.addEventListener("click", firstLineEvent);                    // On Get card Log In button
regCard.addEventListener("click", secondLineEvent);                   // On Get card Sign Up button
favButtons.forEach((x) => x.addEventListener("click", firstLineEvent)); // On every button in Favorites

// Copy button listener
copyButton.addEventListener("click", () => {
    let copyTxt = document.querySelector(".card-input-num");
    copyTxt.select();
    document.execCommand('copy');
});

// Close Login modal on Cross click
loginClose.addEventListener("click", () => {
    loginContainer.classList.remove("login-container-visible");
    loginForm.classList.remove("login-open");
});
profileClose.addEventListener("click", () => {
    profileContainer.classList.remove("login-container-visible");
    profileForm.classList.remove("login-open");
});

// Login / register click
loginReg.addEventListener("click", () => {
    if (isLogging) secondLineEvent(); else firstLineEvent();
});

// Check the card Listener
checkCardButton.addEventListener("click", () => checkTheCard());

// Listener to open burger menu in mobile version
burger.addEventListener("click", () => {
    burger.classList.toggle("icon-burger-open");    // Show cross instead burger in mobile ver
    nav.classList.toggle("nav-list-open");          // Show menu in mobile ver
});

//Document events Listener
document.addEventListener("click", (event) => {
    if ((!(event.target.classList.contains("nav-list"))) &&         // Except .nav-list
        (!(event.target.classList.contains("nav-list-item"))) &&    // Except .nav-list-item (container for links)
        (!(event.target.classList.contains("icon-burger")))) {      // Except icon burger (cross)
        burger.classList.remove("icon-burger-open");            // change icon from cross to burger
        nav.classList.remove("nav-list-open");                  // close menu
    }

    if ((!(event.target.classList.contains("icon-profile"))) &&     // Except icon profile
        (!(event.target.classList.contains("dropmenu"))) &&         // Except click inside dropdown menu
        (!(event.target.classList.contains("dropmenu__head"))))     // Except click on header of dropdown menu
        dropMenu.classList.remove("dropmenu-open");             // close dropdown menu

    if (event.target.classList.contains("login-container")) {       // Close Login modal on click to faded container
        loginContainer.classList.remove("login-container-visible");
        loginForm.classList.remove("login-open");
    }
    if (event.target.classList.contains("profile-container")) {       // Close Login modal on click to faded container
        profileContainer.classList.remove("login-container-visible");
        profileForm.classList.remove("login-open");
    }
    if (event.target.classList.contains("abtn-1") || event.target.classList.contains("circle-1")) {
        aboutCarouselRotate(1);
    } else if (event.target.classList.contains("abtn-2") || event.target.classList.contains("circle-2")) {
        aboutCarouselRotate(2);
    } else if (event.target.classList.contains("abtn-3") || event.target.classList.contains("circle-3")) {
        aboutCarouselRotate(3);
    } else if (event.target.classList.contains("abtn-4") || event.target.classList.contains("circle-4")) {
        aboutCarouselRotate(4);
    } else if (event.target.classList.contains("abtn-5") || event.target.classList.contains("circle-5")) {
        aboutCarouselRotate(5);
    } else if (event.target.classList.contains("about-carousel-next")) aboutCarouselShiftRight();
    else if (event.target.classList.contains("about-carousel-prev")) aboutCarouselShiftLeft();
    if (event.target.classList.contains("favr-1")) {
        favBookList(1);
    } else if (event.target.classList.contains("favr-2")) {
        favBookList(2);
    } else if (event.target.classList.contains("favr-3")) {
        favBookList(3);
    } else if (event.target.classList.contains("favr-4")) {
        favBookList(4);
    }
    if (event.target.classList.contains("login-button")) loginProceed();
    console.log(event.target.classList);
}
);
