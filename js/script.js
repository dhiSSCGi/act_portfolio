window.addEventListener("scroll", function () {
  const div = document.querySelector(".slide-up-div");
  const divPosition = div.getBoundingClientRect().top; // Get the position of the div relative to the viewport
  const windowHeight = window.innerHeight; // Get the height of the viewport

  // If the top of the div is within the viewport, make it slide up
  if (divPosition <= windowHeight) {
    div.classList.add("visible");
  } else {
    div.classList.remove("visible");
  }
});

// Add custom JavaScript here
function runTypingEffect() {
  const texts = ["Web Developer", "Mobile Developer"];
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 150;
  const eraseDelay = 50;
  const pauseDelay = 1000;
  let currentTextIndex = 0;

  function typeAndErase() {
    typeText(texts[currentTextIndex], typingElement, typingDelay, () => {
      setTimeout(() => {
        eraseText(typingElement, eraseDelay, () => {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          typeAndErase();
        });
      }, pauseDelay);
    });
  }

  typeAndErase();
}

function typeText(text, typingElement, delay, callback) {
  let i = 0;
  typingElement.textContent = ""; // Clear text before starting
  const typingInterval = setInterval(() => {
    typingElement.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
      callback(); // After typing is done, call the callback
    }
  }, delay);
}

function eraseText(typingElement, delay, callback) {
  let i = typingElement.textContent.length;
  const erasingInterval = setInterval(() => {
    typingElement.textContent = typingElement.textContent.slice(0, i - 1);
    i--;
    if (i === 0) {
      clearInterval(erasingInterval);
      callback();
    }
  }, delay);
}

window.onload = runTypingEffect;

// function moveRocket() {
//   var rocket = document.getElementById("rocketImage");
//   var boom = document.getElementById("explosionImg");

//   // Make the rocket visible
//   rocket.style.display = "block";

//   // Initial position and rotation (this will be the starting point)
//   setTimeout(function () {
//     rocket.style.top = "100px";
//     rocket.style.left = "500px";
//     rocket.style.transform = "rotate(0deg)";
//   }, 0);

//   // After 3 seconds, rotate 45 degrees and move to the new position
//   setTimeout(function () {
//     rocket.style.transform = "rotate(45deg)";
//     rocket.style.top = "-300px";
//     rocket.style.left = "600px";
//   }, 1500);

//   // After 6 seconds, rotate back to 0 degrees and move to another position
//   setTimeout(function () {
//     rocket.style.transform = "rotate(0deg)";
//     rocket.style.top = "-320px";
//     rocket.style.left = "500px";
//   }, 2500);

//   // After 9 seconds, rotate -45 degrees and move to the next position
//   setTimeout(function () {
//     rocket.style.transform = "rotate(-45deg)";
//     rocket.style.top = "-275px";
//     rocket.style.left = "300px";
//   }, 4000);

//   // After 12 seconds, rotate -90 degrees and move to the final position
//   setTimeout(function () {
//     rocket.style.transform = "rotate(-90deg)";
//     rocket.style.top = "-200px";
//     rocket.style.left = "100px";
//   }, 5500);

//   // After 15 seconds, hide the rocket
//   setTimeout(function () {
//     rocket.style.display = "none";
//   }, 7500);
//   setTimeout(function () {
//     boom.style.display = "block";
//   }, 7250);

//   setTimeout(function () {
//     boom.style.display = "none";
//   }, 9000);
// }

// document.getElementById("about").addEventListener("click", function (event) {
//   moveRocket();
// });

// Check localStorage for stored theme
// const currentTheme = localStorage.getItem("theme") || "light";

// // Apply the theme initially
// document.body.classList.add(currentTheme);

// // Get the toggle button and add an event listener
// const toggleButton = document.getElementById("modeToggle");
// toggleButton.addEventListener("click", () => {
//   // Toggle the theme
//   document.body.classList.toggle("dark");
//   // Store the theme in localStorage
//   if (document.body.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });
