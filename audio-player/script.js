const audio = document.getElementById('audio');
const progressBar = document.querySelector(".player__progress");
const volBar = document.querySelector(".player__progress-vert");
const playList = [
    ['Dua Lipa', 'Don\'t Start Now', 'dontstartnow'],
    ['Alan Walker', 'Catch me if you can', 'alancatch'],
    ['Olivia Addams', 'Stranger', 'olivia'],
    ['INNA', 'Flashbacks', 'inna'],
    ['Irma', 'I know', 'irma'],
    ['Beyonce', 'Don\'t Hurt Yourself', 'beyonce'],
    ['ГрОб', 'Все идет по плану', 'vse'],
    ['Король и Шут', 'Кукла колдуна', 'kish'],
]
let maxCnt = playList.length - 3;
let playPointer = 0;
let upd = setInterval(updateSlider, 1000);
setInterval(updateTimer, 500);

function audioPlayPause() {
    if(audio.paused) {
        audio.play();
        document.querySelector(".player__button-play").src = "./assets/pause.png";
        document.documentElement.style.setProperty('--scaler', 1.3);
    } else {
        audio.pause();
        document.querySelector(".player__button-play").src = "./assets/play.png";
        document.documentElement.style.setProperty('--scaler', 1);
    }
}

function audioPrev() {
    if(--playPointer < 0) playPointer = maxCnt;
    audioRestart();
    audioPlayPause();
}

function audioNext() {
    if(++playPointer > maxCnt) playPointer = 0;
    audioRestart();
    audioPlayPause();
}

function audioRewind() {
    audio.currentTime = progressBar.value;
    updateTimer();
}

function audioRestart() {
    document.querySelector('.player__text-artist').textContent = playList[playPointer][0];
    document.querySelector('.player__text-title').textContent = playList[playPointer][1];
    document.documentElement.style.setProperty('--pict', 'url("./assets/'+playList[playPointer][2]+'.jpg")');
    audio.src = './assets/'+playList[playPointer][2]+'.mp3';
    progressBar.value = 0;
    updateTimer();
    updateSlider();
}

function calcTime(val) {
    let timeMin = Math.floor(val / 60).toString();
    let timeSec = Math.floor(val - timeMin*60).toString();
    if (timeSec.length < 2) timeSec = '0' + timeSec;
    return timeMin + ':' + timeSec;
}

function updateTimer() {
    document.querySelector('.player__text-curr_time').textContent = calcTime(audio.currentTime);
}
function updateSlider() {
    progressBar.value = audio.currentTime;
}

function hideVol() {
    document.querySelector('.vol').style.visibility = 'hidden';
    document.querySelector('.vol').style.opacity = 0;
}
function showVol() {
    volBar.value = audio.volume * 100;
    if(document.querySelector('.vol').style.visibility === 'visible') {
        hideVol();
    } else {
        document.querySelector('.vol').style.visibility = 'visible';
        document.querySelector('.vol').style.opacity = 1;
    }
}
function changeVol() {
    audio.volume = volBar.value / 100;
}

function hideHelp() {
    document.querySelector('.help').style.visibility = 'hidden';
    document.querySelector('.help').style.opacity = 0;
}
function showHelp() {
    if(document.querySelector('.help').style.visibility === 'visible') {
        hideHelp();
    } else {
        document.querySelector('.help').style.visibility = 'visible';
        document.querySelector('.help').style.opacity = 1;
    }
}

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 32) audioPlayPause();
    else if(e.keyCode === 37) audioPrev();
    else if(e.keyCode === 39) audioNext();
    else if(e.keyCode === 38) {
        if(audio.volume <= 0.9) audio.volume += 0.1; else audio.volume = 1;
        volBar.value = audio.volume * 100;
    }
    else if(e.keyCode === 40) {
        if(audio.volume >= 0.1) audio.volume -= 0.1; else audio.volume = 0;
        volBar.value = audio.volume * 100;
    }
    else if(e.keyCode === 66) maxCnt ^= 2;
    hideHelp();
});
document.addEventListener("click", (event) => {
    if (!(event.target.classList.contains("player__help"))) hideHelp();
    if (!(event.target.classList.contains("player__vol"))
        && !(event.target.classList.contains("player__progress-vert"))
        && !(event.target.classList.contains("vol"))) hideVol();
});
document.addEventListener("mousedown", (event) => {
    if(event.toElement.classList.contains("player__progress")) clearInterval(upd);
});
document.addEventListener("mouseup", (event) => {
    if(event.toElement.classList.contains("player__progress")) upd = setInterval(updateSlider, 1000);
});

audio.onloadedmetadata = function() {
    progressBar.max = audio.duration;
    document.querySelector('.player__text-total_time').textContent = calcTime(audio.duration);
}

audio.onended = audioNext;
window.onload = audioRestart();
