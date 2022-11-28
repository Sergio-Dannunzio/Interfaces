window.addEventListener('DOMContentLoaded', (event) => {
    let btnCategorias = document.getElementById("botonCategorias");
    let btnFlechaCategorias = document.getElementById("flecha");
    let btnUsuario = document.getElementById("btnUsuario");
        
        let spinner = document.getElementById("spinner");
        let spinnerP = document.getElementById("spinner%");
        let main = document.getElementById("main");

        spinner.className="loader";
        spinnerP.className=""
        main.className="noMostrar";
        setTimeout(function(){
            spinnerP.innerHTML = "20%";
        }, 500);
        setTimeout(function(){
            spinnerP.innerHTML = "40%";
        }, 1000);
        setTimeout(function(){
            spinnerP.innerHTML = "60%";
        }, 1500);
        setTimeout(function(){
            spinnerP.innerHTML = "80%";
        }, 2000);
        setTimeout(function(){
            main.className="";
            spinner.className="noMostrar";
            spinnerP.className="noMostrar";
        }, 2500);
        
        function mostrarCategorias() {
            let categorias = document.getElementById("categorias");
            if (categorias.className!="noMostrar") {
            categorias.className = "noMostrar";
            }else{
                categorias.className = "";
            }
        }
    
    function mostrarUsuarioCategorias(){
        let categorias = document.getElementById("usuarioCategorias");
        if (categorias.className!="noMostrar") {
            categorias.className = "noMostrar";
        }else{
            categorias.className = "";
        }
    }

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


    btnUsuario.addEventListener('click' , mostrarUsuarioCategorias);
    btnFlechaCategorias.addEventListener('click' , mostrarUsuarioCategorias);
    btnCategorias.addEventListener('click' , mostrarCategorias);
});