
// titulos de los items del nav usando js // Contactez-nous, Parrainage, Déconnexion
const nav_items = document.querySelectorAll('ul a'); //seleccionos todas las etiquetas que estan dento de la etiqueta ul. ////recomiendo usar el console.log luego de usar una variable para saber los artibutos que puedes editar.
//luego solo reemplazo el textcontent de cada item (si vez en el codigo html, los nombres son  "Nav item 1",2,3)

nav_items[0].textContent="Contactez-nous"  
nav_items[1].textContent="Parrainage"
nav_items[2].textContent="Déconnexion"

//////////////////////

//tambien puedes cambiar las imamenes de cada item (ej los guantes).
const img_items = document.querySelectorAll('.grid_items img');
//selecciono todas las etiquetas img que estan dentro de grid_items, (se usa ".grid_items" porque encierra todas las etiquetas img que necesito)
img_items[0].src="images/guantes.webp";
img_items[1].src="images/guantes_2.webp";
img_items[2].src="images/guantes_2.webp";
img_items[3].src="images/guantes.webp";


//estilos ---puedes aplicar los estilos css usando el elemento.style
//para llamar los elementos, puedes ahecrlo de 3 maneras:
// 1) getelement
// 2) queryselector
// 3) id directo.

// usando forma 1) con el header
const header = document.getElementsByTagName('header')[0]; //uso tagname porque quiero la etiqueta, solo debes fijarte si quieres un elemento por su etiqueta, id o clase.
//[0] se refiere a que capturará al primer elemento header que encuentre.
/* console.log(header);  */ //console log para verificar si capturaste el elemento.
//ahora ya puedes modificar lo que quieras (estilos en este caso)
header.style.backgroundColor = 'white';
header.style.height = '100px';
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.padding = '10px 0';

//usando la forma 2) con una clase "contenedor" y un id "header_left"
const contenedor = document.querySelector('.contenedor');
const headerLeft = document.querySelector('#header_left');

contenedor.style.height = '100%';
contenedor.style.width = '900px';
contenedor.style.maxWidth = '900px';
contenedor.style.display = 'flex';
contenedor.style.justifyContent = 'space-between';

headerLeft.style.height = '100%';
headerLeft.style.display = 'flex';
headerLeft.style.flexDirection = 'column';
headerLeft.style.justifyContent = 'space-between';

//lo mismo para los otros con la forma 2)
const nav = document.querySelector('nav');
const navUl = document.querySelector('nav ul');
const logo = document.querySelector('#logo');

nav.style.width = 'max-content';
nav.style.display = 'flex';
nav.style.flexDirection = 'column';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'end';

navUl.style.display = 'flex';
navUl.style.flexDirection = 'row';
navUl.style.float = 'right';
navUl.style.gap = '2rem';

logo.style.width = '200px';

//Cuando se usa querySelectorAll puedes usar un foreach para no usar los indices [0], [1], etc de cada elemento que encuentre.
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.style.color = 'black';
    link.style.textDecoration = 'none';
    link.style.whiteSpace = 'nowrap';
});

const spans = document.querySelectorAll('span');
spans.forEach(span => {
    span.style.color = 'orange';
});


////////////
//para la forma 3--- se puede llamar directamente a los elementos por su id.
//como ejemplo usamos la etiqueta <main id="main">

main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.margin = '10px 0';
//lo mismo con container  <div class="container" id="container">
container.style.height = '100%';
container.style.width = '900px';
container.style.maxWidth = '900px';
container.style.textAlign = 'center';
container.style.backgroundColor = 'rgb(233, 233, 233)';
// y con banner  <img id="banner" src="images/banner.webp" alt="Image-box">
banner.style.width = '100%';
//(de esta manera no es necesario declarar una variable)


//lo demas es mas de lo mismo
const gridItems = document.querySelector('.grid_items');
const itemCards = document.querySelectorAll('.item_card');
const itemImgs = document.querySelectorAll('.item_img');
const prixs = document.querySelectorAll('.prix');
const itemFooters = document.querySelectorAll('.item_footer');
const itemFooterButtons = document.querySelectorAll('.item_footer button');
const itemFooterPs = document.querySelectorAll('.item_footer p');
const itemFooterSs = document.querySelectorAll('.item_footer s');

gridItems.style.width = '100%';
gridItems.style.display = 'grid';
gridItems.style.gridTemplateColumns = '1fr 1fr';
gridItems.style.padding = '40px 80px';
gridItems.style.gap = '80px';

itemCards.forEach(card => {
  card.style.position = 'relative';
});

itemImgs.forEach(img => {
  img.style.backgroundColor = 'white';
  img.style.gap = '10px';
  img.style.paddingBottom = '10px';
  img.querySelector('img').style.width = '100%';
});

prixs.forEach(prix => {
  prix.style.position = 'absolute';
  prix.style.top = '10px';
  prix.style.right = '-40px';
  prix.style.backgroundColor = 'black';
  prix.style.color = 'rgb(255, 186, 58)';
  prix.style.padding = '10px 20px';
  prix.style.borderRadius = '10px';
  prix.style.fontSize = '20px';
});

