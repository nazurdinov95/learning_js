let summar = [10, 12, 14];

  let numberSum =(arr) => {
  let arrSum = 0;
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = eval(summar.toString().split('').join('+'));
    arrSum += arr[i];
  }
  console.log(numberSum(summar));
};
