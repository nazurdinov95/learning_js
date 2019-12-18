let num = [123, 2, 104];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i].toString().split('').map(Number)
      .reduce((res, el) => res + el,);
}
console.log(sum);

