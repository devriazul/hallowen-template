const navBtn = document.querySelector(".nav__btn");
const navBar = document.querySelector(".nav__list");
const header = document.querySelector(".header-section");
const navLinks = document.querySelectorAll(".nav__link");
const section = document.querySelectorAll("section");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  navBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
  if (scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav__link[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
