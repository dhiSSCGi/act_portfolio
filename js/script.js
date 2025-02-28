// Add custom JavaScript here
function runTypingEffect() {
  const text = "I am Datu Hasmin Ibad";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 150;
  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);

function moveRocket() {
  var rocket = document.getElementById("rocketImage");
  var boom = document.getElementById("explosionImg");

  // Make the rocket visible
  rocket.style.display = "block";

  // Initial position and rotation (this will be the starting point)
  setTimeout(function () {
    rocket.style.top = "100px";
    rocket.style.left = "500px";
    rocket.style.transform = "rotate(0deg)";
  }, 0);

  // After 3 seconds, rotate 45 degrees and move to the new position
  setTimeout(function () {
    rocket.style.transform = "rotate(45deg)";
    rocket.style.top = "-300px";
    rocket.style.left = "600px";
  }, 1500);

  // After 6 seconds, rotate back to 0 degrees and move to another position
  setTimeout(function () {
    rocket.style.transform = "rotate(0deg)";
    rocket.style.top = "-320px";
    rocket.style.left = "500px";
  }, 2500);

  // After 9 seconds, rotate -45 degrees and move to the next position
  setTimeout(function () {
    rocket.style.transform = "rotate(-45deg)";
    rocket.style.top = "-275px";
    rocket.style.left = "300px";
  }, 4000);

  // After 12 seconds, rotate -90 degrees and move to the final position
  setTimeout(function () {
    rocket.style.transform = "rotate(-90deg)";
    rocket.style.top = "-200px";
    rocket.style.left = "100px";
  }, 5500);

  // After 15 seconds, hide the rocket
  setTimeout(function () {
    rocket.style.display = "none";
  }, 7500);
  setTimeout(function () {
    boom.style.display = "block";
  }, 7250);

  setTimeout(function () {
    boom.style.display = "none";
  }, 9000);
}

document.getElementById("about").addEventListener("click", function (event) {
  moveRocket();
});
