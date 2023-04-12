// // 1. Create new test file in test folder.
// // 2. Make a test that an object with properties name and age has the property name and its value is string. (example: expect(obj).to.have.property('age').to.be.a('number');) 
// //Every test consosts of three parts: Precondition, test, compare actual result with expected!

const {expect}=require('chai');

// describe("Testing that an object has property name and its value is a string", ()=>{
//     it("should have a name that is a string", ()=>{
//         const person = 
//         const props={
//             name: "James",
//             age: 56
//         }
//         //let name = str;
//         expect(props).to.have.property(name).to.be.a('string');
//     })
// })


// 3. Make a test that array [1,3,5,7,-1,2,5] has element 3 
// ( example: expect([1, 2, 3]).to.include(2);)
describe('Testing that array has element 3', ()=>{
    it('should have an element "3"', ()=>{
        const arr = [1,3,5,7,-1,2,5];
        expect(arr).to.include(3);        
    });
});

// 4. Create Make a test any number multiplied by 0 is equal 0.
describe('Testing that any number multiplied by 0 is equal 0', ()=>{
    it('should return 0 if multiplied by 0', ()=>{
        const anyNumber = 3;
        const res = anyNumber*0;
        expect(res).to.be.equal(0);
    })
})
// 5. Create  division function in js file which will give 
// - an error message 'Division by zero is not allowed' when denominator is equal 0  - returns result of division if denominator not equal to 0.
// 6. Import function in test file and create test for division function.