const ticket = require("../ticket"); // Two dots because we go level up in a folder ***
const { expect } = require('chai');

describe("Testing Calculate ticket function", () => {
    it("should return 0 if passenger is 2 years or younger", () => {
        const opts = {
            age: 1,
            baseFare: 100
        }
        const res = ticket.calculateTicket(opts);
        expect(res).to.be.equal(0);
    });
    it('should return half price if passenger is a child', () => {
        const opts = {
            age: 10,
            baseFare: 1000
        }
        const res = ticket.calculateTicket(opts);
        expect(res).to.be.equal(500);
    });
    it('should return full price for adult passenger', () => {
        const opts = {
            age: 33,
            baseFare: 1000
        }
        const res = ticket.calculateTicket(opts);
        expect(res).to.be.equal(1000);
    });
});
it('should return dicounted price for senior passengers', () => {
    const opts = {
        age: 75,
        baseFare: 1000
    }
    const res = ticket.calculateTicket(opts);
    expect(res).to.be.equal(800);
});
