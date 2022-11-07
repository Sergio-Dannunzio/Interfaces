"use strict";

class Juego {

    constructor(num) {
        this.player1 = new Jugador();
        this.player2 = new Jugador();
        this.num = num;
        this.tableroView = [];
        this.matriz = [];
        this.ganador = false;
        this.tiempo = 60;
        this.enLinea = 4;
    }

    clearCanvas(){
        ctx.fillStyle = '#581578';
        ctx.fillRect(0,0,canvasWidth,canvasHeight);
    }
    setNum(num){
        this.num = num;
    }
    setenLinea(lineas){
        this.enLinea = lineas;
    }

    resetGame(){
        this.clearCanvas();
        this.player1.resetPlayer();
        this.player2.resetPlayer();
        this.matriz = [];
        this.ganador = false;
        this.stop();
    }

    addTablero(row,col){
        this.clearCanvas();
        for (let index = 0; index < row; index++) {
            let f = [];
            for (let index = 0; index < col; index++) {
                let img = new Image();
                img.src = 'img/4enLinea/celda.svg';
                this.tableroView.push(img);
            }
            tablero.push(f);
        }
    }
    
    draw() {
        this.clearCanvas();

        var row = this.num - 1;
        var col = this.num;
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

        ctx.font = "50px  sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(this.player1.getName(), 50, 50);
        ctx.fillText(this.player2.getName(), 860, 50);
        if (this.ganador) {
            ctx.font = "20px sans-serif";
            ctx.fillStyle = "#581578";
            ctx.fillText("", 400, 30);
            this.player1.setTurno(false);
            this.player2.setTurno(false);
        }else if (this.tiempo>0) {
            ctx.font = "20px sans-serif";
            ctx.fillStyle = "white";
            ctx.fillText("Tiempo restante: " + this.tiempo, 400, 30);
        }else{
            ctx.font = "20px sans-serif";
            ctx.fillStyle = "white";
            ctx.fillText("Se acabó el tiempo", 400, 30);
            this.player1.setTurno(false);
            this.player2.setTurno(false);
        }
        if (this.ganador) {
            if (this.player1.ganador) {
                console.log("Gano p1")
                ctx.font = "20px sans-serif";
                ctx.fillStyle = "white";
                ctx.fillText("Ganador " + this.player1.getName(), 400, 30);
            }
            else {
                ctx.font = "20px sans-serif";
                ctx.fillStyle = "white";
                ctx.fillText("Ganador " + this.player2.getName(), 400, 30);
            }
        }
        this.player1.drawFicha();
        this.player2.drawFicha();
    }

    generarMatriz(row, col) {
        for (let i = 0; i < row; i++) {
            let row = [];
            for (let j = 0; j < col; j++) {
                row[j] = null;
            }
            this.matriz.push(row);
        }
    }

    agregarAMatriz(ficha, col, player) {
        let fila = this.num - 2;
        let insertado = false;
        while (fila >= 0 && !insertado) {
            if (this.matriz[0][col] != null) {
                ficha.returnToPos();
                ficha.setCol(-1);
                ficha.setUso(false);
                ficha.setEnJuego(false);
                ficha.setEnMatriz(false);
            }
            if (this.matriz[fila][col] == null) {
                //console.log("adentro matriz"+this.matriz)
                console.log("HOLA SOY BUCLE")
                this.matriz[fila][col] = ficha;
                insertado = true;
                console.table(this.matriz)
                //this.refreshBoard(ficha, fila, col, player);
                switch (fila) {
                    case 0:
                        ficha.setposY(55);
                      break;
                    case 1:
                        ficha.setposY(105);
                      break;

                    case 2:
                        ficha.setposY(155);
                      break;
                    case 3:
                        ficha.setposY(205);
                        break;
                    case 4:
                        ficha.setposY(255);
                        break;
  
                    case 5:
                        ficha.setposY(305);
                        break;
                    case 6:
                        ficha.setposY(355);
                        break;
                    case 7:
                        ficha.setposY(405);
                        break;

                  }
                  switch (col) {
                    case 0:
                        ficha.setposX(255);
                      break;
                    case 1:
                        ficha.setposX(310);
                      break;

                    case 2:
                        ficha.setposX(365);
                      break;
                    case 3:
                        ficha.setposX(420);
                        break;
                    case 4:
                        ficha.setposX(475);
                        break;
  
                    case 5:
                        ficha.setposX(530);
                        break;
                    case 6:
                        ficha.setposX(585);
                        break;
                    case 7:
                        ficha.setposX(640);
                        break;
                    case 8:
                        ficha.setposX(695);
                        break;

                  }
                this.ganador = this.checkWinner(ficha, fila, col);
                
                if (this.ganador){
                    player.setGanador();
                }
                else{
                    if (this.player1.turno) {
                        console.log("turno del 2");
                        this.player1.setTurno(false);
                        this.player2.setTurno(true);
                    } else {
                        console.log("turno del 1");
                        this.player2.setTurno(false);
                        this.player1.setTurno(true);
                    }
                }
                
            }
            fila--;
        }
    }


