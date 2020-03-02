let menu = document.getElementsByClassName("js-hamburger")[0];
console.log(menu);
menu.addEventListener("click", e => {
  menu.classList.toggle("active");
});
