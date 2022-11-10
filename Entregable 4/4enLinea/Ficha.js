class Ficha{
    constructor(posX,posY,radius,imageSrc,player){
        this.posX = posX;
        this.posY = posY;
        this.oldPosX = posX;
        this.oldPosY = posY;
        this.radius = radius;
        this.img = new Image();
        this.img.src = imageSrc;
        this.col = -1;
        this.usada = false;
        this.enMatriz = false;
        this.enJuego = false;
        this.player = player;
    }

    setImg(img){
        this.img.src = img;
    }

    //Dibuja cada ficha
    draw(){
        ctx.drawImage(this.img, this.posX , this.posY , 45, 45);
    }

    setposX(posX) {
        this.posX = posX;
    }

    setposY(posY) {
        this.posY = posY;
    }

    getFicha() {
        return this;
    }

    getCol() {
        return this.col;
    }

    setCol(col) {
        this.col = col;
    }

    setEnMatriz(enMatriz) {
        this.enMatriz = enMatriz;
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    getPosition(){
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }
    setPosition(x, y){
        var rect = canvas.getBoundingClientRect();
        this.posX = x - rect.left - 45/2 ;
        this.posY = y - rect.top - 45/2;

    }

    setUso(usada) {
        this.usada = usada;
    }

    returnToPos() {
        this.posX = this.oldPosX;
        this.posY = this.oldPosY;
    }

    getRadius(){
        return this.radius;
    }

    serResaltado(resaltado){
        this.resaltado = resaltado;
    }

    //Se fija si la ficha esta seleccionada
    checkSelected(x, y) {
        return x > (this.posX  - this.radius*2) && x < (this.posX  + this.radius*2) && (y > this.posY  - this.radius*2) && y < (this.posY  + this.radius*2);
    }

    isSelected() {
        return this.selected;
    }

    isUsada() {
        return this.usada;
    }

    setSelected(selected) {
        this.selected = selected;
    }

    setEnJuego(pasada) {
        this.enJuego = pasada;
    }

    //Mueve la ficha
    move(x, y) {
        if (x > this.radius && x < (1150 - this.radius) && y > this.radius && y < (580 - this.radius)) {
            this.posX = x - this.radius;
            this.posY = y - this.radius;
        }
    }

}