const audio = document.getElementById('audio');
const progressBar = document.querySelector(".player__progress");
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
    else if(e.keyCode === 38) {if(audio.volume < 1) audio.volume += 0.1;}
    else if(e.keyCode === 40) {if(audio.volume >= 0.1) audio.volume -= 0.1;}
    else if(e.keyCode === 66) maxCnt ^= 2;
    hideHelp();
});
document.addEventListener("click", (event) => {
    if (!(event.target.classList.contains("player__help"))) {
        hideHelp();
    }
    console.log(event.target.classList);
});

audio.onloadedmetadata = function() {
    progressBar.max = audio.duration;
    document.querySelector('.player__text-total_time').textContent = calcTime(audio.duration);
}

audio.onended = audioNext;
window.onload = audioRestart();
setInterval(updatePlayer, 1000);
