const {expect} = require("chai");
const rectangle=require("../rectangle");

describe("Testing Calculate rectangle area function", ()=>{
    it("should return error message if ether length or width is not a number", ()=>{
        const params = {
            length: 7,
            width: 4,
        }
        const res = rectangle.calculteRectangleArea(params);
        expect(length).to.be('number', "Length and width must be numbers!");
        expect(width).to.be('number', "Length and width must be numbers!")
    })
})