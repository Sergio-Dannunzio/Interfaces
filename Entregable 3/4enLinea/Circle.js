class Circle extends Figure{
    constructor(posX,posY,radius,imageSrc,context){
        super(posX,posY,imageSrc,context);
        this.radius = radius;
        this.img = new Image();
        this.img.src = imageSrc;
    }

    draw(){

        ctx.drawImage(this.img, this.posX , this.posY , 80, 80);

    }
    setPosition(x, y){
        var rect = canvas.getBoundingClientRect();
        this.posX = x - rect.left - 80/2;
        this.posY = y - rect.top - 80/2;

    }

    getRadius(){
        return this.radius;
    }

    isPointInside(x,y){
        var rect = canvas.getBoundingClientRect();
        let _x = this.posX - x + rect.left + this.radius/2;
        let _y = this.posY - y + rect.top + this.radius/2;
        return Math.sqrt(_x * _x  + _y * _y) < this.radius;

    }


}