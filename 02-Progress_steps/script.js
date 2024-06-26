const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;

// console.log(circles);

circles.forEach((circle, index) => {
  if (index < currentActive) {
    circle.classList.add("active");
  } else {
    circle.classList.remove("active");
  }
});

function update() {
  const actives = document.querySelectorAll(".active");

  circles;
  if (actives.length === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
}

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
