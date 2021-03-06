let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides__item");
  let dots = document.getElementsByClassName("slider-nav__item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      " slider-nav__item_active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slider-nav__item_active";
}



//ctrl+d, ctrl+x, ctrl+a, <<ctrl+f2>>