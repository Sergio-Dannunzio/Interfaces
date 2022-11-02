"use strict";

class Juego {

    constructor(num) {
        this.player1 = new Jugador();
        this.player2 = new Jugador();
        this.num = num;
        this.turner = this.player1.setTurn(true);
        this.tableroView = [];
    }

    clearCanvas(){
        ctx.fillStyle = '#581578';
        ctx.fillRect(0,0,canvasWidth,canvasHeight);
    }
    /*
    clearCanvas() {
        ctx.clearRect(0, 0, 1024, 530);
    }*/

    /*drawFigure(){
        this.clearCanvas();
        //this.draw(row = 8, col = 9);
        for (let i = 0; i < fichas.length; i++) {
           fichas[i].draw();
        }
    }*/

    addTablero(row,col){
        this.clearCanvas();
        for (let index = 0; index < row; index++) {
            let f = [];
            for (let index = 0; index < col; index++) {
                let img = new Image();
                img.src = 'img/4enLinea/celda.svg';
                this.tableroView.push(img);
                /*img.onload = function() {
                    //ctx.drawImage(img, posX, posY, 78, 78);
                    /*posX += 50;
                    if (posX == 250 + 50 * col) {
                        posX = 250;
                        posY += 50;
                    }
                }*/
            }
            //console.log(f);
            tablero.push(f);
        }
    }
    
    draw() {
        this.clearCanvas();
        var row = 8;
        var col = 9;
        let posX = 250;
        let posY = 50;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let img = this.tableroView[0];
                this.img = tablero[i][j];
                ctx.drawImage(img, posX, posY, 55, 55);
                posX += 55;
            }
            posX = 250;
            posY += 50;
        }
        console.log("me hago bucle")
        this.player1.drawFicha();
        this.player2.drawFicha();
        console.log("termino bucle")
    }

    init() {
        console.log("init tablero")
        this.addTablero(9,8);
        this.player1.addFichas(12, 25);
        this.player2.addFichas(970, 12);
        this.player1.init();
        this.player2.init();
        //img1.addEventListener("click", this.player1.setFicha(img1.src));
        //img4.addEventListener('click', this.player1.setFicha(img4.src));
        //this.player1.setFicha(img1.src);
        //this.player2.setFicha(img4.src);
        console.log("termina init")

        //this.drawFigure();
    }

}
