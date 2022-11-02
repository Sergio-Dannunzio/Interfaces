class Ficha{
    constructor(posX,posY,radius,imageSrc){
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.img = new Image();
        this.img.src = imageSrc;
    }

    draw(){
        ctx.drawImage(this.img, this.posX , this.posY , 45, 45);
    }
    
    getFill(){
        return this.fill;
    }
    setFill(fill){
        this.fill = fill;
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

    getRadius(){
        return this.radius;
    }

    serResaltado(resaltado){
        this.resaltado = resaltado;
    }

    isPointInside(x,y){
        var rect = canvas.getBoundingClientRect();
        let _x = this.posX - x + rect.left + this.radius;
        let _y = this.posY - y + rect.top + this.radius;
        return Math.sqrt(_x * _x  + _y * _y) < this.radius;
    }


}