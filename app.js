// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navOut = document.getElementsByClassName("main__heading")[0];
const navlinks = document.getElementsByClassName("nav-link");
console.log(navlinks);

const navClose = document.getElementsByClassName("nav-close")[0];
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("show-Navbar");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("show-Navbar");
});

window.addEventListener("click", (e) => {
  Array.from(navlinks).forEach((nav) => {
    if (e.target == nav) {
      navbar.classList.remove("show-Navbar");
    } else if (e.target == navOut) {
      navbar.classList.remove("show-Navbar");
    }
  });
});
