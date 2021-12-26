var slideIndex = 1;

makeSlideshow(slideIndex);

function plusSlides(n) {
  makeSlideshow((slideIndex += n));
}

function currentSlide(n) {
  makeSlideshow((slideIndex = n));
}

function makeSlideshow(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
}

setInterval(function () {
  slideIndex++;
  makeSlideshow(slideIndex);
}, 5000);
