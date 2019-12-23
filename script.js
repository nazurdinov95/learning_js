
let numArray = [5, 3, 6, 9, 15, -1];

let sumArray =0;

  numArray.forEach((num) => sumArray +=num);

  let max = Math.max.apply(null, numArray);
  let min = Math.min.apply(null,numArray);
  let sumMinMax = max + min;
    sumArray -= sumMinMax;

  console.log(sumArray);