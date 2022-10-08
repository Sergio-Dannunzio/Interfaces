window.addEventListener('DOMContentLoaded', (event) => {
    let btnCategorias = document.getElementById("botonCategorias");
    let btnFlechaCategorias = document.getElementById("flecha");
    let btnUsuario = document.getElementById("btnUsuario");
    let spinner = document.getElementById("spinner");
    let main = document.getElementById("main");

    spinner.className="loader";
    main.className="noMostrar";
    setTimeout(function(){
        main.className="";
        spinner.className="noMostrar";
    }, 5000);
    
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