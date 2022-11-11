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