// intro

let i = 0;
let txt = "Sit back, relax and enjoy the"; /* The text */
let speed = 150; /* The speed/duration of the effect in milliseconds */
let text = document.getElementById("text");
let stroke = document.getElementById("stroke");
stroke.classList.add("stroke-effect");

function typeWriter() {
  if (i < txt.length) {
    text.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// /intro

// cursor
const cursorPointed = document.querySelector(".pointed");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);

// /cursor
