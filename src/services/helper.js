import Point from "../elements/point.js";
import Tooltip from "../elements/tooltip.js";

const mapBpiOnPoint = (bpi) => {
    const point = new Point();
    point.setData(bpi);
    return point;
}

const calculateCoordinat = (border, maxValues, deltaDate) => (point) => {
    point.calculetX(border.width, maxValues.maxDate, deltaDate);
    point.calculetY(border.height, maxValues.maxPrice);
}

const drawLines = (canvas) => (point1, index, array) => {
    if(index + 1 === array.length){
        return;
    } 

    const point2 = array[++index];
    canvas.drawLine(point2, point1)
}

const drawToolTip = (point) => {
    const tooltip = new Tooltip(point);
    tooltip.draw();
}

const drawChart = (points, canvas, props) => {
    points.forEach(calculateCoordinat(props.border, props.maxValues, props.deltaDate ));
    points.forEach(drawLines(canvas));
    const drawPointWithContext = canvas.drawPoint.bind(canvas);
    points.forEach(drawPointWithContext);
    points.forEach(drawToolTip);
}

export{
    mapBpiOnPoint,
    calculateCoordinat,
    drawLines,
    drawToolTip,
    drawChart,
};