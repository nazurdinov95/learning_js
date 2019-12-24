const numArray = [1, 4, 6, 7, 1, 0, -3, 0, 1, 2, 34, 5, 49];

const min = Math.min.apply(null, numArray);
const max = Math.max.apply(null, numArray);

const indexMin = numArray.indexOf(min);
const indexMax = numArray.indexOf(max);

const removed = numArray.slice(indexMin, indexMax);

let sumArray = 0;

removed.forEach((num) => sumArray += num);

console.log(sumArray - min);
