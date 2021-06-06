// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navOut = document.getElementsByClassName("main__heading")[0];
const navlinks = document.getElementsByClassName("nav-link");
// console.log(navlinks);

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

let prevScrollpos = window.pageYOffset;
// console.log(prevScrollpos);
window.onscroll = function () {
  let currScrollpos = window.pageYOffset;
  // console.log(prevScrollpos);

  if (prevScrollpos > 600) {
    // console.log("hiii");
    navBtn.style.display = "none";
  } else if (currScrollpos) {
    navBtn.style.display = "block";
  }
  prevScrollpos = currScrollpos;
};
