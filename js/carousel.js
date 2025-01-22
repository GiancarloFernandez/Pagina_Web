let currentIndex = 0;
const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;

function moveCarousel() {
  // Cambiar a la siguiente imagen
  currentIndex = (currentIndex + 1) % totalImages; 
  document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambiar la imagen cada 10 segundos
setInterval(moveCarousel, 10000);

// Código para el efecto de difuminado en la barra de navegación
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});