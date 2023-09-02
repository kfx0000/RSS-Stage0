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
const loginClose = document.querySelector(".login-cross");
const profileClose = document.querySelector(".profile-cross");
const buyClose = document.querySelector(".buy-cross");
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
    book09: "Crude: A Memoir, Pablo Fajardo &amp; Sophie Tardy-Joubert",
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
        loginReg.textContent = "Register";
        userEvent();
    }
}

// Sign Up (register) event
function secondLineEvent() {
    if(isLogged) {
        userCommit();
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
        cardRevert();
        for(let i = 1; i <= 16; i++) {
            let bookSelector = (i < 10) ? ".book-0" + i.toString() : ".book-" + i.toString();
            document.querySelector(bookSelector).classList.remove("fav-button-own");
            document.querySelector(bookSelector).disabled = false;
            document.querySelector(bookSelector).textContent = "Buy";
        }
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
        loginReg.textContent = "Login";
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
        let userPass = document.querySelector("#login-pass-input").value;
        let userEmail = document.querySelector("#login-email-input").value;
        userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
        if(userArr) {
            for(let i = 0; i < userArr.length; i++) {
                if(((userArr[i]["cardNum"] === userEmail) || (userArr[i]["userEmail"] === userEmail)) && (userArr[i]["userPass"]) === userPass) {
                    userObj = userArr[i];
                    isLogged = true;
                    break;
                }
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

        if(localStorage.getItem("RSS_BPL") !== null) userArr = JSON.parse(localStorage.getItem("RSS_BPL"));
        userArr.push(userObj);
        localStorage.setItem("RSS_BPL", JSON.stringify(userArr));
    }
    if(isLogged) {
        dropMenuHead.textContent = cardNum;
        dropMenuHead.style.letterSpacing = "-1.1px";
        dropMenuHead.style.fontSize = "13px";
        profile.classList.remove("icon-profile-icon");
        profile.classList.add("icon-profile-logged");
        initials = (userName.slice(0,1) + userSurName.slice(0,1)).toUpperCase();
        profile.textContent = initials;
        profile.title = userName + " " + userSurName;
        dropMenuLine1.textContent = "My profile";
        dropMenuLine2.textContent = "Log Out";
        regCard.style.display = "none";
        loginCard.textContent = "Profile";
        loginCard.style.marginTop = "-25px";
        document.querySelector(".card-get-capt").textContent = "Visit your profile";
        document.querySelector(".card-get-text").textContent = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
        cardFill();
        document.querySelector("#profile-num-visits").textContent = userObj.visits.toString();
        document.querySelector(".profile-initials").textContent = initials;
        document.querySelector(".profile-username").textContent = userObj.userName + " " + userObj.userSurName;
        document.querySelector(".profile-card-number-num").textContent = userObj.cardNum;
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
                cardFill();
                setTimeout(() => cardRevert(), 10000);
                break;
            }
        }
    }
}

// Buy card
function buyTheCard() {
    if(document.getElementById("buy-bank-card-num").value.replace(/\s/g,'').length === 16) {
        buyContainer.classList.remove("login-container-visible");
        buyForm.classList.remove("login-open");
        userObj.hasLibCard = true;
        userCommit();
    } else document.getElementById("buy-bank-card-num").style.border = "1px solid red";
}

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
            userCommit();
        } else {
            document.querySelectorAll(".buy-data-input").forEach((x) => x.value = '');
            document.getElementById("buy-bank-card-num").style.border = "1px solid #BB945F";
            buyContainer.classList.add("login-container-visible");
            buyForm.classList.add("login-open");
        }
    } else {
        firstLineEvent();
    }
}

// Close Login modal on Cross click
loginClose.addEventListener("click", () => {
    loginContainer.classList.remove("login-container-visible");
    loginForm.classList.remove("login-open");
});
profileClose.addEventListener("click", () => {
    profileContainer.classList.remove("login-container-visible");
    profileForm.classList.remove("login-open");
});
buyClose.addEventListener("click", () => {
    buyContainer.classList.remove("login-container-visible");
    buyForm.classList.remove("login-open");
});

// Login / register click
loginReg.addEventListener("click", () => {if (isLogging) secondLineEvent(); else firstLineEvent();});

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
        burger.classList.remove("icon-burger-open");                // change icon from cross to burger
        nav.classList.remove("nav-list-open");                      // close menu
    }
    if ((!(event.target.classList.contains("icon-profile"))) &&     // Except icon profile
        (!(event.target.classList.contains("dropmenu"))) &&         // Except click inside dropdown menu
        (!(event.target.classList.contains("dropmenu__head"))))     // Except click on header of dropdown menu
        dropMenu.classList.remove("dropmenu-open");                 // close dropdown menu

    if (event.target.classList.contains("login-container")) {       // Close Login modal on click to faded container
        loginContainer.classList.remove("login-container-visible");
        loginForm.classList.remove("login-open");
    }
    if (event.target.classList.contains("profile-container")) {       // Close Profile modal on click to faded container
        profileContainer.classList.remove("login-container-visible");
        profileForm.classList.remove("login-open");
    }
    if (event.target.classList.contains("buy-container")) {           // Close Buy card modal on click to faded container
        buyContainer.classList.remove("login-container-visible");
        buyForm.classList.remove("login-open");
    }
    if (event.target.classList.contains("about-button") || event.target.classList.contains("about-circle"))
        aboutCarouselRotate(+event.target.classList[1].slice(-1));
    else if (event.target.classList.contains("about-carousel-next")) aboutCarouselShiftRight();
    else if (event.target.classList.contains("about-carousel-prev")) aboutCarouselShiftLeft();
    if (event.target.classList.contains("fav-radio-label") || event.target.classList.contains("fav-radio-input") ||
    event.target.classList.contains("fav-radio-txt")) favBookList(+event.target.classList[1].slice(-1));
    if (event.target.classList.contains("fav-button")) favButtClick(event.target.classList[1]);
});

// Copy button listener
function copyButton() {
    let copyTxt = document.querySelector(".card-input-num");
    copyTxt.select();
    document.execCommand('copy');
}