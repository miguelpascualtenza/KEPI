/* Carousel */
const imagenes = document.querySelectorAll('.imagen'); //array con todas las imagenes
let imagenActual = 0; //sigue el array de imagenes

function mostrarImagen() {
  imagenes.forEach((imagen) => {
   imagen.style.display = 'none'; //oculta todas las imagenes
  });
  imagenes[imagenActual].style.display = 'block'; //muestra solo la que la imagenActual dice
}

mostrarImagen();

setInterval(() => {
  imagenActual = (imagenActual + 1) % imagenes.length; //pasa a la siguente imagen cada 2seg
  mostrarImagen();
}, 2000);



