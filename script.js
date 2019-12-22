let num = [123, 2, 104];
let sum = 0;

num.forEach(num => {
  sum += num.toString().split('').map(Number).reduce((res, el) => res + el);
});

console.log(sum);
