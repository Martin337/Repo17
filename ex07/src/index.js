const range = {
    max: 100.00,
    min: -25.00,
    num1: 17.50,
    num2: 88.80,
    average: 45.325
};

const middle = (range) => {
    const {max, min} = range;
    return (range.max + range.min)/2;
}

console.log(middle(range));
module.exports = middle;