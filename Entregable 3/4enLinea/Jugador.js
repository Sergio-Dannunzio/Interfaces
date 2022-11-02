"use strict";

class Jugador{
    img;
    name;
    fichas = [];
    CANT_FICHAS = 15;
    lastClickedFigure = null;
    isMouseDown = false;
    contructor(img, name, cant_fichas) {
        this.img = img;
        this.turno = false;
        this.name = name;
        this.fichas = cargarFichas(cant_fichas, img);
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    setTurn(bool) {
        this.turno = bool;
    }

    setFicha(imgSrc){
        this.img = imgSrc;
    }

    addFichas(x, posYJ1) {
        //let rows = cant / 11;
        //let max = cant / rows;
        //for (let i = 0; i < rows; i++) {
            // for (let index = 0; index < max; index++) {
                for (let index = 0; index < this.CANT_FICHAS; index++) {
                    let ficha = new Ficha(x, posYJ1, 24, this.img);
                    posYJ1+=30;
                    this.fichas.push(ficha);
                    console.log("asd")
                }
                this.posYJ1+=25;
            //}
            //y = 50;
            //x += 60;
        //}
    }

    drawFicha() {
        console.log(this.fichas)
        for (let index = this.fichas.length - 1; index >= 0; index--) {
            let ficha = this.fichas[index];
            ficha.draw();
        }
    }

    onMouseDown(e){
        this.isMouseDown = true;
        console.log("estoy dentro de on mouse down ")
        if(this.lastClickedFigure != null){
            this.lastClickedFigure.serResaltado(false);
            this.lastClickedFigure = null;
        }
        
        let clickFig = this.findClickedFigure(e.layerX, e.layerY);
        console.log(clickFig)
        console.log(e.layerX, e.layerY)
        if(clickFig != null ){
            console.log("estoy dentro de on mouse down if")
            clickFig.serResaltado(true);
            this.lastClickedFigure = clickFig; 
        }
    
        this.drawFicha();
    }
    
    onMouseUp(e){
        console.log("estoy dentro de onMouseUp")
        this.isMouseDown = false;
    }
    
    onMouseMove(e){
        if(this.isMouseDown == true && this.lastClickedFigure != null){
            console.log("estoy dentro de onMouseMove")
            this.lastClickedFigure.setPosition(e.layerX,e.layerY);
            this.drawFicha();
        }
    }

    findClickedFigure(x,y){
        console.log(x,y)
        console.log("soy findClickedFigure", this.fichas[0])
        for (let i = 0; i < this.fichas.length; i++) {
            const element = this.fichas[i];
            this.fichas.slice(1,element);
            if(element.isPointInside(x,y)){
                console.log("estoy dentro de isPointInside")
                this.fichas.push(element);
                return element;
            }
        }
    }
    initEvents() {
       canvas.addEventListener('mousedown', (e) => {
            this.onMouseDown(e)
        });
        canvas.addEventListener('mouseup', (e) => {
            this.onMouseUp(e)
        });
        canvas.addEventListener('mousemove', (e) => {
            this.onMouseMove(e)
        });
    }

    init(amountChips, x, y) {
        //this.addFichas(12, 25);
        //this.drawFicha();
        //this.draw();
        this.initEvents();
    }
}