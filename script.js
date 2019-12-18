let num = [123];

sum =num.toString().split('').map(Number).reduce(function (a, b) {
      return a + b;
    }, );
console.log(sum);