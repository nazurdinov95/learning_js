const numbers = [12, 5, 1, 3, 1, 10, 6, 5];

nonUnique = numbers.filter((v, i) => numbers.indexOf(v) !== numbers.lastIndexOf(v));

console.log(nonUnique);