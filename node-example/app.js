const rect = require('./rectangle')

function solveRect(l, w){
console.log(`solving for rectangle width dimemesion ${l},${w}`);

if(l <= 0 || w <= 0 ){
    console.log(`Rectangle dimensions should be greater than zero.
    The values passed in were: ${l}, ${w}`);

} else{
    console.log(`Area of rectangle: ${rect.area(l, w)}`);
           console.log(`Perimeter of rectangle', ${rect.perimeter(l, w)}`);
}
}

