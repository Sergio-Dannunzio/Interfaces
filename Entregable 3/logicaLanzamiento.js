window.addEventListener('DOMContentLoaded', (event) => {
    let btnCategorias = document.getElementById("botonCategorias");
    let btnFlechaCategorias = document.getElementById("flecha");
    let btnUsuario = document.getElementById("btnUsuario");
    let btnPlay = document.getElementById("jugar");
    let btnAceptarSeleccion= document.getElementById("aceptarSeleccion");

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
    function mostrarJuego(){
        let juego = document.getElementById("juego");
        let seleccionar = document.getElementById("seleccionarJuego");
        //canvas.className = "noMostrar";
        if(juego.className!="noMostrar"){
            juego.className = "noMostrar";
            seleccionar.className = "";
        }else{
            juego.className = "";
        }
    }

    function irJuego(){
        let seleccionar = document.getElementById("seleccionarJuego");
        let canvas = document.getElementById("divCanvas");

        if(seleccionar.className != "noMostrar"){
            seleccionar.className = "noMostrar";
            canvas.className = "canvasJuego";
        }else{
            seleccionar.className = "";
        }
    }
    btnUsuario.addEventListener('click' , mostrarUsuarioCategorias);
    btnFlechaCategorias.addEventListener('click' , mostrarUsuarioCategorias);
    btnCategorias.addEventListener('click' , mostrarCategorias);
    btnPlay.addEventListener("click", mostrarJuego);
    btnAceptarSeleccion.addEventListener("click", irJuego);
});