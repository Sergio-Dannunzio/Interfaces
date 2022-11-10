let hamburguesa = document.querySelector("#hamburguesa");
    function cruzHamburguesa(){
        hamburguesa.classList.toggle("active");
        let categorias = document.getElementById("categorias");
        if (categorias.className!="noMostrar") {
        categorias.className = "noMostrar";
        }else{
            categorias.className = "";
        }
    }

hamburguesa.addEventListener("click", cruzHamburguesa);
