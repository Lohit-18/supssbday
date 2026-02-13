const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const backBtn = document.getElementById("backBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let confettiInterval;

function showPage2() {
  page1.classList.remove("active");
  page2.classList.add("active");
  startConfetti();
}

function showPage1() {
  page2.classList.remove("active");
  page1.classList.add("active");
  stopConfetti();
}

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

/* Works for laptop hover */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Works for mobile touch */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

/* If she tries to click */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

/* YES button */
yesBtn.addEventListener("click", showPage2);

/* Back button */
backBtn.addEventListener("click", showPage1);

/* Confetti effect */
function startConfetti() {
  confettiInterval = setInterval(() => {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
    confetti.style.opacity = Math.random();

    const colors = ["#4169e1", "#a78bfa", "#ffffff", "#7b2cff", "#00bfff"];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }, 120);
}

function stopConfetti() {
  clearInterval(confettiInterval);
  document.querySelectorAll(".confetti").forEach(c => c.remove());
}
