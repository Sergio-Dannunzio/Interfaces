let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const CANT_FIG_P1 = 5; 
const CANT_FIG_P2 = 10; 
let figures = [];
let lastClickedFigure = null;
let isMouseDown = false;
var tablero = [];
var chips = [];

function addFigure(){
    //if(Math.random() > 0.5){
       // addReact();
    //}
    //else{
        addCircle();
    //}
    drawFigure();
    
}

function drawFigure(){
    clearCanvas();
    draw(row = 6, col = 7);
    for (let i = 0; i < figures.length; i++) {
       figures[i].draw();
    }
    
}
/*
function addReact(){
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomRGBA();

    let react = new React(posX,posY, 20,20,color,ctx);  //genera la nueva instancia
    figures.push(react);
}*/

function addCircle() {
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomRGBA();
    
    if (figures.length < CANT_FIG_P1) {
        let circle = new Circle(posX,posY,50, 'img/4enLinea/Player1.png',ctx);
        figures.push(circle);
                
    }else if(figures.length < CANT_FIG_P2){
        let circle = new Circle(posX,posY,50, 'img/4enLinea/Player2.png',ctx);
        figures.push(circle);
    }
    
}


function onMouseDown(e){
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

function clearCanvas(){
    ctx.fillStyle = '#581578'
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
}

function addFicha(cant) {
    let posX = 50;
    let posY = 50;
    let rows = cant / 11;
    let max = cant / rows;

    for (let i = 0; i < rows; i++) {
        for (let index = 0; index < max; index++) {
            if (index < CANT_FIG_P1) {
                
            }else if(index < CANT_FIG_P2){

            }
            let circle = new Circle(posX,posY,50, color,ctx);
            y += 40;
            figures.push(circle);
        }
        y = 50;
        x += 60;
    }
}

function addTablero(col,row){
    //drawFigure()
    for (let index = 0; index < row; index++) {
        let f = [];
        for (let index = 0; index < col; index++) {
            let img = new Image();
            img.src = './img/celda.svg';
            f.push(img);
        }
        console.log(f);
        tablero.push(f);
    }

}

function draw() {
    //clearCanvas();
    let posX = 250;
    let posY = 50;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            img = tablero[i][j];
            console.log("soy img", img);
            ctx.drawImage(img, posX, posY, 50, 50);
            posX += 50;
        }
        posX = 250;
        posY += 50;
    }

}



function randomRGBA(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = Math.round(Math.random() * 255);
    return `rgba(${r},${g},${b},${a})`;
}

function addFigures(){
    addFigure();
    if(figures.length < CANT_FIG_P2){
        console.log(figures.length + "asd")
        addFigures();
        //setTimeout(addFigures, 333);
    }
    
}
/*
setTimeout(() => {
    addFigures();
}, 333);
*/
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

function init() {
    addTablero(row = 7, col = 6);
    addFigures();
    
    //setInterval(draw, 500);
    //setTimeout(addFigures, 333);
}

init();

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);