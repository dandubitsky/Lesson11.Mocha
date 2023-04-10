/**
 * Calculate ticket price
 * @param opts {object} params passed in
 * @param opts.age {number} - passenger age
 * @param opts.baseFare {number} - price of ticket for adult passsenger 
 * @returns {number} - ticket price depends on age
 */

const calculateTicket = (opts) => {
    if(opts.age<=2){
        return 0;
    }
    if(opts.age<13){
        return opts.baseFare * 0.5;
    }
    if(opts.age>65){
        return opts.baseFare * 0.8;
    }
    return opts.baseFare;
}

module.exports = {calculateTicket};