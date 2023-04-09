const { expect } = require('chai');
/**
 * 
 * @param {number} length - length of rectangle
 * @param {number} width - width of rectangle
 * @returns {number} - rectangle area
 *
 */
const calculteRectangleArea = (length, width) => {
    const rectangleArea = (length * width);
    return rectangleArea;
}
expect(length).to.be('number', "Length and width must be numbers!");
expect(width).to.be('number', "Length and width must be numbers!");

module.exports = { calculteRectangleArea }




