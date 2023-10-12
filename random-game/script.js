console.log(`
1. Вёрстка +10
    - реализован интерфейс игры +5
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. Логика игры. Ходы, перемещения фигур, другие действия игрока подчиняются определённым свойственным игре правилам +10
3. Реализовано завершение игры при достижении игровой цели +10
4. По окончанию игры выводится её результат, например, количество ходов, время игры, набранные баллы, выигрыш или поражение и т.д +10
5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10
6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов +10
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
    - высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо

Score: 70/60.
`);
const sett = [
    {cells: 100, bombs: [10, 15, 20], size: 4, time: [600, 1200, 1800]},
    {cells: 225, bombs: [23, 34, 45], size: 3.2, time: [2400, 3000, 3600]},
    {cells: 400, bombs: [40, 60, 80], size: 2.8, time: [4200, 4800, 5400]}
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
        timeLimit = 6000;
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
    document.querySelectorAll(".tile").forEach((x) => x.remove());
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
    document.querySelector(".timer").textContent = convertTime(timeLimit);
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

function showScore() {
    let arr = JSON.parse(localStorage.getItem("RSS_Miner"));
    document.querySelector(".score__bs").textContent = document.querySelector(`label.rb-${brd}`).textContent;
    document.querySelector(".score__lv").textContent = document.querySelector(`label.rl-${lev}`).textContent;
    document.querySelectorAll(".score__li").forEach((x) => x.remove());
    let ul = document.querySelector(".score__body");
    let idx =+brd*3 + +lev;
    for(let i = 0; i < 10; i++) {
        if(arr[idx][i].name.length === 0) break;
        else {
            let rank = document.createElement("span");
            rank.classList.add("score__t-rank");
            rank.textContent = i + 1;
            let name = document.createElement("span");
            name.classList.add("score__t-name");
            name.textContent = arr[idx][i].name;
            let res = document.createElement("span");
            res.classList.add("score__t-res");
            res.textContent = convertTime(arr[idx][i].time);
            let date = document.createElement("span");
            date.classList.add("score__t-date");
            date.textContent = arr[idx][i].date;
            let li = document.createElement("li");
            li.classList.add("score__li");
            li.append(rank);
            li.append(name);
            li.append(res);
            li.append(date);
            ul.append(li);
        }
    }
    document.querySelector(".score").classList.add("score-visible");
}

function hideScore() {
    document.querySelector(".score").classList.remove("score-visible");
}

function getDateStr() {
    let now = new Date();
    return now.getDate().toString().padStart(2, "0") + "/"
    + (now.getMonth()+1).toString().padStart(2, "0") + "/" + now.getFullYear() + " "
    + now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0") + ":"
    + now.getSeconds().toString().padStart(2, "0");
}

function writeScore() {
    let arr = JSON.parse(localStorage.getItem("RSS_Miner"));
    let idx = +brd*3 + +lev;
    let name = document.getElementById("modal__input").value.trim().length ? document.getElementById("modal__input").value.trim() : "Player";

    // for(let i = 9; i > 0; i--) {
    //     arr[idx][i].name = arr[idx][i-1].name;
    //     arr[idx][i].time = arr[idx][i-1].time;
    //     arr[idx][i].date = arr[idx][i-1].date;
    // }
    // arr[idx][0].name = name;
    // arr[idx][0].time = currTime;
    // arr[idx][0].date = getDateStr();

    // ******************** Top-10 Score **************************//
    let max = 10;
    if((arr[idx][9].name.length !== 0) && (arr[idx][9].time > currTime)) {
        arr[idx][9].name = name;
        arr[idx][9].time = currTime;
        arr[idx][9].date = getDateStr();
    } else {
        for(let i = 0; i < 10; i++)
            if(arr[idx][i].name.length === 0) {
                arr[idx][i].name = name;
                arr[idx][i].time = currTime;
                arr[idx][i].date = getDateStr();
                max = i + 1;
                break;
            }
    }
    for(let i = 1; i < max; i++) {
        let ex = true;
        for(let j = 0; j < max - i; j++) {
            if(arr[idx][j].time > arr[idx][j+1].time) {
                let tmpTime = arr[idx][j].time;
                let tmpName = arr[idx][j].name;
                let tmpDate = arr[idx][j].date;
                arr[idx][j].time = arr[idx][j+1].time;
                arr[idx][j].name = arr[idx][j+1].name;
                arr[idx][j].date = arr[idx][j+1].date;
                arr[idx][j+1].time = tmpTime;
                arr[idx][j+1].name = tmpName;
                arr[idx][j+1].date = tmpDate;
                ex = false;
            }
        }
        if(ex) break;
    }

    localStorage.setItem("RSS_Miner", JSON.stringify(arr));
}

function showHelp() {
    document.querySelector(".help").classList.add("help-visible");
}

function hideHelp() {
    document.querySelector(".help").classList.remove("help-visible");
}

function showCongrat(txt, colr) {
    if(document.querySelector(".modal").classList.contains("modal_visible") ||
        document.querySelector(".modal__text").classList.contains("modal__text_visible")) {
        document.querySelector(".modal").classList.add("modal_block");
        setTimeout(() => {
            document.querySelector(".modal").classList.remove("modal_visible");
            document.querySelector(".modal__text").classList.remove("modal__text_visible");
            document.querySelector(".modal__msg").classList.remove("modal__msg_visible");
            document.querySelector(".modal__form").classList.remove("modal__form_visible");
        }, 201);
        setTimeout(() => {
            document.querySelector(".modal").classList.remove("modal_block");
        }, 1001);
        if(isWin) writeScore();
    } else {
        document.querySelector(".modal__text").style.color = colr;
        document.querySelector(".modal__text").textContent = txt;
        document.querySelector(".modal__text").classList.add("modal__text_visible");
        if(isWin) {
            document.getElementById("modal__input").value = "";
            document.querySelector('.modal__msg-time').textContent = convertTime(currTime);
            document.querySelector(".modal__msg").classList.add("modal__msg_visible");
            document.querySelector(".modal__form").classList.add("modal__form_visible");
            document.getElementById("modal__input").focus();
        }
        document.querySelector(".modal").classList.add("modal_visible");
    }
}

function showMenu() {
    if(document.querySelector(".menu").classList.contains("menu_show")) {
        document.querySelector(".menu").classList.remove("menu_show");
    } else {
        document.querySelector(".menu").classList.add("menu_show");
    }
}

function updateTimer() {
    ++currTime;
    document.querySelector(".timer").textContent = convertTime(timeLimit - currTime);
    if(currTime >= timeLimit) openBombs(0,"Time is up!!!", "#44e");
}

function convertTime(t) {
    let ms = t%10;
    let sec = ((t-t%10)/10)%60;
    sec = sec < 10 ? '0'+sec : ''+sec;
    let min = Math.floor((t/10 - (((t-t%10)/10)%60))/60);
    min = min < 10 ? '0'+min : ''+min;
    return min + ':' + sec + '.' + ms;
}

function openTile(num) {
    if(firstClick) {
        firstClick = false;
        timer = setInterval(updateTimer, 100);
    }
    if(!document.querySelector(`.${num}`).classList.contains("tile_flag")) {
        let cell = +num.split('-')[1];
        if(boardArray[cell]) {
            openBomb(num, "red");
            openBombs(cell,"You LOSE!!!", "#666");
        } else {
            document.querySelector(`.${num}`).classList.add("tile_open");
            countTile(cell);
        }
    }
}

function openBomb(num, color) {
    let bombTile = document.createElement("div");
    bombTile.classList.add(`bomb-${color}`);
    document.querySelector(`.${num}`).classList.add("tile_open");
    document.getElementById(num).appendChild(bombTile);
}

function openBombs(cell, msg, col) {
    for(let i = 1; i <= numCells; i++) {
        let tile = document.getElementById(`tile-${i}`).classList;
        if((i !== cell) && boardArray[i] && (!tile.contains("tile_flag")))
            openBomb(`tile-${i}`, "black");
        if((tile.contains("tile_flag")) && !boardArray[i]) tile.add("tile_cross");
    }
    inGame = false;
    clearInterval(timer);
    document.getElementById("sound_lose").play();
    showCongrat(msg, col);
}

function openAll() {
    for(let i = 1; i <= numCells; i++) openTile(`tile-${i}`);
    inGame = false;
    clearInterval(timer);
    document.getElementById("sound_win").play();
    isWin = true;
    showCongrat("You WIN!!!", "#e11");
}

function countTile(cell) {
    let res = 0;
    mark(cell, "count");
    document.querySelectorAll(".count").forEach((x) => {
        if(boardArray[x.classList[1].split('-')[1]]) res++;
        x.classList.remove("count");
    });
    if(res) {
        document.querySelector(`.tile-${cell}`).classList.add(`number_${res}`);
        document.querySelector(`.tile-${cell}`).textContent = res;
    } else {
        mark(cell, "mark");
        document.querySelectorAll(".mark").forEach((x) => {
            if(!x.classList.contains("tile_open")) openTile(x.classList[1]);
        });
    }
}

function mark(cell, className) {
    let rowCol = Math.sqrt(numCells);
    if((cell - 1) % rowCol) document.getElementById(`tile-${cell-1}`).classList.add(className);             //left
    if(cell % rowCol) document.getElementById(`tile-${cell+1}`).classList.add(className);                   //right
    if(cell > rowCol) {                                                                          //**if not 1st row
        document.getElementById(`tile-${cell-rowCol}`).classList.add(className);                            //up
        if((cell - 1) % rowCol) document.getElementById(`tile-${cell-rowCol-1}`).classList.add(className);  //up-left if not 1st col
        if(cell % rowCol) document.getElementById(`tile-${cell-rowCol+1}`).classList.add(className);        //up-right if not last col
    }
    if(cell <= numCells - rowCol) {                                                              //**if not last row
        document.getElementById(`tile-${cell+rowCol}`).classList.add(className);                            // down
        if((cell - 1) % rowCol) document.getElementById(`tile-${cell+rowCol-1}`).classList.add(className);  //down-left if not 1st col
        if(cell % rowCol) document.getElementById(`tile-${cell+rowCol+1}`).classList.add(className);        //down-right if not last col
    }
}

function flagTile(num) {
    let tile = document.querySelector(`.${num}`).classList;
    if(!tile.contains("tile_open")) {
        if(tile.contains("tile_flag")) {
            flags++;
            tile.remove("tile_flag");
            document.querySelector(".flag").textContent = flags;
        } else {
            flags--;
            tile.add("tile_flag");
            document.querySelector(".flag").textContent = flags;
        }
        if(flags === 0) {
            let win = true;
            document.querySelectorAll(".tile_flag").forEach((x) => {
                if(!boardArray[x.classList[1].split('-')[1]]) win = false;
            });
            if(win) openAll(); else openBombs(0, "You LOSE!!!", "#666");
        }
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
});
window.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if(inGame) if(event.target.classList.contains("tile")) flagTile(event.target.classList[1]);
});