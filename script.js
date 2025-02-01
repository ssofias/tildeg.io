/*document.addEventListener("DOMContentLoaded", () => {
    // Star settings
    const starCount = 3000;
    const starsContainer = document.querySelector('.stars');
    const passwordContainer = document.getElementById("password-container");
    const content = document.getElementById("content");

    // Create static stars in the background
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 2; // Adjust size for visibility
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        starsContainer.appendChild(star);
    }

    // Shooting star functionality
    let shootingStarActive = false;

    function createShootingStar() {
        if (!shootingStarActive) {
            shootingStarActive = true;

            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');

            // Random start position at top
            shootingStar.style.top = '0';
            shootingStar.style.left = Math.random() * 100 + 'vw';

            // Set random animation duration
            shootingStar.style.animationDuration = Math.random() * 3 + 7 + 's';
            shootingStar.style.animationName = 'shootingStar';
            starsContainer.appendChild(shootingStar);

            shootingStar.addEventListener('animationend', () => {
                shootingStar.remove();
                shootingStarActive = false;
            });
        }
    }

    setInterval(createShootingStar, 3000); // Interval for shooting stars

    // Password functionality
    const correctPassword = "seb";
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-password");
    const errorMessage = document.getElementById("error-message");

    submitButton.addEventListener("click", () => {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            passwordContainer.style.transition = "opacity 1s ease-in-out";
            passwordContainer.style.opacity = "0"; // Fade out password container

            // Redirect after fade-out
            setTimeout(() => {
                window.location.href = "content.html"; // Redirect to content page
            }, 1000); // Match fade-out duration
        } else {
            errorMessage.textContent = "Feil kode. Prøv igjen.";
        }
    });
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openButton");
    const letter = document.getElementById("letter");

    openButton.addEventListener("click", function() {
        letter.classList.toggle("open");
    });
});



});*/

// Password (change this to your desired password)
const correctPassword = "ILoveYou";

// Date you met (change this to your actual date)
const metDate = new Date("2024-08-14T00:25:00");

function checkPassword() {
  const passwordInput = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");

  if (passwordInput === correctPassword) {
    document.getElementById("password-page").style.display = "none";
    document.getElementById("content-page").style.display = "block";
    startTimer();
  } else {
    errorMessage.style.display = "block";
  }
}

function startTimer() {
  setInterval(() => {
    const now = new Date();
    const timeDiff = now - metDate;

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("years").innerText = years;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);
}