let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let Btnficha1 = document.querySelector('#Btnficha1');
let img1 = document.querySelector('#ficha1');
let img1Resaltada = document.querySelector('#ficha1Resaltado');

let Btnficha2 = document.querySelector('#Btnficha2');
let img2 = document.querySelector('#ficha2');
let img2Resaltada = document.querySelector('#ficha2Resaltado');

let Btnficha3 = document.querySelector('#Btnficha3');
let img3 = document.querySelector('#ficha3');
let img3Resaltada = document.querySelector('#ficha3Resaltado');

let Btnficha4 = document.querySelector('#Btnficha4');
let img4 = document.querySelector('#ficha4');
let img4Resaltada = document.querySelector('#ficha4Resaltado');

let Btnficha5 = document.querySelector('#Btnficha5');
let img5 = document.querySelector('#ficha5');
let img5Resaltada = document.querySelector('#ficha5Resaltado');

let Btnficha6 = document.querySelector('#Btnficha6');
let img6 = document.querySelector('#ficha6');
let img6Resaltada = document.querySelector('#ficha6Resaltado');

let Btnficha7 = document.querySelector('#Btnficha7');
let img7 = document.querySelector('#ficha7');
let img7Resaltada = document.querySelector('#ficha1Resaltado');

let Btnficha8 = document.querySelector('#Btnficha8');
let img8 = document.querySelector('#ficha8');
let img8Resaltada = document.querySelector('#ficha2Resaltado');

let Btnficha9 = document.querySelector('#Btnficha9');
let img9 = document.querySelector('#ficha9');
let img9Resaltada = document.querySelector('#ficha3Resaltado');

let Btnficha10 = document.querySelector('#Btnficha10');
let img10 = document.querySelector('#ficha10');
let img10Resaltada = document.querySelector('#ficha4Resaltado');

let Btnficha11 = document.querySelector('#Btnficha11');
let img11 = document.querySelector('#ficha11');
let img11Resaltada = document.querySelector('#ficha5Resaltado');

let Btnficha12 = document.querySelector('#Btnficha12');
let img12 = document.querySelector('#ficha12');
let img12Resaltada = document.querySelector('#ficha6Resaltado');


let nombreJ1 = document.querySelector('#nombreJ1');
let nombreJ2 = document.querySelector('#nombreJ2');

let aceptarSeleccion = document.querySelector('#aceptarSeleccion');

let btnReset = document.querySelector("#btnReset");


let figures = [];
let lastClickedFigure = null;
let isMouseDown = false;
var tablero = [];
var chips = [];
let value = 0;

let juego = new Juego(0);
console.log(value)

    console.log("soy desde main")
    aceptarSeleccion.addEventListener("click", ()=> {
        console.log("aceptar")
        let selectJuego = document.querySelector('#selectJuego');
        value = selectJuego.value;
        juego.setNum(value);
        console.log(value)

        if (value == 7) {
            juego.setenLinea(4);
        }
        if (value == 8) {
            juego.setenLinea(5);
        }if (value == 9){
            juego.setenLinea(6);
        }
        juego.init();
        juego.player1.setName(nombreJ1.value);
        juego.player2.setName(nombreJ2.value);
        juego.tiempo = 60;
        juego.loop();
        setInterval(()=> {
            juego.draw()
        })
        
    })
    Btnficha1.addEventListener('click', () => {
            juego.player1.setFicha(img1.src);
            //img1.src = img1Resaltada.src;
        
    });

    Btnficha2.addEventListener('click', () => {
            juego.player1.setFicha(img2.src);
            //img2.src = img2Resaltada.src;
        
    });

    Btnficha3.addEventListener('click', () => {
            juego.player1.setFicha(img3.src);
            //img3.src = img3Resaltada.src;
        
    });

    Btnficha4.addEventListener('click', () => {
            juego.player1.setFicha(img4.src);
            //img4.src = img4Resaltada.src;
        
    });

    Btnficha5.addEventListener('click', () => {
            juego.player1.setFicha(img5.src);
            //img5.src = img5Resaltada.src;
        
    });

    Btnficha6.addEventListener('click', () => {
            juego.player1.setFicha(img6.src);
            //img6.src = img6Resaltada.src;
        
    });

    Btnficha7.addEventListener('click', () => {
            juego.player2.setFicha(img7.src);
            //img7.src = img1Resaltada.src;
        
    });

    Btnficha8.addEventListener('click', () => {
            juego.player2.setFicha(img8.src);
            //img8.src = img2Resaltada.src;
        
    });

    Btnficha9.addEventListener('click', () => {
            juego.player2.setFicha(img9.src);
            //img9.src = img3Resaltada.src;
        
    });

    Btnficha10.addEventListener('click', () => {
            juego.player2.setFicha(img10.src);
            //img10.src = img4Resaltada.src;
        
    });

    Btnficha11.addEventListener('click', () => {
            juego.player2.setFicha(img11.src);
            //img11.src = img5Resaltada.src;
        
    });

    Btnficha12.addEventListener('click', () => {
            juego.player2.setFicha(img12.src);
            //img12.src = img6Resaltada.src;
        
    });
    btnReset.addEventListener("click", () => {
        juego.resetGame();
    });



