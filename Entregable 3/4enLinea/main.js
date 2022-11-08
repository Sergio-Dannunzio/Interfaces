let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let Btnficha1 = document.querySelector('#Btnficha1');
let img1 = document.querySelector('#ficha1');
let img1Resaltada = document.querySelector('#ficha1Resaltado');
let ficha1Error = document.querySelector('#ficha1Error');

let Btnficha2 = document.querySelector('#Btnficha2');
let img2 = document.querySelector('#ficha2');
let img2Resaltada = document.querySelector('#ficha2Resaltado');
let ficha2Error = document.querySelector('#ficha2Error');

let Btnficha3 = document.querySelector('#Btnficha3');
let img3 = document.querySelector('#ficha3');
let img3Resaltada = document.querySelector('#ficha3Resaltado');
let ficha3Error = document.querySelector('#ficha3Error');

let Btnficha4 = document.querySelector('#Btnficha4');
let img4 = document.querySelector('#ficha4');
let img4Resaltada = document.querySelector('#ficha4Resaltado');
let ficha4Error = document.querySelector('#ficha4Error');

let Btnficha5 = document.querySelector('#Btnficha5');
let img5 = document.querySelector('#ficha5');
let img5Resaltada = document.querySelector('#ficha5Resaltado');
let ficha5Error = document.querySelector('#ficha5Error');

let Btnficha6 = document.querySelector('#Btnficha6');
let img6 = document.querySelector('#ficha6');
let img6Resaltada = document.querySelector('#ficha6Resaltado');
let ficha6Error = document.querySelector('#ficha6Error');

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


var tablero = [];
let value = 0;

let juego = new Juego(0);

    //Cuando se acepta la seleccion del jugador se inicia el juego
    aceptarSeleccion.addEventListener("click", ()=> {

        let selectJuego = document.querySelector('#selectJuego');
        value = selectJuego.value;
        juego.setNum(value);


        if (value == 6) {
            juego.setenLinea(3);
        }
        if (value == 7) {
            juego.setenLinea(4);
        }
        if (value == 8) {
            juego.setenLinea(5);
        }if (value == 9){
            juego.setenLinea(6);
        }
        juego.init();
        if( nombreJ1.value == ""){
            juego.player1.setName("Jugador 1");
        }else{
            juego.player1.setName(nombreJ1.value);
        }
        if( nombreJ2.value == ""){
            juego.player2.setName("Jugador 2");
        }else{
            juego.player2.setName(nombreJ2.value);
        }
        juego.tiempo = 60;
        juego.loop();
        setInterval(()=> {
            juego.draw()
        })
        
    })

    
    img1Save = img1.src;
    img2Save = img2.src;
    img3Save = img3.src;
    img4Save = img4.src;
    img5Save = img5.src;
    img6Save = img6.src;
    
    img7Save = img7.src;
    img8Save = img8.src;
    img9Save = img9.src;
    img10Save = img10.src;
    img11Save = img11.src;
    img12Save = img12.src;
    
    //Seteo de fichas de jugador1
    Btnficha1.addEventListener('click', () => {
        if(juego.player2.getImg() != img1Save){
                juego.player1.setFicha(img1.src);
                img1.src = img1Resaltada.src;
                img7.src = ficha1Error.src;

                img2.src = img2Save;
                img3.src = img3Save;
                img4.src = img4Save;
                img5.src = img5Save;
                img6.src = img6Save;
        }
       
    });

    Btnficha2.addEventListener('click', () => {
        if(juego.player2.getImg() != img2Save){
                juego.player1.setFicha(img2.src);
                img2.src = img2Resaltada.src;
                img8.src = ficha2Error.src;
                        
                img1.src = img1Save;
                img3.src = img3Save;
                img4.src = img4Save;
                img5.src = img5Save;
                img6.src = img6Save; 

        }
    });

    Btnficha3.addEventListener('click', () => {
        if(juego.player2.getImg() != img3Save){
            juego.player1.setFicha(img3.src);
            img3.src = img3Resaltada.src;
            img9.src = ficha3Error.src;
            
            img1.src = img1Save;
            img2.src = img2Save;
            img4.src = img4Save;
            img5.src = img5Save;
            img6.src = img6Save;
        }
    });

    Btnficha4.addEventListener('click', () => {
        if(juego.player2.getImg() != img4Save){
            juego.player1.setFicha(img4.src);
            img4.src = img4Resaltada.src;
            img10.src = ficha4Error.src;

            img1.src = img1Save;
            img2.src = img2Save;
            img3.src = img3Save;
            img5.src = img5Save;
            img6.src = img6Save;
        }
        
    });

    Btnficha5.addEventListener('click', () => {
        if(juego.player2.getImg() != img5Save){
            juego.player1.setFicha(img5.src);
            img5.src = img5Resaltada.src;
            img11.src = ficha5Error.src;

            img1.src = img1Save;
            img2.src = img2Save;
            img3.src = img3Save;
            img4.src = img4Save;
            img6.src = img6Save;
        }
    });

    Btnficha6.addEventListener('click', () => {
        if(juego.player2.getImg() != img6Save){
            juego.player1.setFicha(img6.src);
            img6.src = img6Resaltada.src;
            img12.src = ficha6Error.src;
        
            img1.src = img1Save;
            img2.src = img2Save;
            img3.src = img3Save;
            img4.src = img4Save;
            img5.src = img5Save;
        }
    });

