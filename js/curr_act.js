 
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
