setInterval(() => {
  document.querySelectorAll(".section").forEach((el, i) => {
    if (el.getBoundingClientRect().y <= window.innerHeight / 2) {
      document.querySelectorAll(".navigation__link").forEach((el) => {
        if (el.classList.contains("navigation__link_active")) {
          el.classList.remove("navigation__link_active");
        }
      });
      document
        .querySelectorAll(".navigation__item")
        [i].querySelector(".navigation__link")
        .classList.add("navigation__link_active");
    }
  });
}, 100);