itemFooters.forEach(footer => {
  footer.style.display = 'flex';
  footer.style.justifyContent = 'space-between';
  footer.style.height = '60px';
  footer.style.alignItems = 'center';
  footer.style.padding = '0 10px';
});

itemFooterButtons.forEach(button => {
  button.style.backgroundColor = 'black';
  button.style.color = 'white';
  button.style.fontSize = '17px';
  button.style.padding = '5px 20px';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
});

itemFooterPs.forEach(p => {
  p.style.fontSize = '23px';
  p.style.color = 'rgb(255, 186, 58)';
});

itemFooterSs.forEach(s => {
  s.style.color = 'black';
  s.style.marginRight = '20px';
});

const footer = document.querySelector('footer');
footer.style.backgroundColor = 'black';
footer.style.marginTop = '-10px';
footer.style.height = '250px';
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.alignItems = 'center';

const servicios = document.querySelector('#servicios');
servicios.style.paddingTop = '60px';
servicios.style.height = '60%';
servicios.style.display = 'flex';
servicios.style.justifyContent = 'center';
servicios.style.gap = '20px';
servicios.style.width = '900px';
servicios.style.maxWidth = '900px';
servicios.style.borderBottom = '2px solid gray';
servicios.style.paddingBottom = '30px';

const serviciosItems = document.querySelectorAll('.servicios_items');
serviciosItems.forEach(item => {
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.justifyContent = 'center';
  item.style.alignItems = 'center';
});

const serviciosImages = document.querySelectorAll('.servicios_items img');
serviciosImages.forEach(image => {
  image.style.width = '50px';
  image.style.marginBottom = '10px';
});

const serviciosTexts = document.querySelectorAll('.servicios_items p');
serviciosTexts.forEach(text => {
  text.style.color = 'white';
  text.style.width = '200px';
  text.style.textAlign = 'center';
});

const logos = document.querySelector('#logos');
logos.style.display = 'flex';
logos.style.gap = '40px';
logos.style.marginTop = '40px';

const logoImages = document.querySelectorAll('#logos img');
logoImages.forEach(image => {
  image.style.height = '25px';
});

document.body.style.backgroundColor = "rgb(20, 20, 20)";

/* mediaquery / responsive*/
const querySmall = '(max-width: 650px)';
const mqSmall = window.matchMedia(querySmall);
mqSmall.addListener(actualizarEstilos);

function actualizarEstilos(mq) {
  if (mq.matches) {
    const header = document.querySelector("header");
  header.style.height = "200px";

  const contenedor = document.querySelector(".contenedor");
  contenedor.style.height = "100%";
  contenedor.style.display = "flex";
  contenedor.style.flexDirection = "column";
  contenedor.style.justifyContent = "space-between";

  const headerLeft = document.querySelector("#header_left");
  headerLeft.style.height = "50%";
  headerLeft.style.alignItems = "center";
  headerLeft.style.paddingTop = "15px";

  const nav = document.querySelector("nav");
  nav.style.height = "35%";
  nav.style.alignItems = "start";
  nav.style.paddingLeft = "20px";

  const navUl = document.querySelector("nav ul");
  navUl.style.display = "flex";

  const main = document.querySelector("main");
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.margin = "10px 0";

  const container = document.querySelector(".container");
  container.style.width = "92%";

  const gridItems = document.querySelector(".grid_items");
  gridItems.style.gridTemplateColumns = "1fr";

  const itemFooterButtons = document.querySelectorAll(".item_footer button");
  for (let i = 0; i < itemFooterButtons.length; i++) {
    itemFooterButtons[i].style.zoom = ".7";
  }

  const itemFooterP = document.querySelectorAll(".item_footer p");
  for (let i = 0; i < itemFooterP.length; i++) {
    itemFooterP[i].style.fontSize = "17px";
  }

  const itemFooterS = document.querySelectorAll(".item_footer s");
  for (let i = 0; i < itemFooterS.length; i++) {
    itemFooterS[i].style.marginRight = "10px";
  }

  const footer = document.querySelector("footer");
  footer.style.height = "max-content";
  footer.style.paddingBottom = "15px";

  const servicios = document.querySelector("#servicios");
  servicios.style.height = "max-content";
  servicios.style.display = "grid";
  servicios.style.width = "100%";
  servicios.style.gridTemplateColumns = "1fr 1fr";
  servicios.style.justifyContent = "center";

  const serviciosItemsP = document.querySelectorAll(".servicios_items p");
  for (let i = 0; i < serviciosItemsP.length; i++) {
    serviciosItemsP[i].style.color = "white";
    serviciosItemsP[i].style.width = "200px";
    serviciosItemsP[i].style.textAlign = "center";
    serviciosItemsP[i].style.fontSize = "12px";
  }

  const htmlBody = document.querySelectorAll("html,body");
  for (let i = 0; i < htmlBody.length; i++) {
    htmlBody[i].style.width = "100vw";
    htmlBody[i].style.overflowX = "hidden";
  }
  }  //para el else repito lo mismo de arriba para que regrese a si estado normal de pantalla grande. podria simplemente ajustarlo para no repetir, pero asi se
  else{

  }
}
