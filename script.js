let num = [123, 2, 104];
let sum = 0;

num.toString().split('').map(Number).forEach((number) => sum += number);

console.log(sum);
