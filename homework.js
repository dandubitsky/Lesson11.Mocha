const {expect} = require('chai');

const rectangle=require('./rectangle');

console.log(rectangle.calculteRectangleArea(7, 4))


try{
    rectangle.calculteRectangleArea("mosue", 4)
} catch (err){
    console.log
}

