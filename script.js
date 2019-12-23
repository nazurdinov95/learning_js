let strings = ['Amr', 'Jimmy'];
let sum = 0;

strings.forEach((elem) => {
  sum += (elem.length);
});
console.log(sum);

//sum length element
let stringArry = ['Hello', 'World'];

let sumStr = 0;
for (let i = 0; i < stringArry.length; i++) {
  sumStr += stringArry[i].length;
}
console.log(sumStr);

//length every element
const emotions = ['happy', 'sad', 'angry'];
let arr = [];
emotions.forEach(emotion => (arr.push(emotion.length)));

console.log(arr);