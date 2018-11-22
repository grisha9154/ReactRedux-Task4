export default class Tooltip {
    constructor(point){
        this.point = point
    }

    draw(){
        const div = document.createElement('div');
        div.className = 'tooltip';
        const span = this.createToolTipText();     
        div.appendChild(span);
        div.style.position = 'absolute';
        div.style.left = `${this.point.x-1.5}px`;
        div.style.top = `${this.point.y-1.5}px`;
        const body = document.getElementsByTagName('body'); 
        body[0].appendChild(div);
    }

    createToolTipText() {
        const span = document.createElement('span');
        span.className = 'tooltiptext';
        const textPrice = document.createTextNode(this.point.price);
        const price = document.createElement('div');
        price.appendChild(textPrice);
        const textDate = document.createTextNode(this.point.date.toISOString().slice(0,10));
        const date = document.createElement('div');
        date.appendChild(textDate);
        span.appendChild(price);
        span.appendChild(date);
        return span; 
    }
}