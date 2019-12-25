let numArray = [49, 1, 4, 6, 7, 1, 0, -3, 0, 1, 2, 34, 5];

const minNum = Math.min(... numArray);
const maxNum = Math.max(... numArray);

const indexMin = numArray.indexOf(minNum);
const indexMax = numArray.indexOf(maxNum);

let startIn = numArray[indexMin];

numArray[indexMin] = numArray[indexMax];
numArray[indexMax] = startIn;

console.log(numArray);