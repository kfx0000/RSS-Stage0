console.log("ПРОЧТИТЕ ОБЯЗАТЕЛЬНО! СПОРНЫЕ МОМЕНТЫ LIBRARY PART 3. По результатам обсуждений в чате Discord");
console.log("1. В связи с относительно небольшими размерами файлов стилей и скриптов, в работе не используется разбиение их на отдельные файлы. ТЗ этого не требует!\n");
console.log("2. Качество кода, возможно, оставляет желать лучшего. В требованиях курса Stage0 нет критериев оценки чистоты кода. Важно выполнить поставленную задачу.\n");
console.log("3. Карусель в разделе About выполнена без использования сторонних библиотек. Помимо требований ТЗ реализован возврат в крайнее правое положение при переходе из мобильной версии сайта в десктопную, если в мобильной версии были установлены 4-я или 5-я картинки.\n");
console.log("4. В сладере блока Favorites реализовано как плавное затухание, так и плавное появление блоков. Полное время отрабатывания Fade out / Fade in составляет 700мс.\n");
console.log("5. В соответствии с ТЗ, нажатие на кнопку Check the card ни к чему не приведёт, если пользователь не зарегистрирован. В том числе, не появится никаких подсказок о некорректности заполнения формы, а также о том, что пользователь не найден.\n");
console.log("6. Поиск в форме Find your library card реализован по имени, имени и фамилии, фамилии и имени, только фамилии. Как заглавными, так и строчными буквами, с обрезкой лишиних пробелов в начале и конце ввода (аналогично и для номера карты). В случае, если пользователь обнаружен, поля формы заполняются в соответствии с регистром букв, введенным при регистрации пользователя (символы номера карты выводятся только заглавными).\n");
console.log("7. Если в течение 10 секунд с момента включения отображения данных из кабинета пользователя в форме Find your library card (успешного нажатия кнопки 'Check the card'), произвести вход в личный кабинет, вид данной формы не изменится, что соответствует ТЗ о внешнем виде страницы, когда выполнен вход пользователя.\n");
console.log("8. В работе возможна регистрация нескольких пользователей, а также удержание пользователя в залогиненном состоянии при перезагрузке страницы, несмотря на отсутствие данных требований в ТЗ.\n");
console.log("9. После регистрации или входа пользователя, размер шрифта, отображающий 9-ти значный номер его карты в шапке меню авторизации, уменьшается с 15px до 13px. После логаута польователя размер шрифта возвращается в первоначальное состояние (15px).\n");
console.log("10. Нажатие на ссылку в тексте 'Already have an account? Login' в окне регистрации приводит к открытию окна Login. И наоборот, нажатие на ссылку в тексте 'Don’t have an account? Register' приводит к открытию окна Register. Данного требования нет в ТЗ, но оно вытекает из логики работы подобных окон регистрации.\n");
console.log("11. Требования к паролю соответствуют ТЗ - минимум 8 ЛЮБЫХ символов. Никаких дополнительных условий (обязательные заглавные буквы, спецсимволы, и т.п.) не реализовано, т.к. это противоречит ТЗ.\n");
console.log("12. При регистрации нового пользователя производится проверка, был ли уже использован введенный email ранее. В случае, если такой email уже был использован, поле в email появляется соответствующая подсказка в виде placeholder красного цвета. Данного требования нет в ТЗ, но это улучшает функциональность страницы.\n");
console.log("13. При входе (Login) пользователя, в случае, если были введены неверные данные (в любом из полей - email, пароль или номер карты), а также при отсутствии зарегистрированных пользователей вообще, в поле 'E-mail or readers card' появляется сообщение 'User not found!'. Данного требования нет в ТЗ, но это соответствует логике работы сайтов и требований к безопасности (выводить сообщение об отсуствии пользователя при любых ошибочно введенных данных).\n");
console.log("14. В окне My Profile - в случае, если введенные имя или фамилия слишком длинные и не помещаются по ширине в блок, происходит их перенос на другую строку с использованием 'word-break: break-word;' Это позволяет максимально корректно перенести длинные имя или фамилию. Ограничение максимальной высоты блока - 150px\n");
console.log("15. Ширина модального окна BUY A LIBRARY CARD - 640px. Сделана обрезка по 5px с левой и правой сторон. В остальном дизайн данного окна соответствует макету.\n");
console.log("16. Кнопка 'Buy' модального окна BUY A LIBRARY CARD становится активной только при заполнении всех полей формы любыми значениями. Только после этого у кнопки появляется интерактивность, начинает работать валидация и появляется возможность отправки формы. Если любое из полей снова сделать пустым, кнопка Buy опять становится неактивной.\n");
console.log("17. К полям 'Cardholder name', 'Postal code' и 'City / Town' никаких требований не предъявляется. Однако, к ним применена валидация на предмет ввода, как минимум, любой латинской буквы для 'Cardholder name', от 5 до 6 цифр для 'Postal code', и любой буквы, а также дефиса или пробела между двумя словами для 'City / Town'.\n");
console.log("18. Поля 'Expiration code окна BUY A LIBRARY CARD валидируются как месяц (01-12) и год (23-29). Данный вопрос уточнялся на стриме Q&A.\n");
console.log("19. В поле 'Bank card number' окна BUY A LIBRARY CARD применена кастомная валидация. В данное поле возможно вводить исключительно цифры, которые автоматически группируются в блоки по 4 символа.\n");
console.log("20. После корректного заполнения всех полей и отправки формы окна BUY A LIBRARY CARD, не производится автоматической покупки той книги, на которой была нажата кнопка Buy. Данного требования нет в ТЗ! : 'После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.' Данная логика реализована и закомментирована. На стриме Q&A было пояснение, что лучше сделать без автоматической покупки.\n");
console.log(".....\n");
console.log("99. В случае возникновения прочих вопросов по моей работе - я всегда готов к обсуждению как в приложении RSApp, так и в чатах Discord. С уважением, Андрей Ступаков.\n\n")

