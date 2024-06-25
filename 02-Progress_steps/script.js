const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

circles.forEach((circle, index) => {
  index < currentActive
    ? circle.classList.add("active")
    : circle.classList.remove("active");
});
