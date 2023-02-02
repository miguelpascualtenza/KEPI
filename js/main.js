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

  //Este es de la pagina register

  console.log(document);
  console.log(document.getElementById('first_name'));
  document.getElementById('first_name').placeholder = data.first_name;
 

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
  document.getElementById('inicio_sesion').innerHTML = data.inicio_sesion;


  //Este es de la pagina contacto

  console.log(document);
  console.log(document.getElementById('first_nameContact'));
  document.getElementById('first_nameContact').placeholder = data.first_nameContact;
 

  console.log(document);
  console.log(document.getElementById('last_nameContact'));
  document.getElementById('last_nameContact').placeholder = data.last_nameContact;

  console.log(document);
  console.log(document.getElementById('emailContact'));
  document.getElementById('emailContact').placeholder = data.emailContact;

  console.log(document);
  console.log(document.getElementById('telefonoContact'));
  document.getElementById('telefonoContact').placeholder = data.telefonoContact;

  console.log(document);
  console.log(document.getElementById('conceptoContact'));
  document.getElementById('conceptoContact').value = data.conceptoContact;

  console.log(document);
  console.log(document.getElementById('envioContact'));
  document.getElementById('envioContact').innerHTML = data.envioContact;




  //Este es de la pagina de hombres menu

  console.log(document);
  console.log(document.getElementById('HombreHombre'));
  document.getElementById('Hombre').innerHTML = data.HombreHombre;

  console.log(document);
  console.log(document.getElementById('MujerHombre'));
  document.getElementById('MujerHombre').innerHTML = data.MujerHombre;

  console.log(document);
  console.log(document.getElementById('NiñosHombre'));
  document.getElementById('NiñosHombre').innerHTML = data.NiñosHombre;

  console.log(document);
  console.log(document.getElementById('BellezaHombre'));
  document.getElementById('BellezaHombre').innerHTML = data.BellezaHombre;

  console.log(document);
  console.log(document.getElementById('contactHombre'));
  document.getElementById('contactHombre').innerHTML = data.contactHombre;


  //Este es de la pagina de hombres descripcion ropa

  console.log(document);
  console.log(document.getElementById('chalecoMoncler'));
  document.getElementById('chalecoMoncler').innerHTML = data.chalecoMoncler;



  /*console.log(document);
  console.log(document.getElementById('novedades'));
  document.getElementById('novedades').innerHTML = data.novedades;

  console.log(document);
  console.log(document.getElementById('mujer'));
  document.getElementById('mujer').innerHTML = data.mujer;*/






}

