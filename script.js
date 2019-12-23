
let numArray = [1, 4, 6, 7, 1, 0, -3, 0, 1, 2, 34, 5, 49];

let sumArray =0;

  numArray.forEach((num) => sumArray +=num);

  let max = Math.max.apply(null, numArray);
  let min = Math.min.apply(null,numArray);
  let sumMinMax = max + min;
    sumArray -= sumMinMax;

  console.log(sumArray);