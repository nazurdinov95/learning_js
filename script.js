
let num = [123, 2];

const sum = num => num.toString().split('').map(Number)
    .reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), );

console.log(sum(num));

