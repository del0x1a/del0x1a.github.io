function pauseGif() {
    const gif = document.getElementById("nav-gif");

    // store original and still src

    let animatedSrc, stillSrc;
    if (window.location.pathname.startsWith("/notes/")) {
        animatedSrc = "../images/cat-roll.gif";
        stillSrc = "../images/cat-roll-frame20.png";
    } else {
        animatedSrc = "images/cat-roll.gif";
        stillSrc = "images/cat-roll-frame20.png";
    }


    let isPaused = false;

    gif.addEventListener("click", () => {
    if (isPaused) {
        gif.src = animatedSrc; // play GIF
    } else {
        gif.src = stillSrc;    // pause GIF
    }
    isPaused = !isPaused;
});

}
pauseGif();