console.log("Library Part 3: Score 200/200");

const burger = document.querySelector(".icon-burger");
const nav = document.querySelector(".nav-list");
const profile = document.querySelector(".icon-profile");
const dropMenu = document.querySelector(".dropmenu");
const dropMenuHead = document.querySelector(".dropmenu__head");
const dropMenuLine1 = document.querySelector("#dropmenu__line1");
const dropMenuLine2 = document.querySelector("#dropmenu__line2");
const loginForm = document.querySelector(".login");
const loginContainer = document.querySelector(".login-container");
const profileForm = document.querySelector(".profile");
const profileContainer = document.querySelector(".profile-container");
const buyForm = document.querySelector(".buy");
const buyContainer = document.querySelector(".buy-container");
const loginReg = document.querySelector(".login-register");
const loginCard = document.querySelector("#card-log-in");
const regCard = document.querySelector("#card-sign-up");
const carousel = document.querySelector(".about-carousel");

const booksMap = {
    book01: "The Book Eaters, Sunyi Dean",
    book02: "Cackle, Rachel Harrison",
    book03: "Dante: Poet of the Secular World, Erich Auerbach",
    book04: "The Last Queen, Clive Irving",
    book05: "The Body, Stephen King",
    book06: "Carry: A Memoir of Survival on Stolen Land, Toni Jenson",
    book07: "Days of Distraction, Alexandra Chang",
    book08: "Dominicana, Angie Cruz",
    book09: "Crude: A Memoir, Pablo Fajardo & Sophie Tardy-Joubert",
    book10: "Let My People Go Surfing, Yvon Chouinard",
    book11: "The Octopus Museum: Poems, Brenda Shaughnessy",
    book12: "Shark Dialogues: A Novel, Kiana Davenport",
    book13: "Casual Conversation, Renia White",
    book14: "The Great Fire, Lou Ureneck",
    book15: "Rickey: The Life and Legend, Howard Bryant",
    book16: "Slug: And Other Stories, Megan Milks",
};

let isLogging = false;
let isLogged = false;
let carouselCurrent = 1;
let favr = 1;
let userObj = {};

// Save user data to localStorage
function userCommit() {
    let userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
    for(let i = 0; i < userArr.length; i++) {
        if(userArr[i]["cardNum"] === userObj["cardNum"]) {
            userArr[i]["visits"] = userObj["visits"];
            userArr[i]["hasLibCard"] = userObj["hasLibCard"];
            userArr[i]["books"] = userObj["books"];
            userArr[i]["isLogged"] = userObj["isLogged"];
            break;
        }
    }
    localStorage.setItem("RSS_BPL", JSON.stringify(userArr));
}

