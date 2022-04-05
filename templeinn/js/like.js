let like_btn = document.querySelector('.like-button');
like_btn.style.backgroundColor = "#f2f2f2"
liked = localStorage.getItem('liked')

if (liked == null) {
    like_btn.innerHTML = "Like";
    like_btn.style.backgroundColor = "#f2f2f2";
} else {
    like_btn.innerHTML = liked;
    like_btn.style.backgroundColor = "#a1b5d8";
}

function like() {
    if (like_btn.innerHTML == "like") {
        like_btn.innerHTML = "👍 Liked";
        like_btn.style.backgroundColor = "#a1b5d8";
        localStorage.setItem("liked", '👍 Liked');
    } else {
        like_btn.innerHTML = "like";
        like_btn.style.backgroundColor = "#f2f2f2"
        localStorage.removeItem('liked')
    }
}