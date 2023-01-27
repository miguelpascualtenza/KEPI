var slideIndex = 1;
showSlides(slideIndex);

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Selecciona la imagen
const miImagen = document.querySelector('.mi-imagen');
const imagenes = document.querySelectorAll('.imagenes-ocultas img');
let contador = 0;

// Establece el intervalo de tiempo para el cambio de imagen
const interval = setInterval(() => {
    miImagen.src = imagenes[contador].src;
    contador++;
    if (contador === 3){
        clearInterval(interval);
    }
    // Si se ha llegado al final del array, vuelve a la primera imagen
    if (contador === imagenes.length) {
        contador = 0;
    }
}, 1000);

// Detiene el intervalo al salir el cursor
miImagen.addEventListener('mouseout', () => {
    clearInterval(interval);
});
