const audio = document.getElementById('audio');
const progressBar = document.querySelector(".player__progress");
const playList = [
    ['Dua Lipa', 'Don\'t Start Now', 'dontstartnow'],
    ['Alan Walker', 'Catch me if you can', 'alancatch'],
    ['Olivia Addams', 'Stranger', 'olivia'],
    ['INNA', 'Flashbacks', 'inna'],
]
let maxCnt = playList.length - 1;
let playPointer = 0;


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
}

function audioNext() {
    if(++playPointer > maxCnt) playPointer = 0;
    audioRestart();
}

function audioRewind() {
    audio.currentTime = progressBar.value;
    updatePlayer();
}

function audioRestart() {
    document.querySelector('.player__text-artist').textContent = playList[playPointer][0];
    document.querySelector('.player__text-title').textContent = playList[playPointer][1];
    document.documentElement.style.setProperty('--pict', 'url("./assets/'+playList[playPointer][2]+'.jpg")');
    audio.src = './assets/'+playList[playPointer][2]+'.mp3';
    progressBar.value = 0;
    updatePlayer();
    audioPlayPause();
}

function calcTime(val) {
    let timeMin = Math.floor(val / 60).toString();
    let timeSec = Math.floor(val - timeMin*60).toString();
    if (timeSec.length < 2) timeSec = '0' + timeSec;
    return timeMin + ':' + timeSec;
}

function updatePlayer() {
    document.querySelector('.player__text-curr_time').textContent = calcTime(audio.currentTime);
    progressBar.value = audio.currentTime;
}

audio.onloadedmetadata = function() {
    progressBar.max = audio.duration;
    document.querySelector('.player__text-total_time').textContent = calcTime(audio.duration);
}

audio.onended = audioNext;
window.onload = audioRestart();
setInterval(updatePlayer, 1000);
