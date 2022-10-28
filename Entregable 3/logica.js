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
    btnUsuario.addEventListener('click' , mostrarUsuarioCategorias);
    btnFlechaCategorias.addEventListener('click' , mostrarUsuarioCategorias);
    btnCategorias.addEventListener('click' , mostrarCategorias);
});