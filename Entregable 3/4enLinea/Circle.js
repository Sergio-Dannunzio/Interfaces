class Circle extends Figure{
    constructor(posX,posY,radius,fill,context){
        super(posX,posY,fill,context);
        this.radius = radius;
    }

    draw(){
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.posX,this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();


        if(this.resaltado === true){
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
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