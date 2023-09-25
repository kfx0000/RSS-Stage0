// This is not a classic Miner game. To win, you have to place all the flags on the mined tiles. When you set the last flag, if any of the flags are set wrong, you'll lose.

newGame();


function newGame() {
}


function showMenu() {
    if(document.querySelector(".menu").classList.contains("menu_show")) {
        document.querySelector(".menu").classList.remove("menu_show");
    } else {
        document.querySelector(".menu").classList.add("menu_show");
    }
}


document.addEventListener("click", (event) => {
    if(!event.target.classList.contains("menu") &&
        !event.target.classList.contains("header__butt-container") &&
        !event.target.classList.contains("header__button") &&
        !event.target.classList.contains("menu__caption") &&
        !event.target.classList.contains("menu__selector") &&
        !event.target.classList.contains("menu__selector-capt"))
            document.querySelector(".menu").classList.remove("menu_show");
    console.log(event.target.classList);
});
