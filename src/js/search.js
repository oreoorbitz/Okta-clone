let searchIcon = document.getElementsByClassName("js-search-icon")[0];
let searchBar = document.getElementsByClassName("js-search-bar")[0];
searchIcon.addEventListener("click", e => {
  searchIcon.classList.toggle("active");
  searchBar.classList.toggle("visible");
});
