const btnMenuRef = document.querySelector(".header__button-menu");
const navRef = document.querySelector(".header__nav");

btnMenuRef.addEventListener("click", (e) => {
  const isOpen = navRef.classList.contains("header__nav--active")
    ? true
    : false;
  navRef.classList.toggle("header__nav--active");
  btnMenuRef.classList.toggle("header__button-menu--active");
  btnMenuRef.setAttribute("aria-expanded", isOpen);
  console.log(navRef.classList.contains("header__nav--active"));
  e.target.textContent = navRef.classList.contains("header__nav--active")
    ? "close"
    : "menu";
});
