const ticket = require("../ticket"); // Two dots because we go level up in a folder ***

describe("Testing Calculate ticket function", () => {
    it("should return 0 if passenger is 2 years or younger", () => {
        const opts = {
            age: 1,
            baseFare: 100
        }
        const res = ticket.calculateTicket(opts);
        expect(res).to.be.equal(0);
    });
});
//     it.only('should return half price if passenger is a child', function(){
//         const ops = {
//             age: 0,
//             baseFare:10
//         }

//         const res = ticket.calculateTicket(opts);
//         }
//     })
// })