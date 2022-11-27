let hamburguesa = document.querySelector("#hamburguesa");
    function cruzHamburguesa(){
        let categorias = document.getElementById("categorias");
        let li = document.querySelectorAll("#li1");

        
        hamburguesa.classList.toggle("active");

        if (categorias.className == "oculto") {
            categorias.className = "visible";
            li.forEach(function(el,index){
                setTimeout(function() {
                    el.className = "entradaDesdeIzq";
                    let elem = li.length-1;
                    if(elem == index){
                        li[elem].className = "liToggle entradaDesdeIzq";
                    }

                }, index * 100);
            });
              
        }else{
            li.forEach(function(item){
                item.className = "oculto";
                li[11].className = "oculto";
            });
            categorias.className = "oculto";
            
        }

    }

hamburguesa.addEventListener("click", cruzHamburguesa);

/******5) El H1 debe reaccionar/disolverse y
volver a aparecer.************************************ */
var header = document.getElementById('tituloDesvanecerse');
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop * 2;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);

/******6. Al scrollear en la Página de lanzamiento del juego, 
las “Cards” deben aparecer con una
animación desde afuera de la pantalla y posicionarse en el 
lugar final tal cual el diseño original. Tener en cuenta 
que es on-scroll.
****************************/
  /*
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  3. Al hacer scroll el Header debe ser sticky y achicarse, 
  de tal manera que además el logo debe achicarse. 
  En caso de ser necesario cambiar el fondo a un 
  color plano (recomendado)
  */

let headerEj3 = document.getElementById("header");
let buscador = document.querySelector(".buscador");
let usuario = document.querySelector(".usuario");
let flecha = document.querySelector(".flecha");
let hamburguesaScroll = document.querySelector("#hamburguesa");
let linea1 = document.querySelector(".linea1");
let linea2 = document.querySelector(".linea2");
let linea3 = document.querySelector(".linea3");
let contenedorParallax = document.querySelector(".contenedorParallax");
let historiah1 = document.querySelector(".historiah1");
let listaCategorias = document.querySelector(".listaCategorias");
let pos = window.pageYOffset;

let contenedorPersonajes = document.querySelectorAll(".contenedorPersonajes");
let ListaPersonajes = document.querySelectorAll(".ListaPersonajes");

let reveals = document.querySelectorAll(".reveal");

function headerScroll(){

let actual = window.pageYOffset;

if(pos > actual){
  headerEj3.classList.add("header");
  headerEj3.classList.remove("headerScroll");
  contenedorParallax.style.height = "621px";

  buscador.classList.remove("noMostrarTransition");
  usuario.classList.remove("noMostrarTransition");
  flecha.classList.remove("noMostrarTransition");
  historiah1.classList.remove("historiah1Scroll");
  listaCategorias.classList.remove("listaCategoriasScroll");
  listaCategorias.classList.add("listaCategorias2");

  hamburguesaScroll.classList.remove("hamburguesaScroll");
  linea1.style.width = "100%";
  linea2.style.width = "100%";
  linea3.style.width = "100%";
  linea3.className = "#hamburguesa.active linea3";
}else{
  headerEj3.classList.remove("header");
  headerEj3.classList.add("headerScroll");
  contenedorParallax.style.height = "660px";

  buscador.classList.add("noMostrarTransition");
  buscador.style.transition = "all 2s ease";
  usuario.classList.add("noMostrarTransition");
  usuario.style.transition = "all 2s ease";
  flecha.classList.add("noMostrarTransition");
  flecha.style.transition = "all 2s ease";
  historiah1.classList.add("historiah1Scroll");
  listaCategorias.classList.add("listaCategoriasScroll");
  listaCategorias.classList.remove("listaCategorias2");

  hamburguesaScroll.classList.add("hamburguesaScroll");
  linea1.style.width = "50%";
  linea1.style.transition = "all 2s ease";
  linea2.style.width = "50%";
  linea2.style.transition = "all 2s ease";
  linea3.style.width = "50%";
  linea3.style.transition = "all 2s ease";
  linea3.className = "#hamburguesa.active linea3Scroll";

}

pos = actual;

contenedorPersonajes.forEach((container,i) => {
    let top = container.getBoundingClientRect().top - window.innerHeight;
    if(top > -350){
      ListaPersonajes[i].style.transform=`translateY(${350+ top}px)`;
    }
}) 


  
for (let i = 0; i < reveals.length; i++) {
  let windowHeight = window.innerHeight;
  let elementTop = reveals[i].getBoundingClientRect().top;
  let elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
  }
}

}

window.addEventListener("scroll", headerScroll);

    let imgLeftFirst = document.querySelector("#img-left-first");
    let imgLeftSecond = document.querySelector("#img-left-second");
    let imgLeftThird = document.querySelector("#img-left-third");
    let imgLeftFourth = document.querySelector("#img-left-fourth");
    let rightFirst = document.querySelector("#right-first");
    let rightSecond = document.querySelector("#right-second");
    let rightThird = document.querySelector("#right-third");
    let rightFourth = document.querySelector("#right-fourth");

    window.onscroll = function() {myFunction()};

    function myFunction() {
      if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 900) {
          imgLeftFirst.className = "img-left";
          rightFirst.className = "historia";
      } else {
          imgLeftFirst.className = "noMostrar";
      }if (document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 1600) {
          imgLeftSecond.className = "img-left";
          rightSecond.className = "historia";
      }else{
          imgLeftSecond.className = "noMostrar";
      }if (document.documentElement.scrollTop > 1600 && document.documentElement.scrollTop < 2100) {
          imgLeftThird.className = "img-left";
          rightThird.className = "historia";
      }else{
          imgLeftThird.className = "noMostrar";
      }if (document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop < 2400) {
          imgLeftFourth.className = "img-left";
          rightFourth.className = "historia";
      }else{
          imgLeftFourth.className = "noMostrar";
      }
    }