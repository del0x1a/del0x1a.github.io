 function pauseGif() {
  const gif = document.getElementById("nav-gif");

// store original and still src
const animatedSrc = "images/cat-roll.gif";
const stillSrc = "images/cat-roll-frame20.png";

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
 
 
 function currentActivity() {
  // Array of possible activities with emojis
    const activities = [
      "reading a book 📖",
      "writing some code 💻",
      "drinking coffee ☕",
      "listening to music 🎵",
      "taking a walk 🚶",
      "thinking about life 🤔",
      "learning something new 🧠",
      "planning the next project 📝",
      "exploring the outdoors 🌳",
      "playing a game 🎮",
      "praising the sun 🌞"
    ];

    // Function to pick a random activity
    function getRandomActivity() {
      const index = Math.floor(Math.random() * activities.length);
      return activities[index];
    }

    // Update the message dynamically on page load
    const statusElement = document.getElementById("status-message");
    statusElement.textContent = ` ${getRandomActivity()}`;

 } 

 currentActivity();
 pauseGif();
