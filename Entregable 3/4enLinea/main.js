let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const CANT_FIG = 5; 

let figures = [];
let lastClickedFigure = null;
let isMouseDown = false;

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

    let circle = new Circle(posX,posY,50, color,ctx);
    figures.push(circle);
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

function randomRGBA(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = Math.round(Math.random() * 255);
    return `rgba(${r},${g},${b},${a})`;
}

function addFigures(){
    addFigure();
    if(figures.length < CANT_FIG){
        console.log(figures.length)
        addFigures();
        //setTimeout(addFigures, 333);
    }
}

setTimeout(() => {
    addFigures();
}, 333);

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

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);