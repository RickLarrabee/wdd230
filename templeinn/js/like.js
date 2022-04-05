let like_btn = document.querySelector('.like-button');
let select = document.querySelector('#temple')


function check_like () {
    let temple = select.options[select.selectedIndex].value;
    console.log(temple)
    let liked = localStorage.getItem(`${temple}liked`);
    console.log(liked);
    if (liked == null) {
        like_btn.innerHTML = "Like";
        like_btn.style.backgroundColor = "#f2f2f2";
    } else {
        like_btn.innerHTML = liked;
        like_btn.style.backgroundColor = "#a1b5d8";
    }
}

function like() {
    let temple = select.options[select.selectedIndex].value;
    let liked = localStorage.getItem(`${temple}liked`);
    if (like_btn.innerHTML == "Like") {
        like_btn.innerHTML = "👍 Liked";
        like_btn.style.backgroundColor = "#a1b5d8";
        localStorage.setItem(`${temple}liked`, '👍 Liked');
    } else {
        like_btn.innerHTML = "Like";
        like_btn.style.backgroundColor = "#f2f2f2"
        localStorage.removeItem(`${temple}liked`)
    }
}