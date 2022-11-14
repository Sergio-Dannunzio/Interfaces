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

                }, index * 200);
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