export default class Canvas {
    constructor(root){
        this.element = document.createElement('canvas');
        this.element.width = 600;
        this.element.height = 600;
        root.appendChild(this.element);
        this.context = this.element.getContext('2d');
    }

    drawLine(p1, p2){
        this.context.beginPath();
        this.context.moveTo(p1.x, p1.y);
        this.context.lineTo(p2.x,p2.y);
        this.context.stroke();
    }

    drawPoint(point){
        this.context.beginPath();
        this.context.arc(point.x, point.y, 2,0, 2*Math.PI);
        this.context.fillStyle = 'red';
        this.context.fill();
        this.context.stroke();
    }
}