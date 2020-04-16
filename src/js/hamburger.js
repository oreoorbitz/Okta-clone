let menu = document.getElementsByClassName("js-hamburger")[0];

menu.addEventListener("click", e => {
  menu.classList.toggle("active");
  console.log("test");
  toggleNav();
});

const toggleNav = function() {
  const nav = document.getElementsByClassName("js-mobile-nav")[0];
  const mainContent = document.getElementsByClassName("js-main-banner")[0];
  nav.classList.toggle("hidden");
  mainContent.classList.toggle("hidden");
};