    checkWinner(ficha, fila, col) { 
        let count = 0;
        //Columna
        let fila1 = fila;
        while (fila1 <= this.num - 2) {
            if (this.matriz[fila1][col].img.src == ficha.img.src) {
                count++;
                if (count == this.enLinea){
                    return true;
                }
            } else {
                count = 0;
                fila1 = this.num;
            }
            fila1++;
        }
        //Fila
        count = 0;
        let col1 = col;
        while (col1 >= 0 && this.matriz[fila][col1 - 1] != null && this.matriz[fila][col1 - 1].img.src == ficha.img.src) {
            col1--;
        }
        while (col1 <= this.num - 1 && this.matriz[fila][col1] != null) {
            if (this.matriz[fila][col1].img.src == ficha.img.src) {
                count++;
                if (count == this.enLinea)
                    return true;
            } else {
                count = 0;
                col1 = this.num;
            }
            col1++;
        }

        //Diagonal
        count = 0;
        let col3 = col;
        let fila3 = fila;
        while (col3 - 1 >= 0 && fila3 + 1 <= this.num - 2 && this.matriz[fila3+1][col3 - 1] != null && this.matriz[fila3+1][col3 - 1].img.src == ficha.img.src) {
            col3--;
            fila3++;
        }
        
        while (col3 <= this.num - 1 && fila3 >= 0 && this.matriz[fila3][col3] != null) {
            if (this.matriz[fila3][col3].img.src == ficha.img.src) {
                count++;
                if (count ==this.enLinea)
                    return true;
            } else {
                count = 0;
                col3 = this.num;
                fila3 = this.num;
            }
            col3++;
            fila3--;
        }

        //Diagonal
        count = 0;
        let col2 = col;
        let fila2 = fila;
        while (col2 >= 0 && fila2>=0 && this.matriz[fila2-1][col2 - 1] != null && this.matriz[fila2-1][col2 - 1].img.src == ficha.img.src) {
            col2--;
            fila2--;
        }
        
        while (col2 <= this.num - 1 && fila2 <= this.num -2 && this.matriz[fila2][col2] != null) {
            if (this.matriz[fila2][col2].img.src == ficha.img.src) {
                count++;
                if (count == this.enLinea)
                    return true;
            } else {
                return false;
            }
            col2++;
            fila2++;
        }
    
    }

    mouseUp(e) {
        //Fichas Matriz Player 1
        for (let index = 0; index < this.player1.fichas.length; index++) {
            if (this.player1.fichas[index].getCol() != -1 && this.player1.fichas[index].enMatriz == false && this.player1.getTurno()) {
                this.player1.fichas[index].setEnMatriz(true);
                this.agregarAMatriz(this.player1.fichas[index].getFicha(), this.player1.fichas[index].getCol(), this.player1);
                //this.player2.setTurno(true);
            }
        }
        //Fichas Matriz Player 2
        for (let index = 0; index < this.player2.fichas.length; index++) {
            if (this.player2.fichas[index].getCol() != -1 && this.player2.fichas[index].enMatriz == false && this.player2.getTurno()) {
                this.player2.fichas[index].setEnMatriz(true);
                this.agregarAMatriz(this.player2.fichas[index].getFicha(), this.player2.fichas[index].getCol(), this.player2);
                //this.player1.setTurno(true);
            }
        }
    }
    
    loop() {
        this.interval = 
        setInterval(()=> {
            this.tiempo--;
        },1000);
        //this.resetGame();
    }
    stop(){
        clearInterval(this.interval);
    }

    initEvents() {
        canvas.addEventListener("mouseup", (e) => {
            this.mouseUp(e)
        });
    }
    
    init() {
        
        this.addTablero(this.num - 1,this.num);
        this.player1.addFichas(80, 70);
        this.player2.addFichas(890, 70);
        this.player1.setColumnas(this.num - 1);
        this.player2.setColumnas(this.num - 1);
        this.player1.init();
        this.player1.setTurno(true);
        this.player2.init();
        this.generarMatriz(this.num - 1,this.num);
        this.initEvents();
    }
    
}