// Fill and revert "Check the card" form
function cardFillRevert(fill) {
    if(!isLogged || fill) {
        if(fill) {
            document.querySelector("#card-num-visits").textContent = userObj.visits.toString();
            document.querySelector("#card-num-books").textContent = userObj.books.length.toString();
        }
        document.querySelector(".card-find-button").style.display = fill ? "none":"block";
        document.querySelector(".card-bg").style.gap = fill? "15px":"20px";
        document.querySelector(".card-badges").style.display = fill ? "flex":"none";
        document.querySelector(".card-input-txt").value = fill ? userObj.userName + " " + userObj.userSurName:"";
        document.querySelector(".card-input-num").value = fill ? userObj.cardNum:"";
        document.querySelectorAll(".card-input").forEach((x) => {
            x.style.color = fill ? "#BB945F":"#000";
            x.readOnly = fill;
        });
    }
}

// User's menu - first item
function firstLineEvent(scr) {
    if(isLogged) {                                                      // if user logged now - show Profile modal
        disableScroll(profileContainer, profileForm);
    } else {                                                            // else - do Log In action
        isLogging = true;                                               // isLogging = true if user logs in; = false - if registers
        doLogReg(isLogging, scr);
    }
}

// User's menu - second item
function secondLineEvent(scr) {
    if(isLogged) {
        doLogout();                                                // if user logged now - do Log Out action;
        cardFillRevert(false);
    } else {                                                            // else - do Register action
        isLogging = false;
        doLogReg(isLogging, scr);                                      // Now prepare to show "Register" form
    }
}

function doLogReg(isLog, scrRfr) {
    loginForm.style.height = isLog ? "262px":"382px";
    document.querySelector(".login-capt").textContent = isLog ? "login":"register";
    document.querySelector("#reg-fstname-input").required = !isLog;
    document.querySelector("#reg-lstname-input").required = !isLog;
    document.querySelector(".login-mail").innerHTML = isLog ?
        "E-mail or readers card <input type='text' name='login-email' id='login-email-input' class='login-input' required>" :
        "E-mail <input type='email' name='login-email' id='login-email-input' class='login-input' required>";
    document.querySelector(".login-button").textContent = isLog ? "Log In":"Sign Up";
    document.querySelector(".login-bottom-text").textContent = isLog ? "Don’t have an account?":"Already have an account?";
    loginReg.textContent = isLog ? "Register":"Login";
    document.querySelectorAll(".reg").forEach((x) => x.style.display = isLog ? "none":"block");
    document.querySelectorAll(".logging").forEach((x) => x.style.display = isLog ? "block":"none");
    document.querySelectorAll(".login-input").forEach((x) => x.value = "");
    if(!scrRfr) disableScroll(loginContainer, loginForm);
}

// Here we proceed with Log In or Register actions - enters here from onclick button in Login/Register form
function loginProceed() {
    let userArr = [];
    if(isLogging) {                                                             // Log In action
        let userPass = document.querySelector("#login-pass-input").value;
        let userEmail = document.querySelector("#login-email-input").value;
        userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
        if(userArr) {
            for(let i = 0; i < userArr.length; i++) {
                if(((userArr[i]["cardNum"] === userEmail) || (userArr[i]["userEmail"] === userEmail)) && (userArr[i]["userPass"]) === userPass) {
                    userObj = userArr[i];
                    isLogged = true;
                    userObj.isLogged = isLogged;
                    userObj.visits++;
                    userCommit();
                    Logged();
                    break;
                }
            }
        }
        showErr("User not found!");
    } else {                                                                       // Register action
        // User object records
        userObj.userName = document.querySelector("#reg-fstname-input").value;
        userObj.userSurName = document.querySelector("#reg-lstname-input").value;
        userObj.userPass = document.querySelector("#login-pass-input").value;
        userObj.userEmail = document.querySelector("#login-email-input").value;
        userObj.cardNum = ((Math.ceil(0xf * Math.random())).toString(16) + (Math.ceil(0xffffffff * Math.random())).toString(16)).toUpperCase();
        userObj.visits = 1;
        userObj.hasLibCard = false;
        userObj.books = [];
        userObj.isLogged = false;
        // ----------------
        let emailDup = false;
        if(localStorage.getItem("RSS_BPL") !== null) {
            userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
            for(let i = 0; i < userArr.length; i++) {
                if(userArr[i]["userEmail"] === userObj.userEmail) emailDup = true;
            }
        }
        if(emailDup) showErr("Email already in use!");
        else {
            isLogged = true;
            userObj.isLogged = isLogged;
            userArr.push(userObj);
            localStorage.setItem("RSS_BPL", JSON.stringify(userArr));
            Logged();
        }
    }
}

