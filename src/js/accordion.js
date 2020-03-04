let accordionTitles = document.getElementsByClassName("js-title");
Array.from(accordionTitles).forEach(accordionTitle => {
  accordionTitle.addEventListener("click", e => {
    e.preventDefault();
    accordionTitle.classList.toggle("expanded");
    footerList = accordionTitle.parentNode.getElementsByClassName(
      "js-footer-list"
    )[0];
    footerList.classList.toggle("hidden");
  });
});
