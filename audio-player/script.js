console.log(`
1. Вёрстка +10
    - Вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5
    - В футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. Кнопка Play/Pause +10
    - Есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5
    - Внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5
3. При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10
4. При смене аудиотрека меняется изображение - обложка аудиотрека +10
5. Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10
6. Отображается продолжительность аудиотрека и его текущее время проигрывания +10
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10:
   Кроме основных функций, реализована возможность изменения громкости воспроизведения, управление проигрывателем с помощью клавиш, а также включение и выключение бонусных треков.
   Это отражено в справочной информации, вызываемой нажатием на иконку с вопросительным знаком.
   По сравнению с демо-версией, устранена ошибка, связанная с самопроизвольной установкой слайдера перемотки на текущую позицию в момент обновления состояния этого слайдера, при попытке перемотки.

   Score: 70/60
`);

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
let songPercent = 0;
let upd = setInterval(updateSlider, 1000);
setInterval(updateTimer, 200);

function audioPlayPause() {
    if(audio.paused) audio.play(); else audio.pause();
    let scl = audio.paused ? 1 : 1.3;
    document.documentElement.style.setProperty('--scaler', scl);
    document.querySelector(".player__button-play").src = audio.paused ? "./assets/play.png" : "./assets/pause.png";
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
    audio.currentTime = progressBar.value * songPercent;
    updateTimer();
}

function audioRestart() {
    document.querySelector('.player__text-artist').textContent = playList[playPointer][0];
    document.querySelector('.player__text-title').textContent = playList[playPointer][1];
    document.documentElement.style.setProperty('--pict', 'url("./assets/'+playList[playPointer][2]+'.jpg")');
    audio.src = './assets/'+playList[playPointer][2]+'.mp3';
    updateTimer();
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
    progressBar.value = audio.currentTime / songPercent;
}
function changeVol() {
    audio.volume = volBar.value / 100;
}

function hideModal(className) {
    document.querySelector(className).style.visibility = 'hidden';
    document.querySelector(className).style.opacity = 0;
}
function showModal(className) {
    if(document.querySelector(className).style.visibility === 'visible') {
        hideModal(className);
    } else {
        document.querySelector(className).style.visibility = 'visible';
        document.querySelector(className).style.opacity = 1;
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
    hideModal('.help');
});
document.addEventListener("click", (event) => {
    if (!(event.target.classList.contains("player__help"))) hideModal('.help');
    if (!(event.target.classList.contains("player__vol"))
        && !(event.target.classList.contains("player__progress-vert"))
        && !(event.target.classList.contains("vol"))) hideModal('.vol');
});
document.addEventListener("mousedown", (event) => {
    if(event.toElement.classList.contains("player__progress")) clearInterval(upd);
});
document.addEventListener("mouseup", (event) => {
    if(event.toElement.classList.contains("player__progress")) upd = setInterval(updateSlider, 1000);
});

audio.onloadedmetadata = function() {
    songPercent = audio.duration / 100;
    document.querySelector('.player__text-total_time').textContent = calcTime(audio.duration);
}

audio.onended = audioNext;
window.onload = audioRestart();