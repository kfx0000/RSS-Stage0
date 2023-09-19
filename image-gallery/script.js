const imgContainer = document.querySelector(".main__container");
const imgSearch = document.querySelector(".header__search");

const url_head = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=37&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=";
const url_trail = "&tag_mode=all&orientation=landscape&extras=url_m&format=json&nojsoncallback=1";

async function getData(tags) {
    const res = await fetch(url_head + tags + url_trail);
    const data = await res.json();
    for(let i = 0; i < 36; i++)
        placeImg(data.photos.photo[i].url_m, tags);
}

function placeImg(img_url, tags) {
    const img = document.createElement("img");
    img.classList.add("main__img");
    img.src = img_url;
    img.alt = tags;
    imgContainer.append(img);
}

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        document.querySelectorAll(".main__img").forEach((x) => x.remove());
        if(imgSearch.value.trim()) getData(imgSearch.value.trim());
    };
});

window.onload = () => getData("Autumn");
