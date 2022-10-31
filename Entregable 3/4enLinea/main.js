let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const CANT_FICHAS = 20; 
let figures = [];
let lastClickedFigure = null;
let isMouseDown = false;
var tablero = [];
var chips = [];

function addFigure(){

    addCircle();

    drawFigure();
    
}

function drawFigure(){
    clearCanvas();
    draw(row = 8, col = 9);
    for (let i = 0; i < figures.length; i++) {
       figures[i].draw();
    }
    
}

function addCircle() {
    let posX = 50;
    let posYJ1 = 0;
    let posXJ2 = 900;
    let posYJ2 = 0;
    
    for (let index = 0; index < CANT_FICHAS; index++) {
        let fichap1 = new Ficha(posX,posYJ1,45, 'img/4enLinea/Player1.png',ctx);
        figures.push(fichap1);
        posYJ1+=25;

        let fichap2 = new Ficha(posXJ2,posYJ2,45, 'img/4enLinea/Player2.png',ctx);
        figures.push(fichap2);
        posYJ2 += 25;
    }
    
}

function clearCanvas(){
    ctx.fillStyle = '#581578'
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
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

}



function addFigures(){
    addFigure();
    if(figures.length < CANT_FICHAS){
        console.log(figures.length + "asd")
        addFigures();
        //setTimeout(addFigures, 333);
    }
    
}

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
    addTablero(row = 9, col = 8);
    addFigures();
    
    //setInterval(draw, 500);
    //setTimeout(addFigures, 333);
}

init();
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

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);