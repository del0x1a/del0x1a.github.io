function pauseGif() {
    const gif = document.getElementById("nav-gif");

    // store original and still src

    var animatedSrc = "images/cat-roll.gif";
    var stillSrc = "images/cat-roll-frame20.png";

    if (window.location.pathname == "/notes/index.html") {
        animatedSrc = "../images/cat-roll.gif";
        stillSrc = "../images/cat-roll-frame20.png";
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