//Seteo de fichas de jugador2
    Btnficha7.addEventListener('click', () => {
            if(juego.player1.getImg() != img7Save){
                juego.player2.setFicha(img7.src);
                img7.src = img1Resaltada.src;
                img1.src = ficha1Error.src;
            
                img8.src = img8Save;
                img9.src = img9Save;
                img10.src = img10Save;
                img11.src = img11Save;
                img12.src = img12Save;
            }
    });

    Btnficha8.addEventListener('click', () => {

        if(juego.player1.getImg() != img8Save){
                juego.player2.setFicha(img8.src);
                img8.src = img2Resaltada.src;
                img2.src = ficha2Error.src;
                
                img7.src = img7Save;
                img9.src = img9Save;
                img10.src = img10Save;
                img11.src = img11Save;
                img12.src = img12Save;
        }
    });

    Btnficha9.addEventListener('click', () => {
        if(juego.player1.getImg() != img9Save){
                juego.player2.setFicha(img9.src);
                img9.src = img3Resaltada.src;
                img3.src = ficha3Error.src;

                img7.src = img7Save;
                img8.src = img8Save;
                img10.src = img10Save;
                img11.src = img11Save;
                img12.src = img12Save;
        }
        
    });

    Btnficha10.addEventListener('click', () => {
        if(juego.player1.getImg() != img10Save){
                juego.player2.setFicha(img10.src);
                img10.src = img4Resaltada.src;
                img4.src = ficha4Error.src;

                img7.src = img7Save;
                img8.src = img8Save;
                img9.src = img9Save;
                img11.src = img11Save;
                img12.src = img12Save;
        }
    });

    Btnficha11.addEventListener('click', () => {
        if(juego.player1.getImg() != img11Save){
        juego.player2.setFicha(img11.src);
        img11.src = img5Resaltada.src;
        img5.src = ficha5Error.src;
;
        img7.src = img7Save;
        img8.src = img8Save;
        img9.src = img9Save;
        img10.src = img10Save;
        img12.src = img12Save;
        }
    });

    Btnficha12.addEventListener('click', () => {
        if(juego.player1.getImg() != img12Save){
        juego.player2.setFicha(img12.src);
        img12.src = img6Resaltada.src;
        img6.src = ficha6Error.src;
        
        img7.src = img7Save;
        img8.src = img8Save;
        img9.src = img9Save;
        img10.src = img10Save;
        img11.src = img11Save;
        }
        
    });

    //Resetear juego
    btnReset.addEventListener("click", () => {
        juego.resetGame();
    });



