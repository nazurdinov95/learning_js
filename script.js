let strings = ['Amr', 'Jimmy'];
let sum = 0;

strings.forEach((elem) => {
  sum += elem.length;
});
console.log(sum);

let stringArry = ['Hello', 'World'];

let sumStr = 0;
for (let i = 0; i < stringArry.length; i++) {
  sumStr += stringArry[i].length;
}
console.log(sumStr);
