const panel = document.querySelectorAll(".panel");

panel.forEach((pan) => {
  pan.addEventListener("click", () => {
    pan.classList.add("active");
  });
});
