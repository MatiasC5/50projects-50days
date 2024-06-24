const panel = document.querySelectorAll(".panel");

panel.forEach((pan) => {
  pan.addEventListener("click", () => {
    removeClass();
    pan.classList.add("active");
  });
});

function removeClass() {
  panel.forEach((pan) => {
    pan.classList.remove("active");
  });
}
