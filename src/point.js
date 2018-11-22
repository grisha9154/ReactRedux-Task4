export default class Point {
    constructor(){
        this.date;
        this.price;
        this.x;
        this.y;
    }
    
    setData(data) {
        this.date = new Date(data.date);
        this.price = data.price;
    }

    calculetY(height, maxValue){
        this.y = (height*1.5) - ((height * this.price) / maxValue) ;
    }

    calculetX(width, maxValue, deltaDate){
        this.x = ((width * (this.date.getTime() - deltaDate)) / maxValue);
    }

}