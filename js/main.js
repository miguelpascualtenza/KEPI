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
  console.log(document.getElementById('first-nameContact'));
  document.getElementById('first-nameContact').placeholder = data.first-nameContact;
 

  console.log(document);
  console.log(document.getElementById('last-nameContact'));
  document.getElementById('last-nameContact').placeholder = data.last-nameContact;

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

  console.log(document);
  console.log(document.getElementById('camisaY3'));
  document.getElementById('camisaY3').innerHTML = data.camisaY3;

  console.log(document);
  console.log(document.getElementById('camisetaBurberry'));
  document.getElementById('camisetaBurberry').innerHTML = data.camisetaBurberry;

  console.log(document);
  console.log(document.getElementById('stoneIlandSudadera'));
  document.getElementById('stoneIlandSudadera').innerHTML = data.stoneIlandSudadera;

  console.log(document);
  console.log(document.getElementById('sudaderay3'));
  document.getElementById('sudaderay3').innerHTML = data.sudaderay3;

  console.log(document);
  console.log(document.getElementById('chaquetaMoncler'));
  document.getElementById('chaquetaMoncler').innerHTML = data.chaquetaMoncler;

  console.log(document);
  console.log(document.getElementById('camisetaBurberry1'));
  document.getElementById('camisetaBurberry1').innerHTML = data.camisetaBurberry1;

  console.log(document);
  console.log(document.getElementById('stoneIslandShirt'));
  document.getElementById('stoneIslandShirt').innerHTML = data.stoneIslandShirt;

  console.log(document);
  console.log(document.getElementById('poloMoncler'));
  document.getElementById('poloMoncler').innerHTML = data.poloMoncler;

  console.log(document);
  console.log(document.getElementById('cortay3'));
  document.getElementById('cortay3').innerHTML = data.cortay3;

  console.log(document);
  console.log(document.getElementById('burrberry3'));
  document.getElementById('burrberry3').innerHTML = data.burrberry3; 

  console.log(document);
  console.log(document.getElementById('chaquetaStone'));
  document.getElementById('chaquetaStone').innerHTML = data.chaquetaStone;


    //Este es de la pagina de mujeres descripcion ropa


    console.log(document);
    console.log(document.getElementById('chalecoMoncler3'));
    document.getElementById('chalecoMoncler3').innerHTML = data.chalecoMoncler3;

    console.log(document);
    console.log(document.getElementById('camisay3m'));
    document.getElementById('camisay3m').innerHTML = data.camisay3m;

    console.log(document);
    console.log(document.getElementById('camisaBurberrym'));
    document.getElementById('camisaBurberrym').innerHTML = data.camisaBurberrym;

    console.log(document);
    console.log(document.getElementById('sudaderastoneis'));
    document.getElementById('sudaderastoneis').innerHTML = data.sudaderastoneis;

    console.log(document);
    console.log(document.getElementById('camisaMonclerm'));
    document.getElementById('camisaMonclerm').innerHTML = data.camisaMonclerm;

    console.log(document);
    console.log(document.getElementById('camisanig'));
    document.getElementById('camisanig').innerHTML = data.camisanig;

    console.log(document);
    console.log(document.getElementById('camisarayas'));
    document.getElementById('camisarayas').innerHTML = data.camisarayas;

    console.log(document);
    console.log(document.getElementById('sudaderastoneisla'));
    document.getElementById('sudaderastoneisla').innerHTML = data.sudaderastoneisla;






  /* marc, he hecho los l18N, que es donde he traducido todos los textos en tres idiomas  */
}

