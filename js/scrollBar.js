window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  document.querySelectorAll(".section").forEach((el, i) => {
    if (
      el.offsetTop - document.querySelector(".navigation").clientHeight <=
      scrollDistance
    ) {
      document.querySelectorAll(".navigation__link").forEach((el) => {
        if (el.classList.contains(".navigation__link_active")) {
          el.classList.remove(".navigation__link_active");
        }
      });
      console.log(i);
      document
        .querySelectorAll(".navigation__item")
        [i].querySelector(".navigation__link")
        .classList.add(".navigation__link_active");
    }
  });
});
