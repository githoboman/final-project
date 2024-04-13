// Get important variables first
const header = document.getElementById("header");
const main = document.querySelector("main");
const toggleBtn = document.getElementById("toggle-btn");
const navClose = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-link");
const navContainer = document.querySelector(".nav");


// SHOWING THE MENU

// If the toggleBtn or NavClose button exists, when it is CLICKED, the class "show menu" will be added to the current class names
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navContainer.classList.add("show-menu");
  });
}

// HIDING THE MENU
if (navClose) {
  navClose.addEventListener("click", () => {
    navContainer.classList.remove("show-menu");
  });
}

//  When you get to this point, go back and create the show-menu class

// CLOSING THE MOBILE MENU WHEN THE NAV-LINK IS CLICKED

const closeMenu = () => main.classList.remove("show-menu");

navLinks.forEach((navlink) => navlink.addEventListener("click", closeMenu));

// ADDING BOX-SHADOW TO THE HEADER WHEN SCROLLING

function scrollHeader() {
  if (this.scrollY >= 50) {
    toggleBtn.classList.add("show-bg");
  } else {
    toggleBtn.classList.remove("show-bg");
  }
}

window.addEventListener("scroll", scrollHeader);

// ADDING CSS TO THE CURRENTLY ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");

    let link = document.querySelector(`.nav-link a[href*= ${sectionId}]`);

    // removing and adding activeClass
    if (scrollY > sectionTop && scrollY <= (sectionTop + sectionHeight)) {

      console.log(link)
      link.classList.add("activeLink");
    } else {
      link.classList.remove("activeLink");
    }
  });
}

window.addEventListener("scroll", scrollActive);
