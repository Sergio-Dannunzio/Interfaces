class Circle extends Figure{
    constructor(posX,posY,radius,fill,context){
        super(posX,posY,fill,context);
        this.radius = radius;
        this.img = new Image();
        const imageSrc = 'img/4enLinea/Player1.png';
        this.img.src = imageSrc;
    }

    draw(){

        ctx.drawImage(this.img, this.posX , this.posY , 80, 80);

    }
    setPosition(x, y){
        var rect = canvas.getBoundingClientRect();
        this.posX = x - rect.left ;
        this.posY = y - rect.top - this.radius/2;

    }

    getRadius(){
        return this.radius;
    }

    isPointInside(x,y){
        var rect = canvas.getBoundingClientRect();
        let _x = this.posX - x + rect.left;
        let _y = this.posY - y + rect.top;
        return Math.sqrt(_x * _x  + _y * _y) < this.radius;

    }


}