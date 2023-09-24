const imgContainer = document.querySelector(".main__container");
const imgSearch = document.querySelector(".header__search");

const url_head = "https://api.unsplash.com/search/photos?query=";
const url_trail = "&per_page=30&orientation=landscape&client_id=hZjJHj01nnqfuSx1eMF0SqX9o6WsMYqtmQKwkLGIQns";

async function getData(tags) {
    const res = await fetch(url_head + tags + url_trail);
    const data = await res.json();
    for(let i = 0; i < (data.results.length < 24 ? data.results.length : 24); i++) {
        placeImg(data.results[i].urls.small, data.results[i].urls.full, tags);
    }
}

function placeImg(img_url, img_link, tags) {
    let href = document.createElement("a");
    href.href = img_link;
    href.classList.add("main__a");
    href.target = "_blank";
    imgContainer.append(href);
    let img = document.createElement("img");
    img.classList.add("main__img");
    img.src = img_url;
    img.alt = tags;
    img.addEventListener("click", () => imgSearch.focus());
    href.append(img);
}

function doSearch() {
    if(imgSearch.value.trim()) {
        document.querySelectorAll(".main__img").forEach((x) => x.remove());
        document.querySelectorAll(".main__a").forEach((x) => x.remove());
        getData(imgSearch.value.trim());
    }
}

function doClear() {
    document.querySelector('#search').value = '';
    imgSearch.focus();
}

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) doSearch(); else
    if(e.keyCode === 27) {
        window.scrollTo(0, 0);
        doClear();
    }
});

window.onload = () => getData("Autumn");
