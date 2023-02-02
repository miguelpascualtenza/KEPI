 /* Inicio Miguel Pascual */
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


  /* menu responsibe */
  document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
  });

  document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".iconos").classList.toggle("show");
  });
   /* Final Miguel Pascual */


mostrarImagen();

setInterval(() => {
  imagenActual = (imagenActual + 1) % imagenes.length; //pasa a la siguente imagen cada 2seg
  mostrarImagen();
}, 2000);

// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar l'idioma a la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtenir el fitxer json corresponent
  const response = await fetch(`../I18N/${lang}.json`);
  const data = await response.json();



  // Canviar els texts (Aquesta és la part que heu de modificar)

  console.log(document);
  console.log(document.getElementById('first_name'));
  document.getElementById('first_name').placeholder = data.first_name;
  document.getElementById('warning_first_name').innerHTML = data.warning_first_name;

  

  console.log(document);
  console.log(document.getElementById('last_name'));
  document.getElementById('last_name').placeholder = data.last_name;

  console.log(document);
  console.log(document.getElementById('email'));
  document.getElementById('email').placeholder = data.email;

  console.log(document);
  console.log(document.getElementById('Password'));
  document.getElementById('Password').placeholder = data.Password;

  console.log(document);
  console.log(document.getElementById('inicio_sesion'));
  document.getElementById('inicio_sesion').value = data.inicio_sesion;

  console.log(document);
  console.log(document.getElementById('novedades'));
  document.getElementById('novedades').innerHTML = data.novedades;

  console.log(document);
  console.log(document.getElementById('mujer'));
  document.getElementById('mujer').innerHTML = data.mujer;




}

