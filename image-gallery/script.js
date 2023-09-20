const imgContainer = document.querySelector(".main__container");
const imgSearch = document.querySelector(".header__search");

// const url_head = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=37&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=";
// const url_trail = "&tag_mode=all&orientation=landscape&extras=url_m&format=json&nojsoncallback=1";
const url_head = "https://api.unsplash.com/search/photos?query=";
const url_trail = "&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

async function getData(tags) {
    const res = await fetch(url_head + tags + url_trail);
    const data = await res.json();
    for(let i = 0; i < 24; i++) {
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

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) doSearch(); else
    if(e.keyCode === 27) document.querySelector('#search').value = '';
});

window.onload = () => getData("Autumn");
