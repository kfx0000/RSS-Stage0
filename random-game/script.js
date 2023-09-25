const sett = [
    {cells: 100, bombs: [10, 15, 20], size: 4, time: [300, 600, 1200]},
    {cells: 225, bombs: [23, 34, 45], size: 3.2, time: [600, 1200, 2400]},
    {cells: 400, bombs: [40, 60, 80], size: 2.8, time: [1200, 2400, 4800]}
];

let numCells, numBombs, flags, timeLimit, timer, currTime, brd, lev;
let inGame = isWin = false;
let firstClick = true;
let boardArray = new Array(sett[2].cells + 1);

newGame();


function newGame() {
    menuChiose();
    if(document.getElementById("let_win").checked) {
        numBombs = flags = 1;
        timeLimit = 1000000;
        document.getElementsByName('level_rb').forEach((x) => x.setAttribute("disabled","disabled"));
        document.querySelectorAll(".level_rb").forEach((x) => x.style.setProperty("color", "#666"));
    } else {
        document.getElementsByName('level_rb').forEach((x) => x.removeAttribute("disabled"));
        document.querySelectorAll(".level_rb").forEach((x) => x.style.removeProperty("color"));
    }
    if(!localStorage.getItem("RSS_Miner")) {
        let arr = new Array(9);
        for(let i = 0; i < 9; i++) arr[i] = new Array(10).fill({name:'', time:0, date: ''});
        localStorage.setItem("RSS_Miner", JSON.stringify(arr));
    }
    const elements = document.getElementsByClassName("tile");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    const board = document.getElementById("board");
    for(let i = 1; i <= numCells; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.classList.add(`tile-${i}`);
        tile.setAttribute("id", `tile-${i}`);
        board.appendChild(tile);
    }
    boardArray.fill(false);
    for(let i = 0; i < numBombs; i++) {
        let rnd = Math.ceil(numCells * Math.random());
        if(boardArray[rnd]) {
            --i;
            continue;
        } else boardArray[rnd] = true;
    }
    document.querySelector(".flag").textContent = flags;
    inGame = true;
    firstClick = true;
    isWin = false;
    currTime = 0;
    if(timer) clearInterval(timer);
    document.querySelector(".timer").textContent = "00:00.0";
}

function menuChiose() {
    document.getElementsByName('board_rb').forEach((x) => {
        if(x.checked) {
            brd = x.classList[1].split("-")[1];
            numCells = sett[brd].cells;
            document.documentElement.style.setProperty('--size', sett[brd].size);
        };
    });
    document.getElementsByName('level_rb').forEach((x) => {
        if(x.checked) {
            lev = x.classList[1].split("-")[1];
            numBombs = flags = sett[brd].bombs[lev];
            timeLimit = sett[brd].time[lev];
        }
    });
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
    if(event.target.classList.contains("menu__radio") || event.target.classList.contains("menu__checkbox")) newGame();
    if(inGame) if(event.target.classList.contains("tile")) openTile(event.target.classList[1]);
    console.log(event.target.classList);
});
