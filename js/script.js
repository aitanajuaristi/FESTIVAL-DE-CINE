const hamb = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-links");
const icon = hamb.querySelector("i");

hamb.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Cambia entre hamburguesa y X
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});