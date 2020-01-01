let numbers = [12, 5, 1, 3, 1];

    unique = numbers.filter((v, i) => numbers.indexOf(v) === numbers.lastIndexOf(v));

console.log(unique);