function pauseGif() {
    const gif = document.getElementById("nav-gif");

    // store original and still src depending on path
    let animatedSrc, stillSrc;
    if (window.location.pathname.startsWith("/notes/")) {
        animatedSrc = "../images/cat-roll.gif";
        stillSrc = "../images/cat-roll-frame20.png";
    } else {
        animatedSrc = "images/cat-roll.gif";
        stillSrc = "images/cat-roll-frame20.png";
    }

    // Load state from localStorage (default: not paused)
    let isPaused = localStorage.getItem("gifPaused") === "true";

    // Set initial src based on saved state
    gif.src = isPaused ? stillSrc : animatedSrc;

    // Toggle on click and persist
    gif.addEventListener("click", () => {
        if (isPaused) {
            gif.src = animatedSrc; // play GIF
            localStorage.setItem("gifPaused", "false");
        } else {
            gif.src = stillSrc; // pause GIF
            localStorage.setItem("gifPaused", "true");
        }
        isPaused = !isPaused;
    });
}

pauseGif();
