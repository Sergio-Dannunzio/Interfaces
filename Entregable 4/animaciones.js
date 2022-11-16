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

  /*
  3. Al hacer scroll el Header debe ser sticky y achicarse, 
  de tal manera que además el logo debe achicarse. 
  En caso de ser necesario cambiar el fondo a un 
  color plano (recomendado)
  */

let headerEj3 = document.getElementById("header");
let headerDiv = document.querySelector(".container");
let inputBuscador = document.getElementById("input");
let logoUsuario = document.querySelector(".logoUsuario");
let menuUsuario = document.querySelector(".menuUsuario");
let flecha = document.querySelector(".flecha");
let hamburguesaScroll = document.querySelector("#hamburguesa");
let linea1 = document.querySelector(".linea1");
let linea2 = document.querySelector(".linea2");
let linea3 = document.querySelector(".linea3");

function headerScroll(){

  headerEj3.style.height = "30px";
  inputBuscador.style.height = "16px";
  logoUsuario.style.width = "28px";
  logoUsuario.style.height = "28px";
  logoUsuario.style.padding = "2px";
  
  menuUsuario.className = "menuUsuarioScroll";
  flecha.className = "flechaScroll";
  hamburguesaScroll.style.margin = "0px";
  hamburguesaScroll.style.height = "24px";
  linea1.style.width = "50%";
  linea2.style.width = "50%";
  linea3.style.width = "50%";
  linea3.className = "#hamburguesa.active linea3Scroll";
}

window.addEventListener("scroll", headerScroll);