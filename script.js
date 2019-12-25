const numArray = [49, 1, 4, 6, 7, 1, 0, -3, 0, 1, 2, 34, 5];

const min = Math.min(... numArray);
const max = Math.max(... numArray);

const indexMin = numArray.indexOf(min);
const indexMax = numArray.indexOf(max);
let removed;
if (indexMax < indexMin) {
  removed = numArray.slice(indexMax+1, indexMin);
} else {
  removed = numArray.slice(indexMin, indexMax);
}

let sumArray = removed.reduce((sum,num) => sum + num);

console.log(sumArray);