"use strict";

class Jugador{

    fichas = [];
    CANT_FICHAS = 15;


    contructor(img, name, cant_fichas) {
        this.img = img;
        this.turno = false;
        this.name = name;
        this.fichas = cargarFichas(cant_fichas, img);
        this.fichaActual = new Ficha(0,0,0,null);
        this.ganador = false;
        this.col = col;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    setColumnas(col){
        this.col = col;
    }

    getTurno(){
        return this.turno;
    }

    setTurno(bool) {
        this.turno = bool;
    }

    setGanador(){
        this.ganador = true;
    }

    getImg(){
        return this.img;
    }

    setFicha(imgSrc){
        this.img = imgSrc;
    }

    //Vacia las fichas del player y lo setea en ganador false
    resetPlayer(){
        this.fichas = [];
        this.ganador = false;
    }

    //Crea las fichas
    addFichas(x, posYJ1) {
                for (let index = 0; index < this.CANT_FICHAS; index++) {
                    let ficha = new Ficha(x, posYJ1, 24, this.img, this.name);
                    posYJ1+=30;
                    this.fichas.push(ficha);

                }
                this.posYJ1+=25;

    }

    //Dibuja las fichas del player
    drawFicha() {
        for (let index = this.fichas.length - 1; index >= 0; index--) {
            let ficha = this.fichas[index];
            ficha.draw();
        }
    }

    //Cuando el player clickea una ficha le setea selected en true
    onMouseDown(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < this.fichas.length; i++) {
            if (this.fichas[i].checkSelected(x, y)) {
                this.fichas[i].setSelected(true);
                return;
            } else {
                this.fichas[i].setSelected(false);
            }
        }

    }

    //Cuando el player mueve la ficha llama a ficha.move()
    onMouseMove(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        for (let i = 0; i < this.fichas.length; i++) {
            if (this.fichas[i].isSelected(e) && !this.fichas[i].isUsada()) {
                if (x > 0 && x < canvasWidth && y > 0 && y < canvasHeight) {
                    this.fichas[i].move(x, y, e);
                    
                    return;
                } else {
                    this.mouseUp(e);
                }
            }
        }
    }
    
    //Cuando se suelta la ficha se fija que este encima del tablero si es asi la setea en juego sino la retorna a su posicion inicial
    onMouseUp(e){
        let x = e.offsetX;
        let y = e.offsetY;
        this.fichas.forEach(chip => {
            if (chip.isSelected()&&!chip.isUsada()) {
            if (x > 250 && x < 800 && y > 0 && y < 40 && this.getTurno()) {
                this.columna = false;
                let posCol = 250;
                let i = 0;
                while (!this.columna && i<= this.col) {
                    if (x > posCol && x < posCol + 55 && !chip.enJuego) {
                            chip.setCol(i);
                            chip.setUso(true);
                            chip.setEnJuego(true);
                            this.columna = true;
                        } else {
                            posCol += 55;
                            i++;
                        }
                    }
                } else {
                   chip.returnToPos();
                }
            }
                chip.setSelected(false);
            });
        

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
        canvas.addEventListener('mouseout', (e) => {
            this.onMouseUp(e)
        });
    }

    init() {
        this.initEvents();
    }
}