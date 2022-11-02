let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let Btnficha1 = document.querySelector('#Btnficha1');
let img1 = document.querySelector('#ficha1');

let Btnficha2 = document.querySelector('#Btnficha2');
let img2 = document.querySelector('#ficha2');

let Btnficha3 = document.querySelector('#Btnficha3');
let img3 = document.querySelector('#ficha3');

let Btnficha4 = document.querySelector('#Btnficha4');
let img4 = document.querySelector('#ficha4');

let Btnficha5 = document.querySelector('#Btnficha5');
let img5 = document.querySelector('#ficha5');

let Btnficha6 = document.querySelector('#Btnficha6');
let img6 = document.querySelector('#ficha6');

let Btnficha7 = document.querySelector('#Btnficha7');
let img7 = document.querySelector('#ficha7');

let Btnficha8 = document.querySelector('#Btnficha8');
let img8 = document.querySelector('#ficha8');

let Btnficha9 = document.querySelector('#Btnficha9');
let img9 = document.querySelector('#ficha9');

let Btnficha10 = document.querySelector('#Btnficha10');
let img10 = document.querySelector('#ficha10');

let Btnficha11 = document.querySelector('#Btnficha11');
let img11 = document.querySelector('#ficha11');

let Btnficha12 = document.querySelector('#Btnficha12');
let img12 = document.querySelector('#ficha12');


let aceptarSeleccion = document.querySelector('#aceptarSeleccion');

//console.log(img1.src);
//console.log(img4.src);

let figures = [];
let lastClickedFigure = null;
let isMouseDown = false;
var tablero = [];
var chips = [];

let juego = new Juego();
//setInterval( () => {
    console.log("soy desde main")

    Btnficha1.addEventListener('click', () => {
        juego.player1.setFicha(img1.src);
    });

    Btnficha2.addEventListener('click', () => {
        juego.player1.setFicha(img2.src);
    });

    Btnficha3.addEventListener('click', () => {
        juego.player1.setFicha(img3.src);
    });

    Btnficha4.addEventListener('click', () => {
        juego.player1.setFicha(img4.src);
    });

    Btnficha5.addEventListener('click', () => {
        juego.player1.setFicha(img5.src);
    });

    Btnficha6.addEventListener('click', () => {
        juego.player1.setFicha(img6.src);
    });

    Btnficha7.addEventListener('click', () => {
        juego.player2.setFicha(img7.src);

    });

    Btnficha8.addEventListener('click', () => {
        juego.player2.setFicha(img8.src);

    });

    Btnficha9.addEventListener('click', () => {
        juego.player2.setFicha(img9.src);

    });

    Btnficha10.addEventListener('click', () => {
        juego.player2.setFicha(img10.src);

    });

    Btnficha11.addEventListener('click', () => {
        juego.player2.setFicha(img11.src);

    });

    Btnficha12.addEventListener('click', () => {
        juego.player2.setFicha(img12.src);

    });

    aceptarSeleccion.addEventListener("click", ()=> {
        console.log("aceptar")
        
        juego.init();

        setInterval(()=> {
            juego.draw()
        })
        
    })
/*function addFigure(){

    addCircle( CANT_FICHAS = 20);

    drawFigure();
    
}*/
/*
function drawFigure(){
    clearCanvas();
    draw(row = 8, col = 9);
    for (let i = 0; i < figures.length; i++) {
       figures[i].draw();
    }
    
}*/
/*
function addCircle(CANT_FICHAS) {
    let posX = 50;
    let posYJ1 = 0;
    let posXJ2 = 900;
    let posYJ2 = 0;
    
    for (let index = 0; index < CANT_FICHAS; index++) {
        let fichap1 = new Ficha(posX,posYJ1,45, 'img/4enLinea/ficha3.svg',ctx);
        figures.push(fichap1);
        posYJ1+=25;

        let fichap2 = new Ficha(posXJ2,posYJ2,45, 'img/4enLinea/ficha5.svg',ctx);
        figures.push(fichap2);
        posYJ2 += 25;
    }
    
}*/
/*
function clearCanvas(){
    ctx.fillStyle = '#581578'
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
}*/

/*
function addTablero(col,row){
    //drawFigure()
    for (let index = 0; index < row; index++) {
        let f = [];
        for (let index = 0; index < col; index++) {
            let img = new Image();
            img.src = 'img/4enLinea/celda.svg';
            f.push(img);
        }
        console.log(f);
        tablero.push(f);
    }


}

function draw() {
    //clearCanvas();
    let posX = 250;
    let posY = 70;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            img = tablero[i][j];
            ctx.drawImage(img, posX, posY, 55, 55);
            posX += 55;
        }
        posX = 250;
        posY += 55;
    }




}*/


/*
function addFigures(){
    addFigure();
    if(figures.length < CANT_FICHAS){
        console.log(figures.length + "asd")
        addFigures();
        //setTimeout(addFigures, 333);
    }
    
}*/

function findClickedFigure(x,y){
    for (let i = 0; i < figures.length; i++) {
        const element = figures[i];
        figures.slice(1,element);
        if(element.isPointInside(x,y)){
            figures.push(element);
            return element;
        }
    }
}

/*function init() {
    addTablero(row = 9, col = 8);
    addFigures();
    
    //setInterval(draw, 500);
    //setTimeout(addFigures, 333);
}*/
/*function onMouseDown(e){
    isMouseDown = true;

    if(lastClickedFigure != null){
        lastClickedFigure.serResaltado(false);
        lastClickedFigure = null;
    }

    let clickFig = findClickedFigure(e.layerX, e.layerY);
    if(clickFig != null ){
        clickFig.serResaltado(true);
        lastClickedFigure = clickFig; 
    }

    drawFigure();
}

function onMouseUp(e){
    isMouseDown = false;
}

function onMouseMove(e){
    if(isMouseDown && lastClickedFigure != null){
        lastClickedFigure.setPosition(e.layerX,e.layerY);
        drawFigure();
    }
}

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);*/