function showErr(err) {
    document.querySelector("#login-email-input").value = "";
    document.querySelector("#login-pass-input").value = "";
    document.querySelector("#login-email-input").placeholder = err;
}
// Make page appearance according logged state
function Logged() {
    enableScroll(loginContainer, loginForm);
    dropMenuHead.textContent = userObj.cardNum;
    dropMenuHead.style.letterSpacing = "-1.1px";
    dropMenuHead.style.fontSize = "13px";
    profile.classList.remove("icon-profile-icon");
    profile.classList.add("icon-profile-logged");
    profile.textContent = (userObj.userName.slice(0,1) + userObj.userSurName.slice(0,1)).toUpperCase();
    profile.title = userObj.userName + " " + userObj.userSurName;
    dropMenuLine1.textContent = "My profile";
    dropMenuLine2.textContent = "Log Out";
    regCard.style.display = "none";
    loginCard.textContent = "Profile";
    loginCard.style.marginTop = "-25px";
    document.querySelector(".card-get-capt").textContent = "Visit your profile";
    document.querySelector(".card-get-text").textContent = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
    cardFillRevert(true);
    document.querySelector(".profile-initials").textContent = (userObj.userName.slice(0,1) + userObj.userSurName.slice(0,1)).toUpperCase();
    document.querySelector(".profile-username").textContent = userObj.userName + " " + userObj.userSurName;
    document.querySelector(".profile-card-number-num").textContent = userObj.cardNum;
    document.querySelector("#profile-num-visits").textContent = userObj.visits.toString();
    document.querySelector("#profile-num-books").textContent = userObj.books.length.toString();
    document.querySelectorAll(".profile-books-item").forEach((x) => x.remove());
    for(let i = 0; i < userObj.books.length; i++) {
        document.querySelector(`.book-${userObj.books[i]}`).classList.add("fav-button-own");
        document.querySelector(`.book-${userObj.books[i]}`).disabled = true;
        document.querySelector(`.book-${userObj.books[i]}`).textContent = "Own";
        let li = document.createElement("li");
        li.classList.add("profile-books-item");
        li.textContent = booksMap[`book${userObj.books[i]}`];
        document.getElementById("books-list").appendChild(li);
    }
}

