const headerNav1 = document.querySelector(".header-nav__item-dropdown");
const headerDropdown = document.querySelector(".header-dropdown");
const headerArrow1 = document.querySelector(".arrow-1");
const headerArrow2 = document.querySelector(".arrow-2");

const toggleMenu = () => {
  //Dropdown
  headerDropdown.classList.toggle("_active");
};
const toggleArrow = () => {
  //Arrow
  headerArrow1.classList.toggle("_active");
  headerArrow2.classList.toggle("_hidden");
};
//---------------------open or close on click outside-------------------------//
headerNav1.addEventListener("click", () => {
  //open or close Arrow on click inside
  headerArrow1.classList.toggle("_active");
  headerArrow2.classList.toggle("_hidden");
});

headerNav1.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});
//-------------------------close  on click outside----------------------------//
document.addEventListener("click", () => {
  //close Arrow on click outside
  let arrowActive = headerArrow1.classList.contains("_active");
  if (arrowActive) {
    toggleArrow();
  }
});
document.addEventListener("click", () => {
  //close Dropdown on click outside
  let menuActive = headerDropdown.classList.contains("_active");
  if (menuActive) {
    toggleMenu();
  }
});
