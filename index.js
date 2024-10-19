let openToggle = document.querySelector(".toggle-open");
let closeToggle = document.querySelector(".close-toggle");
let navLinks = document.querySelector(".nav-links");
console.log(navLinks);

function showLinks() {
  navLinks.classList.add("show-nav-links");
}

function removeLinks() {
  navLinks.classList.remove("show-nav-links");
}
openToggle.addEventListener("click", showLinks);
closeToggle.addEventListener("click", removeLinks);