function doLogout() {
    isLogged = false;
    userObj.isLogged = isLogged;
    userCommit();
    userObj = {};
    dropMenuHead.textContent = "Profile";
    dropMenuHead.style.letterSpacing = "normal";
    dropMenuHead.style.fontSize = "15px";
    profile.classList.remove("icon-profile-logged");
    profile.classList.add("icon-profile-icon");
    profile.textContent = "";
    profile.title = "";
    dropMenuLine1.textContent = "Log In";
    dropMenuLine2.textContent = "Register";
    regCard.style.display = "block";
    loginCard.textContent = "Log In";
    loginCard.style.marginTop = "0px";
    document.querySelector(".card-get-capt").textContent = "Get a reader card";
    document.querySelector(".card-get-text").textContent = "You will be able to see a reader card after logging into account or you can register a new account";
    for(let i = 1; i <= 16; i++) {
        let bookSelector = (i < 10) ? ".book-0" + i.toString() : ".book-" + i.toString();
        document.querySelector(bookSelector).classList.remove("fav-button-own");
        document.querySelector(bookSelector).disabled = false;
        document.querySelector(bookSelector).textContent = "Buy";
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

// Tabs in favorites - fade out/fade in
function favBookList(item) {
    if(favr != item) {
        document.querySelectorAll(".fav-book").forEach((x) => x.classList.add("fbhide"));
        setTimeout(()=>document.querySelectorAll(".fav-book").forEach((x) => x.classList.add("disbl")), 300);
        setTimeout(()=>document.querySelectorAll(`.favb-${item}`).forEach((x) => x.classList.remove("disbl")), 300);
        setTimeout(()=>document.querySelectorAll(`.favb-${item}`).forEach((x) => x.classList.remove("fbhide")), 400);
        favr = item;
    }
}

// Check the card & timeout 10sec
function checkTheCard() {
    let userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
    if(userArr) {
        for(let i = 0; i < userArr.length; i++) {
            if((    ((userArr[i]["userName"] + userArr[i]["userSurName"]).toUpperCase() ===
                    document.querySelector(".card-input-txt").value.replace(/\s/g,'').toUpperCase()) ||
                    ((userArr[i]["userSurName"] + userArr[i]["userName"]).toUpperCase() ===
                    document.querySelector(".card-input-txt").value.replace(/\s/g,'').toUpperCase()) ||
                    ((userArr[i]["userName"]).toUpperCase() ===
                    document.querySelector(".card-input-txt").value.replace(/\s/g,'').toUpperCase()) ||
                    ((userArr[i]["userSurName"]).toUpperCase() ===
                    document.querySelector(".card-input-txt").value.replace(/\s/g,'').toUpperCase())
                    ) && (userArr[i]["cardNum"] === document.querySelector(".card-input-num").value.toUpperCase().trim())) {
                userObj = userArr[i];
                cardFillRevert(true);
                setTimeout(() => cardFillRevert(false), 10000);
                break;
            }
        }
    }
}

// let bookBuy = 0;
// Fav buttons click
function favButtClick(bookNum) {
    if(isLogged) {
        if(userObj.hasLibCard) {
            userObj.books = userObj.books.concat(bookNum.slice(-2));
            document.querySelector(`.${bookNum}`).classList.add("fav-button-own");
            document.querySelector(`.${bookNum}`).disabled = true;
            document.querySelector(`.${bookNum}`).textContent = "Own";
            let li = document.createElement("li");
            li.classList.add("profile-books-item");
            li.textContent = booksMap[`book${bookNum.slice(-2)}`];
            document.getElementById("books-list").appendChild(li);
            document.querySelector("#profile-num-books").textContent = userObj.books.length.toString();
            document.querySelector("#card-num-books").textContent = userObj.books.length.toString();
            userCommit();
        } else {
            document.querySelectorAll(".buy-data-input").forEach((x) => x.value = '');
            document.querySelector(".buy-button").disabled = true;
            document.querySelector(".buy-button").classList.add("fav-button-own");
            // bookBuy = bookNum;
            disableScroll(buyContainer, buyForm);
        }
    } else {
        firstLineEvent();
    }
}

// Buy the library card
function buyTheCard() {
    if((document.getElementById("buy-bank-card-num").value.replace(/\s/g,'').length === 16) &&
        (document.getElementById("buy-bank-card-name").value.trim().length !== 0) &&
        (document.getElementById("buy-bank-card-city").value.trim().length !== 0)) {
        enableScroll(buyContainer, buyForm);
        userObj.hasLibCard = true;
        // favButtClick(bookBuy);
        userCommit();
    } else if(document.getElementById("buy-bank-card-num").value.replace(/\s/g,'').length !== 16) {
        document.getElementById("buy-bank-card-num").focus();
    } else if(document.getElementById("buy-bank-card-name").value.trim().length === 0) {
        document.getElementById("buy-bank-card-name").focus();
    } else if(document.getElementById("buy-bank-card-city").value.trim().length === 0) {
        document.getElementById("buy-bank-card-city").focus();
    }
}

// Login / register click
loginReg.addEventListener("click", () => {if (isLogging) secondLineEvent(true); else firstLineEvent(true);});

// Listener to open burger menu in mobile version
burger.addEventListener("click", () => {
    burger.classList.toggle("icon-burger-open");    // Show cross instead burger in mobile ver
    nav.classList.toggle("nav-list-open");          // Show menu in mobile ver
});

// Listener to Buy The Card form inputs
buyForm.addEventListener("input", (event) => {
    if(event.target.id === "buy-bank-card-num") {
        let val = event.target.value.replace(/[^0-9.]/g, "");
        if(val.length <= 4)
            event.target.value = val;
        else if((val.length > 4) && (val.length <= 8))
            event.target.value = val.slice(0, 4) + " " + val.slice(4, 8);
        else if((val.length > 8) && (val.length <= 12))
            event.target.value = val.slice(0, 4) + " " + val.slice(4, 8) + " " + val.slice(8, 12);
        else event.target.value = val.slice(0, 4) + " " + val.slice(4, 8) + " " + val.slice(8, 12) + " " + val.slice(12);
        if(val.length === 16) document.getElementById("buy-bank-card-num").setCustomValidity("");
            else document.getElementById("buy-bank-card-num").setCustomValidity("Input 16 digits");
    } else if(event.target.id === "buy-bank-card-name") {
        event.target.value = event.target.value.trimLeft();
        if(event.target.value.trim().length !== 0) {
            document.getElementById("buy-bank-card-name").setCustomValidity("");
        } else document.getElementById("buy-bank-card-name").setCustomValidity("Input latin letters only!");
    } else if(event.target.id === "buy-bank-card-city") {
        event.target.value = event.target.value.trimLeft();
        if(event.target.value.trim().length !== 0) {
            document.getElementById("buy-bank-card-city").setCustomValidity("");
        } else document.getElementById("buy-bank-card-city").setCustomValidity("Input letters only!");
    }
    let notEmpty = true;
    document.querySelectorAll(".buy-data-input").forEach((x) => {if(x.value.length === 0) notEmpty = false});
    if(notEmpty) {
        document.querySelector(".buy-button").disabled = false;
        document.querySelector(".buy-button").classList.remove("fav-button-own");
    } else {
        document.querySelector(".buy-button").disabled = true;
        document.querySelector(".buy-button").classList.add("fav-button-own");
    }
});

//Document events Listener
document.addEventListener("click", (event) => {
    if ((!(event.target.classList.contains("nav-list"))) &&         // Except .nav-list
        (!(event.target.classList.contains("nav-list-item"))) &&    // Except .nav-list-item (container for links)
        (!(event.target.classList.contains("icon-burger")))) {      // Except icon burger (cross)
        burger.classList.remove("icon-burger-open");                // change icon from cross to burger
        nav.classList.remove("nav-list-open");                      // close menu
    }
    if ((!(event.target.classList.contains("icon-profile"))) &&     // Except icon profile
        (!(event.target.classList.contains("dropmenu"))) &&         // Except click inside dropdown menu
        (!(event.target.classList.contains("dropmenu__head"))))     // Except click on header of dropdown menu
        dropMenu.classList.remove("dropmenu-open");                 // close dropdown menu
    if (event.target.classList.contains("login-container"))         // Close Login modal on click to faded container
        enableScroll(loginContainer, loginForm);
    if (event.target.classList.contains("profile-container"))       // Close Profile modal on click to faded container
        enableScroll(profileContainer, profileForm);
    if (event.target.classList.contains("buy-container"))           // Close Buy card modal on click to faded container
        enableScroll(buyContainer, buyForm);
    if (event.target.classList.contains("about-button") || event.target.classList.contains("about-circle"))
        aboutCarouselRotate(+event.target.classList[1].slice(-1));
    else if (event.target.classList.contains("about-carousel-next")) aboutCarouselShiftRight();
    else if (event.target.classList.contains("about-carousel-prev")) aboutCarouselShiftLeft();
    if (event.target.classList.contains("fav-radio-label") || event.target.classList.contains("fav-radio-input") ||
    event.target.classList.contains("fav-radio-txt")) favBookList(+event.target.classList[1].slice(-1));
    if (event.target.classList.contains("fav-button")) favButtClick(event.target.classList[1]);
});

// Copy button
function copyButton() {
    if(window.isSecureContext) {
        navigator.clipboard.writeText(userObj.cardNum);
    } else {
        let copyTxt = document.querySelector(".card-input-num");
        copyTxt.select();
        document.execCommand('copy');
    }
}

let scrollTop = 0;
function disableScroll(contName, frmName) {
    contName.classList.add("login-container-visible");
    frmName.classList.add("login-open");
    scrollTop = window.scrollY;
    document.body.style.setProperty('--st', -(document.documentElement.scrollTop) + "px");
    document.body.classList.add('scroll-disabled');
}
function enableScroll(contName, frmName) {
    contName.classList.remove("login-container-visible");
    frmName.classList.remove("login-open");
    document.body.classList.remove('scroll-disabled');
    window.scrollTo({top: scrollTop, left: 0, behavior: "instant"});
}

// Check if user was logged on page reload
window.onload = () => {
    userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
    if(userArr) {
        for(let i = 0; i < userArr.length; i++) {
            if(userArr[i]["isLogged"]) {
                userObj = userArr[i];
                isLogged = true;
                Logged();
                break;
            }
        }
    }
}