import FetchApi from './services/fetchApi.js';
import Canvas from './elements/canvas.js';
import {
    mapBpiOnPoint,
    drawChart,
} from './services/helper.js';

(async function(){
    const query = await FetchApi.get('https://api.coindesk.com/v1/bpi/historical/close.json');
    const data = await query.json();
    const canvas = new Canvas(document.getElementById('root'));

    const border = {height: canvas.element.height , width: canvas.element.width};

    const deltaDate = new Date().setMonth(new Date().getMonth()-1);
    const maxDate = new Date().getTime() - deltaDate;

    const mapBpi = Object.keys(data.bpi).map((key) => ({date: key, price: data.bpi[key]}))

    const maxPrice = Math.max(...mapBpi.map((bpi) => bpi.price));

    const maxValues = {maxDate, maxPrice};

    const points = mapBpi.map(mapBpiOnPoint);
    drawChart(points, canvas, {maxValues,border, deltaDate  });
})();